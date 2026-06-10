export async function fetchTournaments() {
    const response = await fetch("tournaments.json");

    if(!response.ok){
        throw new Error("Failed to load tournaments."); 
    }

    return await response.json();
    
}

export async function fetchRegistrations() {
    const response = await fetch("registrations.json");

    if(!response.ok){
        throw new Error("Failed to load Registrations."); 
    }

    return await response.json();
    
}
