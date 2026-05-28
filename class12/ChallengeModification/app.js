const loadPostBtn = document.getElementById("load-post-btn");
const loadCommentBtn = document.getElementById("load-comment-btn");
const clearBtn = document.getElementById("clear-btn");

const postIdInput= document.getElementById("post-id-input");
const status = document.getElementById("status");
const output = document.getElementById("output");

//Step4 : Validation function with cases
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
//STEP5: ADDING CLICK EVENT, TRY & CATCH IN APP.JS CLASS 12 APP.JS
//step 6 : MODIFYING FETCH 
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