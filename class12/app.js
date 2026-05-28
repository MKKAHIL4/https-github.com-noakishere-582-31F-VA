const loadPostBtn = document.getElementById("load-post-btn");
const postIdInput= document.getElementById("post-id-input");
const status = document.getElementById("status");
const output = document.getElementById("output");

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