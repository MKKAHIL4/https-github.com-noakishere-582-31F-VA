//TEAM HELPERS

//adding stars for the cups they one in the card
function getTeamStars(name) {

    const stars = {
        "Argentina": 3,
        "France": 2,
        "Brazil": 5,
        "Japan": 0,
        "Morocco": 0,
        "Canada": 0,
    
    };

    return stars[name] || 0;
}

function getTeamTheme(name) {
    
    const themes = {
        "Argentina": {
            colors: ["#74ACDF", "#FFFFFF"],
            accent: "#74ACDF",
            icon: "🇦🇷"
        },
        
        "France": {
            colors: ["#0055A4", "#ffffff", "#ef4135"],
            accent: "#0055A4",
            icon: "🇫🇷"
        },
        
        "Brazil": {
            colors: ["#009C3B", "#FFDF00", "#002776"],
            accent: "#009C3B",
            icon: "🇧🇷"
        },
        
        "Morocco": {
            colors: ["#C1272D", "#006233"],
            accent: "#C1272D",
            icon: "🇲🇦"
        },
        
        "Canada": {
            colors: ["#FF0000", "#FFFFFF"],
            accent: "#FF0000",
            icon: "🇨🇦"
        },
        
        "Japan": {
            colors: ["#BC002D", "#FFFFFF"],
            accent: "#BC002D",
            icon: "🇯🇵"
        }
    };
    return themes[name] || {
        colors:["#2196f3"],
        accent:"#2196f3",
        icon:"🌍"
    };

}

//Team Card Components

class TeamCard extends HTMLElement {
    constructor() {
        super();
        this.attachShadow({ mode: "open" });
        this._team = null;
        
    }
    //DATA INPUT

    set team(data){
        this._team = data;
        this.render();
    }

    //HELPER METHODS
    
    getName() {
        return this._team?.name;
    }
    getGroup() {
        return this._team?.group;
    }
    getPoints() {
        return this._team?.points;
    }
    getPlayed() {
        return this._team?.played;
    }
    getGoalDifference() {
        return this._team?.goalDifference;
    }
    
//Render
        render() {
            if (!this._team) return;

            const name = this.getName();
            const group = this.getGroup();
            const points = this.getPoints();
            const played = this.getPlayed();
            const goalDiff = this.getGoalDifference();
            const theme = getTeamTheme(name);
            //bg
            const bg =`linear-gradient(135deg, ${theme.colors.join(",")})`;

            this.shadowRoot.innerHTML = `
            <style>
                .card{
                    border-radius: 15px;
                    padding: 15px;
                    text-align: center;
                    box-shadow: 0 6px 15px rgba(0, 0, 0, 0.25);
                    transition: 0.3s;
                    color: #111;
                    margin: 10px;
                    background: ${bg};
                }

                .card:hover{
                    transform: scale(1.05);
                }

                .icon{
                    font-size: 24px;
                    margin-bottom: 5px;
                }

                .team-name{
                    font-family: "Trebuchet MS", "Segoe UI", cursive;
                    font-size: 22px;
                    font-weight: 900;
                    letter-spacing: 2px;
                    text-transform: uppercase;
                    text-shadow: 2px 2px 0 rgba(0, 0, 0, 0.25),
                                0px 0px 10px rgba(0, 0, 0, 0.3);
                    margin: 8px 0;
                    transform: skew(-3deg);
                    transition: 0.3s ease;
                }

                .card:hover .team-name{
                    transform: skew(-3deg) scale(1.08);
                }

                .badge{
                    display: inline-block;
                    padding: 6px 10px;
                    border-radius: 20px;
                    margin: 4px;
                    font-size: 12px;
                    font-weight: 700;
                    background: rgba(255, 255, 255, 0.75);
                }

                .stars {
                    margin-top: 10px;
                    font-size: 18px;
                    color: gold;
                    text-shadow: 0 0 8px rgba(255, 215, 0, 0.8);
                }

                button{
                    margin-top: 10px;
                    padding: 8px 14px;
                    border: none;
                    border-radius: 20px;
                    color: white;
                    cursor: pointer;
                    transition: 0.3s;
                    background: ${theme.accent};
                }

                button:hover{
                    transform: scale(1.08);
                    filter: brightness(1.2);
                }
            </style>

  
            <div class="card">
                <div class="icon">${theme.icon}</div>
                
                <h3 class="team-name">${name}</h3>

                <div class="badge">Group ${group}</div>
                <div class="badge">${points} pts </div>

                <div style=" margin-top:5px;font-size:13px;">
                    Played: ${played} | GD: ${goalDiff}
                </div>

                <button id="viewBtn">View Details ⚽ </button>

                <div class="stars">
                    ${"⭐".repeat(Math.max(0,getTeamStars(name)))}
                </div>

            </div>
       
            `;

        //EVENT
        this.shadowRoot.querySelector("#viewBtn").onclick = () => {
            this.dispatchEvent(new CustomEvent("team-selected", {
                bubbles: true,
                composed: true,
                detail: {
                    name, 
                    group,
                    points,
                    played,
                    goalDifference: goalDiff
                    }
             }));
        };

    }
}
customElements.define("team-card", TeamCard);
