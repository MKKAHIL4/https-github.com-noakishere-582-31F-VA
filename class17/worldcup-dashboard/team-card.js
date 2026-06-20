//TEAM HELPERS

//adding stars for the cups they one in the card
function getTeamStars(name) {

    const stars = {
        "Argentina": 3,
        "France": 2,
        "Brazil": 5,
        "Japan": 0,
        "Morroco": 0,
        "Canada": 0,
    
    };

    return stars[name] || 0;
}

function getTeamTheme(name) {
    
    const themes = {
        "Argentina": {
            colors: ["#74ACDF", "#FFFFFF"],
            Accent: "#74ACDF",
            icon: "AR"
        },
        
        "France": {
            colors: ["#0055A4", "#ffffff", "#ef4135"],
            Accent: "#0055A4",
            icon: "FR"
        },
        
        "Brazil": {
            colors: ["#009C3B", "#FFDF00", "#002776"],
            Accent: "#009C3B",
            icon: "BR"
        },
        
        "Morroco": {
            colors: ["#C1272D", "#006233"],
            Accent: "#C1272D",
            icon: "MA"
        },
        
        "Canada": {
            colors: ["#FF0000", "#FFFFFF"],
            Accent: "#FF0000",
            icon: "CA"
        },
        
        "Japan": {
            colors: ["#BC002D", "#FFFFFF"],
            Accent: "#BC002D",
            icon: "JP"
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
        this.team = null;
        
    }
    //DATA INPUT

    set team(data){
        this._team = data;
        this.rednder();
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
        return this._team?.getGoalDifference;
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
                ${"⭐".repeat(getTeamsStars(name))}
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
                    GoalDifference: goalDiff
                    }
             }));
        };

    }
}
customElements.define("team-card", TeamCard);
