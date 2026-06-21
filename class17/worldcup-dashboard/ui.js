export function renderTeams(teams, container) {
    console.log("Rendering teams:", teams);
    
    container.innerHTML = "";

    teams.forEach(team => {
        const card = document.createElement("team-card");
        
        //required for Shadow DOM version
        card.team = team;

        container.appendChild(card);
    
    });
}