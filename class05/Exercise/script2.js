
const userList = document.getElementById("list");
const status = document.getElementById("status");
const loadUserBtn = document.getElementById("load-user-btn");



 
 loadUserBtn.addEventListener("click", () => {
    status.textContent = "Loading....";
    userList.innerHTML = "";
 

 const userFetch = fetch("https://jsonplaceholder.typicode.com/users");

 userFetch
  .then((response) => {
     return response.json();
 })

 .then((data) => {
    for(let i = 0; i < 5; i++) {
        //option1
        let li = document.createElement("li");
        li.textContent = data[i].username;

        output.appendChild(li);
        userList.append( `<li>${data[i].username}<li>`);
        //userList.innerHtml += `<li>${data[i].username}<li>`;
      }

    })
 .catch((error) => {
    console.log(error)
    });
});
//another approach
// firstFiveUser.forEach(user => {
// const li = document.createElement("li");
// li.textContent = `${user.name} (${user.email})`;
// userList.appendChild(li);
//});