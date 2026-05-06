const loadUserBtn = document.getElementById(load-user-btn);
 const status = document.getElementById("status");
 const output = document.getElementById("list");

 status.textContent = "Loading...";
 user.List.innerHtml = "";

 const userFetch = fetch("https://jsonplaceholder.typicode.com/users");

 userFetch.then((reponse) => {
    return Response.json();
 }).then((data) => {
    for(let i=0; i< 5; i++) {
        userList.innerHtml += `<li>${data[i].username}<li>`;
    }
 })
 .catch((error) => {
    console.log(error)
 })