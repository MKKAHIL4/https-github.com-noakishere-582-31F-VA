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

//building the sponge bob using create element.
function renderUserCard(userObj) {
    userCardArea.innerHTML = "";

    const card = document.getElementById("div");
    card.className = "card spongebob-card shadow-lg";

    const body = document.getElementById("div");
    body.className = "card-body";
//eyes
    const eyes = document.getElementById("div");
    eyes.className = "spongbob-eyes";

    const eye1= document.getElementById("div");
    eye1.className = "spongebob-eye";

    const eye2= document.getElementById("div");
    eye2.className = "spongebob-eye";

    eyes.appendChild(eye1);
    eyes.appendChild(eye2);
//mouth
    const mouth = document.getElementById("div");
    mouth.className = "spongebob-mouth";

    const teeth= document.getElementById("div");
    teeth.className = "spongebob-teeth";

    const tooth1= document.getElementById("div");
    tooth1.className = "spongebob-tooth";

    const tooth2= document.getElementById("div");
    tooth2.className = "spongebob-tooth";

    teeth.appendChild(tooth1);
    teeth.appendChild(tooth2);

    //title
    const title = document.createElement("h5");
    title.className = "card-title text-center mt-2 mb-3";
    title.textContent = "Loaded User (from JSON)";

    //listGroup[]
    const list = document.createElement("ul");
    title.className = "list-group list-group-flush mb-3";

    function addItem(label, value){
    const li = document.createElement("li");
    li.className = "list-group-item d-flex justify-content-between";

    const strong = document.createElement("strong");
    strong.textContent = label;
    
    const span = document.createElement("span");
    span.textContent = value;

    li.appendChild(strong);
    li.appendChild(span);
    li.appendChild(li);
}


}