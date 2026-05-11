const loadBtn = document.getElementById("loadBtn");
const clearBtn= document.getElementById("clearBtn");
const statusArea = document.getElementById("statusArea");
const userCardArea = document.getElementById("userCardArea");

//helper to show status messages using boot strap alert

function showStatus(message, type = "info") {
    statusArea.innerHTML = ` 
    <div class="alert alert-${type} py-2 mb-0" role="alert">
    ${message}
    </div>`;
}

