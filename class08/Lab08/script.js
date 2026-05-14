//Variable declaration
const loadBtn = document.getElementById("loadBtn");
const clearBtn = document.getElementById("clearBtn");
const statusArea = document.getElementById("statusArea");
const userContainer = document.getElementById("userContainer");
const searchInput = document.getElementById("searchInput");

let cachedPosts = {};
let loadedUsers = [];

//Status Fucntion 
function setStatus(message, type = "secondary") {
    statusArea.innerHTML = `
        <div class="alert alert-${type}">
            ${message}
        </div>    
    `;
}

// clear dahsboard reset

function clearDashboard() {
    userContainer.innerHTML = "";
    statusArea.innerHTML = "";
    searchInput.value = "";
}

// Load Users
async function loadUsers(){
    try{
        setStatus(`
            <div class="spinner-border spinner-border-sm me-2"></div>
            Loading Users....`, "dark");
        const response = await fetch("https://jsonplaceholder.typicode.com/users");
        if(!response.ok){
            throw new Error("Failed to Fetch users.");
        }

        const users = await response.json();

        loadedUsers = users.slice(0, 5);

        userContainer.innerHTML = "";

        loadedUsers.forEach(user => {
            renderUserCard(user);
            
        });
        setStatus("Users loaded successfully.", "success");
    }catch (error){
        setStatus(error.message, "danger");
    }
}

//RENDER user card

function renderUserCard(user){
    const col = document.createElement("div");
    col.className = "col-md-6 col-lg-4 user-card";

    col.dataset.name = user.name.toLowerCase();
    col.innerHTML = `
        <div class="card h-100 p-3">
            <div class="card-body">
                <h3 class="card-title mb-3">
                    ${user.name}
                </h3>
                <p class="card-text">
                  <strong>Email:</strong><br>
                    ${user.email} 
                </p>
                
                <p class="card-text">
                  <strong>Phone:</strong><br>
                    ${user.phone} 
                </p>
                
                <p class="card-text">
                  <strong>City:</strong><br>
                    ${user.address.city} 
                </p>
                
                <p class="card-text">
                  <strong>Company:</strong><br>
                    ${user.company.name} 
                </p>
                
                <button class="btn vintage-btn mt-3 load-posts-btn">
                Load Posts
                </button>

                <div class="posts-container mt-4"></div>
            </div>
        </div>
    
    `;
    const loadPostsBtn = col.querySelector(".load-posts-btn");
    const postsContainer = col.querySelector(".posts-container");

    loadPostsBtn.addEventListener("click", () => {
        loadPostsForUser(user, postsContainer, loadPostsBtn);
    });

    userContainer.appendChild(col);
}


// load posts for users:

function loadPostsForUser(user, postsContainer, button) {
    // disable button
    button.disabled = true;
    //loading message
    postsContainer.innerHTML = `
        <div class="text-light">
            <div class="spinner-border spinner-border-sm me-2"></div>
            Loading Posts.....
            </div>   
    `;
     fetch("https://jsonplaceholder.typicode.com/posts")
        .then(response => {
            if(!response.ok){

            throw new Error("Could not load posts.");
        }
        //convert to json
        return response.json();

    })

    .then(posts => {
        let userPosts = [];

        //loop through posts
        posts.forEach(post => {
              //check if posts belong to user
            if(post.userId === user.id){
                userPosts.push(post);
            }
        });
      //keep first 3 posts
      userPosts = userPosts.slice(0, 3);

      //render posts
      renderPosts(userPosts, postsContainer);
      
      //enable button
      button.disabled = false;
    })

    .catch(error => {
        postsContainer.innerHTML = `
            <div class="alert alert-danger">
                ${error.message}
            </div>
        `;
         //enable button
      button.disabled = false;
    });

}


// render posts

function renderPosts(posts, container){
    container.innerHTML = "";

    posts.forEach(post => {

        const postDiv = document.createElement("div");
        postDiv.className = "post-box";

        postDiv.innerHTML = `
        
        <div class="post-title mb-2">
            ${post.title}
        </div>    

        <div class="post-body">
            ${post.body}
        </div>    
        `;

        container.appendChild(postDiv);
    });

}

// search users
searchInput.addEventListener("input", () => {
    const searchValue = searchInput.value.toLowerCase();

    const cards = document.querySelectorAll(".user-card");

    cards.forEach(card => {

        const userName = card.dataset.name || "";

        if (userName.includes(searchValue)){
            card.style.display = "block";
        }else {
            card.style.display = "none"
        }
    });
});

// buttons event listener....
loadBtn.addEventListener("click", loadUsers);
clearBtn.addEventListener("click", clearDashboard);