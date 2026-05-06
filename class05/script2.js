 const loadUserBtn = document.getElementById("load-user-btn");
 const status = document.getElementById("status");
 const output = document.getElementById("output");
 
 

 loadUserBtn.addEventListener("click", () => {
    status.textContent = "Load user....";
    output.innerHTML = "";

    const userFetch =  fetch("https://jsonplaceholder.typicode.com/users/7");
    userFetch.then((response) => {
        console.log(response);

        if (response.ok == false)
            {
                // return an ERROR object
                //then it goes automatically to catch
                throw new Error(`HTTP error: ${response.status}`);
            }
        
        return response.json();
    })

    .then((data) => {
        output.innerHTML = `${data["username"]}`;// or data.username
        status.textContent = "User Loaded successfuly..";
    })
    .catch(error => {
        //error here is only reserved for 500 level errors (server errors)
        //unless we throw an error
        status.textContent = "Failed to load user.";
        console.log(error);
    });

});