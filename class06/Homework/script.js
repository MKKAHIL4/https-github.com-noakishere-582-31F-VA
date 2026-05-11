const loadBtn = document.getElementById("loadBtn");
const clearBtn= document.getElementById("clearBtn");
const statusArea = document.getElementById("statusArea");
const userCardArea = document.getElementById("userCardArea");

//helper to show status messages using boot strap alert

function showStatus(message, type = "info") {
    statusArea.innerHTML = "";
    const alert = document.getElementById("div");
    alert.className = `alert alert-${type} py-2 mb-0`;
    alert.textContent = message; 

    statusArea.appendChild(alert);
}

function showLoading() {
   statusArea.innerHTML = "";
   const alert = document.createElement("div");
   alert.className = "alert alert-warning d-flex align-items-center py-2 mb-0";

   const spinner = document.createElement("div");
   spinner.className = "spinner-border spineer-border-sm me-2";

   const text = document.createElement("span");
   text.textContent = "Loading JSON text from the API.....";

   alert.appendChild(spinner);
   alert.appendChild(text);

   statusArea.appendChild(alert);
}