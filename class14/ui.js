import { Tournament } from "./tournament.js";

export function showStatus(message, type = "info") {
    const statusArea = document.getElementById("statusArea");

    statusArea.className = `alert alert-${type}`;
    statusArea.textContent = message;
}

export function renderTournaments(tournaments, registrationCallback){

    const container = document.getElementById("tournamentContainer");
    container.innerHTML = "";

    tournaments.forEach(tournament => {

        const col = document.createElement("div");
        
        col.className = "col-md-4 mb-4";

        col.innerHTML = `
        <div class="card h-100">
            <div class="card-body">

            <h5 class="card-title">
            ${tournament.name}</h5>
            
            <p>
            <strong>Game:</strong>
            ${tournament.game}
            </p>

            <p>
            <strong>Entry Fee:</strong>
            ${tournament.entryFee}
            </p>

            <p>
            <strong>Max Players:</strong>
            ${tournament.maxPlayers}
            </p>

            <p>
            <strong>Registered Players:</strong>
            ${tournament.registeredPlayers}
            </p>

            <p>
            <strong>Status:</strong>
            ${tournament.status}
            </p>
            
            <button class="btn btn-success view-btn">
            View Registrations
            </button>
          </div>
        </div>
        `;
        col
            .querySelector(".view-btn")
            .addEventListener("click", () => {
                registrationCallback(tournament);
            });
        container.appendChild(col);
        
    });
}
export function renderRegistrations(
    registrations, tournament
) {
    const container = document.getElementById("registrationContainer");
    if (registrations.length === 0) {

        container.innerHTML = `
        <div class="alert alert-warning">
        NO Registration found
        </div>
        `;
        return;
    }

    let confirmedCount = 0;
    registrations.forEach(reg => {
        if (reg.status === "confirmed"){
            confirmedCount ++;
        }
    });
    const revenue = confirmedCount * tournament.entryFee;
    
    let html = `
        <div class="card mb-3">
            <div class="card-body">
            <h4>Summary</h4>

            <p>
                <strong>Total Registration: </strong>
                ${registrations.length}
            </p>

            <p>
                <strong> Confirmed Players: </strong>
                ${confirmedCount}
            </p>
    
            <p>
                <strong>Expected Revenue:</strong>
                ${revenue}
            </p>

            <p>
                <strong>Spots left:</strong>
                ${tournament.spotsLeft}
            </p>
        </div>
    </div>
        
    `;
    html += `<h4>Player Registrations</h4>`;

    registrations.forEach(reg => {
        html += `
        <div class="card mb-2">
            <div class="card-body">
            
            <p>
                <strong>Player:</strong>
                ${reg.playerName}
            </p>

            <p>
                <strong>Gamer Tag:</strong>
                ${reg.gamerTag}
            </p>

            <p>
                <strong>Ticket Type:</strong>
                ${reg.ticketType}
            </p>

            <p>
                <strong>Status:</strong>
                ${reg.status}
            </p>
            </div>
        </div>
        `;
    });
    container.innerHTML = html;
}
