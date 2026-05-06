//fetch
// FETCH is a javascript native tool
// it's for requesting ecternal data over http

// last week we looked at promises
// today, we see how fetch returns promises

// fetch() is how broswer js asks a server for information 

function getStudentData() {
    return new Promise(resolve => {
        resolve(55);
        resolve("hello"); as String
        resolve({ name: "Alice", Program: "web dev"});

    });
}

getStudentData().then((result) =>  {
    console.log(result);
});

// now we are moving to fetch to make actual server request

// the general flow is that
//1.our broser sends a request to aserver
//2.the server send back a response
//3.that response may contain data often in json

// this is the first thing to do we dont get any data back
fetch("https://jsonplaceholder.typicode.com/users/1");

// we are logging a promise not data
const fetchRequest = fetch("https://jsonplaceholder.typicode.com/users/1");
console.log(fetchRequest);
// then gets a response object , not the final parsed json data
fetchRequest.then((result) => {
    console.log(result);
})
.catch((error) => {
    console.log(error);
});

//fetch() gives us a response first.
// then we will need to ectract and parse the data from the reponse.

// we need to undertsand that :::
//when fetch() succeeds, the promise resolves with a response Object

//promise object --> response object

// some properties of a response object are:
// response.status 200, 400, 404 etc= check mdn doc
//response.ok

// and important method:
//response.json()

fetchRequest
.then((response) => {
    //we first parse our response to a json format
    //.json() automatically returns another promise
    return response.json()
})
    .then((result) => {
    console.log("========================");
    console.log("Successful response: ");
    console.log("Parsed Json: ");
    console.log(result.name);
    console.log(result.email);
    console.log(result.company);
    console.log(result)
    // console.log("Status: ", result.status); // http status code
    // console.log("OK: ", result.ok);
    // console.log(result);
    // return response.json();
})
const badFetchRequest = fetch("https://jsonplaceholder.typicode.com/users/100");
console.log
.then((response) => {
    //we first parse our response to a json format
    //.json() automatically returns another promise
    return response.json()
})
    .then((result) => {
    console.log("========================");
    console.log("not found  response: ");
    console.log("Parsed Json: ");
    console.log(result)
})

.catch((error) => {
    console.log(error);
});

//in general:
//  200 range = succes
//  400 range = not found, not authorized etc
//  500 range = server error/issues