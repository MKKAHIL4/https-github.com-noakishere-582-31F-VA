
export async function fetchTeams() {
    
    try{

        console.log("Fetching teams.json...");

        const response = await fetch("./teams.json");

        console.log("Response:", response);

        if(!response.ok){
            throw new Error("Failed to load teams.json");
        }

        const data = await response.json();

        console.log("Teams JSON loaded:", data);

        return data;

    } catch(error){
        console.error("API Error:", error);
        throw error;
    }
}

