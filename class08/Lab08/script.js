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
    searchInput.innerHTML = "";
}

