 const loadUserBtn = document.getElementById)(load-user-btn);
 const status = document.getElementById("status");
 const output = document.getElementById("output");

 loadUserBtn.addEventListener("click", () => {
    status.textContent = "Load user....";
    output.innerHTML = "";

    const userFetch =  fetch("https://jsonplaceholder.typicode.com/users/7");
    userFetch.then(response => {
        return response.json();
    })
    .then((data) => {
        output.innerHTML = `${data["username"]}`;// or data.username
        status.textContent = "User Loaded successfuly..";
    }).catch(error => {
        status.textContent = "Failed to load user.";
        console.log(error);
    });

});