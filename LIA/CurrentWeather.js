console.log ('CurrentWeather.js loaded');

const WEATHER_API = 'https://api.open-meteo.com/v1/forecast';
class CurrentWeather extends HTMLElement {
  constructor () {
    super ();
    this.attachShadow ({
      mode: 'open',
    });
    this.temperatureUnit = 'celsius';
  }

  getStyles () {
    return `
    <style>
    body{
    margin: 0;
    font-family: 'Courier New', Courier, monospace;
   
    min-height:100vh;
    background:white;
}

header{
    text-align: center;
    padding:20px;

}
main {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
}
h1{
    color:bisque;
    font-size: 40px;
    text-shadow: 2px 2px 5px #555;
}

h2{
    color:white;
    margin-top: 30px;
}

.sky{
	width: 700px;
	min-height: 350px;
	background:
	url("https://thumbs.dreamstime.com/b/sea-sand-sun-beach-blue-sky-thailand-landscape-nature-viewpoint-background-park-outdoor-design-postcard-calendar-30302203.jpg");
    background-size:cover;
    background-position:center;
    border-radius: 30px;

    display: flex;
    justify-content: center;
	align-items: center;
	padding: 40px;

    box-shadow: 0 10px 25px rgba(0, 0, 0, 0.3);
	position: relative;
    overflow:hidden;
}
  
.weather-card{
    background: rgba(255, 255, 255, 0.18);

	backdrop-filter: blur(15px);
	-webkit-backdrop-filter:blur(15px);

    width:300px;
    padding:25px;
    border-radius: 30px;
    text-align: center;
    border:1px solid rgba(255, 255, 255, 0.35);
    box-shadow:0 10px 20px rgba(0, 0, 0, 0.25);
    color: white;
    position:relative;
    x-index:2;
}

.weather-card h3{
	color:#333;
	font-size: 22px;

}

.temperature{
	font-size: 45px;
	font-weight: bold;
	color: #0077cc;
}

.wind,.humidity,.precipitation,.time{
	font-size: 18px;
	margin: 12px;
	color: #444;

}

#unitBtn{
	border: none;
	background: #0077cc;
	color:white;
	padding: 12px 25px;
	border-radius: 20px;
	cursor: pointer;
	font-size: 16px;
}

#unitBtn:hover{
	background: #005fa3;
}

.cloud-input{
	width: 350px;
	padding: 50px 40px;
	background: white;
	border-radius: 60% 60% 50% 50%;
	text-align: center;
	box-shadow: 0 10px 25px rgba(0, 0, 0, 0.25);
}
.cloud-input h3{
	color: #0077cc;
}
.cloud-input input{
	width: 80%;
	padding: 12px;
	margin: 8px;
	border-radius: 20px;
	border: 1px solid #ccc;
}

.cloud-input button{
	background: #0077cc;
	color: white;
	border: none;
	padding: 12px 30px;
	border-radius: 20px;
	cursor: pointer;
}

#world{
    background-image:url("https://thumbs.dreamstime.com/b/sea-sand-sun-beach-blue-sky-thailand-landscape-nature-viewpoint-background-park-outdoor-design-postcard-calendar-30302203.jpg")
	margin-top: 30px;
	width: 700px;
	display: flex;
	flex-wrap: wrap;
	justify-content: center;
	gap: 20px;
}

#world h3{
	width: 100%;
	text-align: center;
	color: white;
	font-size: 28px;
}

.country-card{
	background: rgba(255, 255, 255, 0.18)
	width: 180px;
	padding: 20px;
	border-radius: 25px;
	text-align: center;
	box-shadow: 0 8px 15px rgba(0, 0, 0, 0.2);
}

.country-card h4{
	color: #0077cc;
	font-size: 20px;
}

.country-card p{
	color: #444;

}

.error{
	color: red;
	font-weight: bold;
}



@media(max-width:750px){
	.sky{
		width: 90%;
		padding: 25px;

	}

	#world {
		width: 90%;

	}
	.country-card{
		width: 90%;
	}
}

    </style>
    `;
  }

  connectedCallback () {
    this.loadWeather ();
  }

  loadWeather () {
    const latitude = this.getAttribute ('latitude');
    const longitude = this.getAttribute ('longitude');

    if (latitude && longitude) {
      this.fetchWeather (latitude, longitude);
    } else {
      this.getUserLocation ();
    }
  }
  getUserLocation () {
    if (!navigator.geolocation) {
      this.renderManualInput ('Geolocation is not Supported ');
      return;
    }

    navigator.geolocation.getCurrentPosition (
      position => {
        const latitude = position.coords.latitude;
        const longitude = position.coords.longitude;

        this.fetchWeather (latitude, longitude);
      },
      () => {
        this.renderManualInput (
          'Location permission denied. enter coordinates manually'
        );
      }
    );
  }
  async fetchWeather (latitude, longitude) {
    try {
      const url = `${WEATHER_API}?latitude=${latitude}&longitude=${longitude}&current=temperature_2m,wind_speed_10m,relative_humidity_2m,precipitation&temperature_unit=${this.temperatureUnit}&timezone=auto`;

      const response = await fetch (url);

      if (!response.ok) {
        throw new Error ('Weather request failed');
      }

      const data = await response.json ();

      console.log ('Weather Data:', data);

      this.renderWeather (data.current, latitude, longitude);

      await this.loadWorldWeather ();
    } catch (error) {
      this.renderError (error.message);
    }
  }

  renderWeather (weather, latitude, longitude) {
    this.shadowRoot.innerHTML = `
    ${this.getStyles ()}
        
        <div class="sky">
            <div class="weather-card">
                
                <h3>Current Weather temperature</h3>
                <p class="temperature">
                    ${weather.temperature_2m}
                    ${this.temperatureUnit === 'celsius' ? '°C' : '°F'} 
                </p>

                <p class="wind">
                    ${weather.wind_speed_10m} km/h
                </p>
                
                <p class="humidity">
                    Humidity:
                    ${weather.relative_humidity_2m}%
                </p>

                <p class="precipitation">
                    Precipitation:
                    ${weather.precipitation}mm
                </p>

                <p class="time">
                    Time:
                    ${weather.time}
                </p>

                <button id="unitBtn">
                    °C/°F 
                </button>
            
            </div>
        </div>
        <div id="world"> </div>    
            `;

    this.shadowRoot
      .querySelector ('#unitBtn')
      .addEventListener ('click', () => {
        this.changeTemperature ();
      });
  }

  renderManualInput (message) {
    this.shadowRoot.innerHTML = `
        
        <div class="cloud-input">
            
            <h3>${message}</h3>

            <p>Enter you location manually</p>    

            <input id="latitude" placeholder="Latitude">

            <input id="longitude" placeholder="Longitude">

            <button id="searchBtn">Weather</button>
        </div>
        
        `;

    this.shadowRoot
      .querySelector ('#searchBtn')
      .addEventListener ('click', () => {
        const latitude = this.shadowRoot.querySelector ('#latitude').value;
        const longitude = this.shadowRoot.querySelector ('#longitude').value;

        if (latitude && longitude) {
          this.fetchWeather (latitude, longitude);
        }
      });
  }
  changeTemperature () {
    if (this.temperatureUnit === 'celsius') {
      this.temperatureUnit = 'fahrenheit';
    } else {
      this.temperatureUnit = 'celsius';
    }

    this.loadWeather ();
  }

  async loadWorldWeather () {
    try {
      const locations = [
        {
          name: 'Canada',
          latitude: 45.5017,
          longitude: -73.5673,
        },

        {
          name: 'United States',
          latitude: 40.7128,
          longitude: -74.0060,
        },

        {
          name: 'Mexico',
          latitude: 19.4326,
          longitude: -99.1332,
        },

        {
          name: 'Japan',
          latitude: 35.6762,
          longitude: 139.6503,
        },
      ];

      let worldWeather = [];

      for (const location of locations) {
        const url = `${WEATHER_API}?latitude=${location.latitude}&longitude=${location.longitude}&current=temperature_2m,wind_speed_10m&temperature_unit=${this.temperatureUnit}`;
        const response = await fetch (url);
        const data = await response.json ();

        worldWeather.push ({
          name: location.name,
          temperature: data.current.temperature_2m,
          wind: data.current.wind_speed_10m,
        });
      }
      this.renderWorldWeather (worldWeather);
    } catch (error) {
      console.log ('world Weather error:', error);
    }
  }

  renderWorldWeather (data) {
    const worldContainer = this.shadowRoot.querySelector ('#world');

    if (!worldContainer) {
      return;
    }

    worldContainer.innerHTML = `
            <h3>World Weather</h3>

            ${data
              .map (location => `
                <div class="country-card">

                <h4>
                    ${location.name}
                </h4>

                <p>
                    Temperature:
                    ${location.temperature}
                    ${this.temperatureUnit === 'celsius' ? '°C' : '°F'}
                </p>

                <p>
                Wind:
                ${location.wind} km/h
                </p>
            </div>    
            
            `)
              .join ('')}
            
            `;
  }

  renderError (message) {
    this.shadowRoot.innerHTML = `
            <div class="weather-card">
                <p class="error">
                    Error: ${message}
                </p>
            </div> 
        `;
  }
}
customElements.define ('current-weather', CurrentWeather);
