const loadPostBtn = document.getElementById("load-post-btn");
const loadCommentBtn = document.getElementById("load-comment-btn");
const clearBtn = document.getElementById("clear-btn");

const postIdInput= document.getElementById("post-id-input");
const status = document.getElementById("status");
const output = document.getElementById("output");

postIdInput.addEventListener("input", () => {
    output.innerHTML = "";
    status.textContent = "Ready";
});

function validatePostId(id) {
    if(typeof id !== "number" || isNaN(id)) {
        throw new Error("Post Id Must Be a Valid Number");
    }

    if (id <=0) {
        throw new Error("Post Id Must Be Greater than 0");
    }

    if (id > 99){
         throw new Error("Post ID too Large! Try a number between 1 and 99.");
    }
}

loadPostBtn.addEventListener("click", () => {
    try {
        const id = Number(postIdInput.value);

        validatePostId(id);

        status.textContent = "Loading post ...";
        output.innerHTML = "";

        loadPostBtn.disabled = true; //step6 finally 
        
        fetch(`https://jsonplaceholder.typicode.com/posts/${id}`)
        .then((response) => {
            if(!response.ok){
                throw new Error(`HTTP error: ${response.status}`);
            }
            return response.json();
         })
         
        .then((post) => {
            output.innerHTML = `
                <h2>${post.title}</h2>
                <p>${post.body}</p>
            `;
            status.textContent = "Post loaded successfully.";
        } )

        .catch((error) => {
            status.textContent = "Error:" + error.message;
        })

        .finally(() => {
            console.log("Request finished");
            loadPostBtn.disabled = false; //finally modification
        });
        
        }catch(error) {
            status.textContent = "Validation Error: " + error.message;
        
        }
    });

    //adding comment button challnge 
loadCommentBtn.addEventListener("click", () => {
    try{
        const id = Number(postIdInput.value);
        validatePostId(id);

        status.textContent = "Loading comment ...";
        output.innerHTML = "";

        loadCommentBtn.disabled = true; 

        fetch(`https://jsonplaceholder.typicode.com/comments/${id}`)
        
        .then((response) => {
            if(!response.ok){
                throw new Error(`HTTP error:  ${response.status}`);
            }
            return response.json();
         })
         
        .then((comment) => {
            output.innerHTML = `
               
                <p>${comment.body}<p>
                <small>${comment.email}</small>
            `;
            status.textContent = "Comment loaded successfully.";
        })

        .catch((error) => {
            status.textContent = "Error:" + error.message;
        })
        
        .finally(() => {
            console.log("Comment Request finished");
            loadCommentBtn.disabled = false; 
        });
        
        }catch(error) {
            status.textContent = "Validation Error: " + error.message;
        
        }
    });

    //clear button
    clearBtn.addEventListener("click", () => {
        postIdInput.value = "";
        status.textContent = "Ready";
        output.innerHTML = "";
    });