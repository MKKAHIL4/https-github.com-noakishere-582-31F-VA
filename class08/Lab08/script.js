//Variable declaration
const loadBtn = document.getElementById("loadBtn");
const clearBtn = document.getElementById("clearBtn");
const statusArea = document.getElementById("statusArea");
const userContainer = document.getElementById("userContainer");
const searchInput = document.getElementById("searchInput");

let cachedPosts = {};
let loadedUsers = [];

//Status Fucntion 
function setStatus(message, type = "secondary") {
    statusArea.innerHTML = `
        <div class="alert alert-${type}">
            ${message}
        </div>    
    `;
}

// clear dahsboard reset

function clearDashboard() {
    userContainer.innerHTML = "";
    statusArea.innerHTML = "";
    searchInput.value = "";
}

// Load Users
async function loadUsers(){
    try{
        setStatus(`
            <div class="spinner-border spinner-border-sm me-2"></div>
            Loading Users....`, "dark");
        const response = await fetch("https://jsonplaceholder.typicode.com/users");
        if(!response.ok){
            throw new Error("Failed to Fetch users.");
        }

        const users = await response.json();

        loadedUsers = users.slice(0, 5);

        userContainer.innerHTML = "";

        loadedUsers.forEach(user => {
            renderUserCard(user);
            
        });
        setStatus("Users loaded successfully.", "success");
    }catch (error){
        setStatus(error.message, "danger");
    }
}


loadBtn.addEventListener("click", loadUsers);
clearBtn.addEventListener("click", clearDashboard);