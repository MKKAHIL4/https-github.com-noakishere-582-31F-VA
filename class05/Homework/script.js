
//Homewrok class05 MKKAHIL
const output = document.getElementById("output");
const status = document.getElementById("status");
const loadUserBtn = document.getElementById("load-post-btn");


loadUserBtn.addEventListener("click", () => {
status.textContent = "Loading post....";
output.innerHTML = "";

setTimeout(() => {


const postFetch =  fetch("https://jsonplaceholder.typicode.com/posts/20");
postFetch
.then((response) => {
    
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

    output.innerHTML = `
    <h3>${data.title} </h3>
    <p>${data.body}</p>
    `;// or data.username
    status.textContent = "Post Loaded successfuly..";
})
.catch(error => {
   
    status.textContent = "Failed to load user.";
   
    console.log(error);
});
}, 2000);

});