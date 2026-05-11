const loadBtn = document.getElementById("loadBtn");
const clearBtn= document.getElementById("clearBtn");
const statusArea = document.getElementById("statusArea");
const userCardArea = document.getElementById("userCardArea");

//helper to show status messages using boot strap alert

function showStatus(message, type = "info") {
    statusArea.innerHTML = "";
    const alert = document.createElement("div");
    alert.className = `alert alert-${type} py-2 mb-0`;
    alert.textContent = message; 

    statusArea.appendChild(alert);
}

function showLoading() {
   statusArea.innerHTML = "";
   const alert = document.createElement("div");
   alert.className = "alert alert-warning d-flex align-items-center py-2 mb-0";

   const spinner = document.createElement("div");
   spinner.className = "spinner-border spinner-border-sm me-2";

   const text = document.createElement("span");
   text.textContent = "Loading JSON text from the API.....";

   alert.appendChild(spinner);
   alert.appendChild(text);

   statusArea.appendChild(alert);
}

//building the sponge bob using create element.
function renderUserCard(userObj) {
    userCardArea.innerHTML = "";

    const card = document.createElement("div");
    card.className = "card spongebob-card shadow-lg";

    const body = document.createElement("div");
    body.className = "card-body";
//eyes
    const eyes = document.createElement("div");
    eyes.className = "spongebob-eyes";

    const eye1= document.createElement("div");
    eye1.className = "spongebob-eye";

    const eye2= document.createElement("div");
    eye2.className = "spongebob-eye";

    eyes.appendChild(eye1);
    eyes.appendChild(eye2);
//mouth
    const mouth = document.createElement("div");
    mouth.className = "spongebob-mouth";

    const teeth= document.createElement("div");
    teeth.className = "spongebob-teeth";

    const tooth1= document.createElement("div");
    tooth1.className = "spongebob-tooth";

    const tooth2= document.createElement("div");
    tooth2.className = "spongebob-tooth";

    teeth.appendChild(tooth1);
    teeth.appendChild(tooth2);

    //title
    const title = document.createElement("h5");
    title.className = "card-title text-center mt-2 mb-3";
    title.textContent = "Loaded User (from JSON)";

    //listGroup[]
    const list = document.createElement("ul");
    list.className = "list-group list-group-flush mb-3";

    function addItem(label, value){
    const li = document.createElement("li");
    li.className = "list-group-item d-flex justify-content-between";

    const strong = document.createElement("strong");
    strong.textContent = label;
    
    const span = document.createElement("span");
    span.textContent = value;

    li.appendChild(strong);
    li.appendChild(span);
    list.appendChild(li);
}
//add user information to list
    addItem("Name", userObj.name);
    addItem("Email", userObj.email);
    addItem("Phone", userObj.phone);
    addItem("City", userObj.address.city);
    addItem("Company", userObj.company.name);
    addItem("Website", userObj.website);

//create JSON  TEXT section

    const details = document.createElement("details")
    const summary = document.createElement("summary")
    summary.textContent = "Sow JSON TEXT";

//create pre element for formatted JSON
    const pre = document.createElement("pre");
    pre.className = "bg-light p-2 rounded small mt-2";
    pre.textContent = JSON.stringify(userObj, null, 2);

// ad pre and summary to details
    details.appendChild(summary);
    details.appendChild(pre);

// assemble card elements
    body.appendChild(eyes);
    body.appendChild(mouth);
    body.appendChild(teeth);
    body.appendChild(title);
    body.appendChild(list);
    body.appendChild(details);

    card.appendChild(body);

    userCardArea.appendChild(card);
}

// fetch user from json placeholder

function loadUser() {
    showLoading();
    userCardArea.innerHTML = "";
    setTimeout(() => {

     fetch("https://jsonplaceholder.typicode.com/users/7")
     .then((response) => {
        console.log("Raw response :", response);
        console.log("typeof response :", typeof response); //object
        
        if(!response.ok){
            throw new Error(`Http error: ${response.status}`);
        }
        return response.json(); //js text -> js object
     })
     .then((userObj) => {
        console.log("Parsed Js Object:", userObj);
        console.log("typeof userObj:", typeof userObj); //object

        const jsonText = JSON.stringify(userObj);
         console.log("Stringified Json TEXT:", jsonText);
        console.log("typeof jsonText:", typeof jsonText); //string
        
        showStatus("User Loaded Successfully "," success");
        renderUserCard(userObj);
     })
     .catch((error) =>{
        console.error("Fetch error:", error);
        showStatus("Something went wrong while loading the user", "danger");
        userCardArea.innerHTML = "";
     });
    }, 3000);
}
    //clear button
function clearUser() {
    userCardArea.innerHTML = "";
    showStatus("User Cleared. Ready to Load Again.");
}

loadBtn.addEventListener("click", loadUser);
clearBtn.addEventListener("click", clearUser);