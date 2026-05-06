 fetch("https://jsonplaceholder.typicode.com/users")
 .then(response => response.json())
 .then(data => {

    const firstFiveUser = data.slice(0,5);

    // get ul element

    const userList = document.getElementById("userList")

    firstFiveUser.forEach(user => {
        const li = document.createElement("li");
        li.textContent = `${user.name} (${user.email})`;
        userList.appendChild(li);
    });

 })
.catch(error => {
console.log("Error fecthing users:", error);
});