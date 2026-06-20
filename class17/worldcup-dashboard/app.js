import { fetchTeams } from "./api.js";
import { Team } from "./team.js";
import { renderTeams } from "./ui.js";

import "./team-card.js";

//DOM ELEMENTS

const loadBtn = document.getElementById("load-btn");
const clearBtn = document.getElementById("clear-btn");

const status = document.getElementById("status");
const teamsContainer = document.getElementById("teams-container");
const detailsContainer = document.getElementById("details-container");

//LOAD TEAMS..

loadBtn.addEventListener("click", async () => {
    console.log("Load button clicked");

    try {
        status.textContent = "Laoding teams....";

        const data = await fetchTeams();

        console.log("Raw data:", data);

        const teams = data.map(t => Team.fromObject(t));

        console.log("Mapped teams:", teams);

        renderTeams(teams, teamsContainer);

        status.textContent = "Teams loaded Successfully.";
   
    }catch (error){

        console.error("Error loadng teams:", error);
        
        status.textContent = "Failed to load teams (check console).";

    }
});

// CLEAR DASHBOARD

clearBtn.addEventListener("click", () =>{

    console.log("clear button clicked");

    teamsContainer.innerHTML = "";
    detailsContainer.innerHTML = "";

    status.textContent = "Dashboard cleared. click LOAD to begin."
});

//TEAM DETAILS EVENT

document.addEventListener("team-selected", (event) => {
    const t = event.detail;
    detailsContainer.innerHTML  =`
    
        <div class="overlay">
        
            <button id="close-details">X</button>

            <div class="team-details-card">
                <div class="ball">⚽</div>

                <h2>${t.name}</h2>
                <p class="group">Group: ${t.group}</p>
                <p class="points">Points: ${t.points}</p>
                <p class="played">Played: ${t.played}</p>
                <p class="gd">Goal Diff: ${t.goalDifference}</p>
                
            </div>
        </div>
    `;

    const closeButton = 
    document.getElementById("close-details")
    closeButton.addEventListener("click", () => {
        detailsContainer.innerHTML = "<p>No team selected.</p>";
    });

    
});
