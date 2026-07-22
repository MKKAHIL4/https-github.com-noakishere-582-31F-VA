const WEATHER_API = "https://api.open-meteo.com/v1/forecast";

class CurrentWeather extends HTMLElement {
    
    constructor(){
        super();
        this.attachShadow({
            mode:"open"
        });
    }

    connectedCallback(){
        this.loadWeather();
    }

    loadWeather() {
        const latitude =this.getAttribute("latitude");
        const longitude =this.getAttribute("longitude");

        if(latitude && longitude){
            this.fetchWeather(latitude, longitude);
        
        }else{
            this.getUserLocation();
        }
    }
    getUserLocation(){
        if(!navigator.geolocation){
            this.renderError(
                "Geolocation is not Supported "
            );
            return;

        }
        
    navigator.geolocation.getCurrentPosition(
        (position)=> {
            const latitude = position.coords.latitude;
            const longitude = position.coords.longitude;

            this.fetchWeather(latitude, longitude);
        
        },
        () => {
            this.renderError(
                "Location permission denied"
            );
        }
    );    

    }
    async fetchWeather(latitude, longitude) {
        try{
            const url = `${WEATHER_API}?latitude=${latitude}&longitude=${longitude}&current=temperature_2m,wind_speed_10m`;


            const response = await fetch(url);

            if (!response.ok){
                throw new Error(
                    "Weather request failed"
                );

            }

            const data = await response.json();
            
            console.log("Weather Data:", data);

            this.renderWeather(
                data.current
            );
            
        }catch(error) {
            this.renderError(
                error.message
            );

        }
    }

    renderWeather(weather) {
        this.shadowRoot.innerHTML =`
        <div class="weather-card">
            
            <h3>Current Weather temperature</h3>
            <p class="temperature">
                ${weather.temperature_2m} 
            </p>

            <p class="wind">
                ${weather.wind_speed_10m}km/h
            </p>
        </div>
        
        `;
    }
    renderError(message){
        this.shadowRoot.innerHTML = `
            <div class="weather-card">
                <p class="error">
                    Error: ${message}
                </p>
            </div> 
        `;
    }

}   
customElements.define(
    "current-weather",
    CurrentWeather
);