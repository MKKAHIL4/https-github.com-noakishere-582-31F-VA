import { fetchTournaments } from "./api.js";
import { fetchRegistrations } from "./api.js";

import { Tournament } from "./tournament.js";

import {
    renderTournaments,
    renderRegistrations,
    showStatus
} from "./ui.js";

const loadBtn = document.getElementById("loadBtn");

const clearBtn = document.getElementById("clearBtn");

loadBtn.addEventListener("click", loadTournaments);

clearBtn.addEventListener("click", clearPage);

async function loadTournaments() {
    try {
        showStatus(
            "Loading tournaments...","info"
        );
        const data = await fetchTournaments();

        const tournaments = data.map(item => 
            Tournament.fromObject(item)
        );

        renderTournaments(tournaments, loadRegistrations);

        showStatus("Tournaments loaded successfully.", "success");
    } catch (error) {
        showStatus(error.message, "danger");
    }
    
}

async function loadRegistrations(tournament) {

    const container = document.getElementById("registrationContainer");

    container.innerHTML = `
    <div class="alert alert-info"> Loading Registrations...</div>
    
    `;
    try {
        const registrations = await fetchRegistrations();

        const filtered = registrations.filter(reg => reg.tournamentId === tournament.id);

        if (filtered.length === 0) {
            throw new Error("No registrations found for this tournament.");
        }
        renderRegistrations(filtered, tournament);
    }catch(error) {
        container.innerHTML = `
        <div class="alert alert-danger">
        ${error.message}
        </div>
        `;

    }
}
function clearPage(){
    document.getElementById("tournamentContainer").innerHTML = `
    <p class="text-muted">Tournament Card will Appear here.</p>
    `;

    document.getElementById("registrationContainer").innerHTML =  `
    <p class="text-muted">Select a tournament to view registrations.</p>
    `;
    showStatus("Dashboard cleared.", "secondary");
}