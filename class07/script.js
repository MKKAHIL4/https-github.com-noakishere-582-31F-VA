// progressive enhancement
// is a design approach for building web interfaces

// the premise is to build a website at a basic level first
//then make it richer when css and javascript are available.

// design question:
//should a wbepage only work when JS runs??
        //or
        //  should javascript improve something that already works??

// ins a nutshell: progressive enhancment means starting 
            //with a usable base and then adding improvements
/*
that base is usaully :
    1. meaningful html
    2.Core content
    3. Basic navigation or Interaction
*/

/**
 * Enhancment may include:
 * 1.Styling
 * 2.Dynamic Behavior
 * 3.Async Loading
 * 4.Nicer Feedback
 * 5.Richer Layout
 */

// comparison and contrast

/**
 * Prograssive Enhancement
 * base page works
 * content itself is meaningful with JS
 * JS only improves prograssive enhancmen and expreince
 */

/**
 * Js dependent design
 * page is empty until sctipt runs
 * all content appears only through js
 * failure in Js may break everything!
 * 

 */
//html = structure and meaning
//CSS -= presentation
//Javascript

/**
 * Html Semantics
 * main
 * section
 * headings
 * paragraphs
 * buttons
 */

//enhance the page with Js now:

//dom 
const loadUserBtn = document.getElementById("load-user-btn")
const status = document.getElementById("status")
const userProfile = document.getElementById("user-profile")

loadUserBtn.addEventListener("click", () => {
    status.textContent = "Loading user...";
    
     fetch("https://jsonplaceholder.typicode.com/users/3")
     .then(response => {
        if(!response.ok){
            throw new Error(`HTTP ERROR: ${response.status}`);
        }
        return response.json();
     })
     .then((user) =>{
        userProfile.innerHTML = `
        <h2> Profile Information</h2
        <p>Name: ${user.name}</p>
        <p>Email: ${user.email}</p>
        <p>City: ${user.city}</p>
        `;
        status.textContent = "User Loaded Successffuly";
     })
})