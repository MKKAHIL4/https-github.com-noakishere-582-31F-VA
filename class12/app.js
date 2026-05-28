//Step 3 : Connect DOM elements in JS
const loadPostBtn = document.getElementById("load-post-btn");
const postIdInput= document.getElementById("post-id-input");
const status = document.getElementById("status");
const output = document.getElementById("output");

//Step4 : Validation function with cases
function validatePostId(id) {
    if(typeof id !== "number" || isNaN(id)) {
        throw new Error("Post Id Must Be a Valid Number");
    }

    if (id <=0) {
        throw new Error("Post Id Must Be Greater then 0");
    }

    if (id > 99){
         throw new Error("Post ID too Large! Try a number between 1 and 99.");
    }
}
//STEP5: aDDING CLICK EVENT, TRY & CATCH IN APP.JS CLASS 12 APP.JS
loadPostBtn.addEventListener("click", () => {
    try {
        const id = Number(postIdInput.value);

        validatePostId(id);

        status.textContent = "Loading post ....";
        output.innerHTML = "";

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
            status.textContent = "POST Loaded Successfully.";
        } )
        .catch((error) => {
            status.textContent = "Error:" +error.message;
        });
        }catch(error) {
            status.textContent = "Validation Error: " + error.message;
        }

    });
        
       