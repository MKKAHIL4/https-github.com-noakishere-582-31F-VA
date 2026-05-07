// we use fetch() to get external data

// most web api use --> they send json

 fetch("https://jsonplaceholder.typicode.com/users/3")

    .then((response) => {
        console.log(response);
        return response.json();
    })
    .then((user) => {
        console.log(user.name);
    });

    //1.servers response with json text
    //2. js needs to turn that text into usable objects

    let obj = {
        name: "Leanne Graham",
        adress: "123 street",
        //and the rest
    }
// serialization ==> turning data into text.
// deserialization --> turning text back into usable data.
//            conversion / convert

// so what is json exactly??
// its is a text format used to represent structured dat

// why do we use it ?
// it is readable -- it works well across all systems 
// it is widely used in web api's

//js object vs json

const student = {
    name: "Alice",
    program: "Web Dev",
    semester: 4,
};

console.log(student);

const jsonText = '{"name":"Alice","program":"WebDev","semester":4}';
console.log(jsonText);

// these are not the same thing. 1st is an object, second is a string containing 
//JSONTEXT

//comparison-->
// live is a Js value
//can have methods
///keys do not need qoutes 
//uses js syntax ReadableStreamBYOBRequest
//JSON
// is a plain text
// used for exchanging Data
//  must use double qouest
// must follow stringJSON sybntax


//** valid json types
//-string
//Number
// boolean
//null
//object
//array
//IMPORTANT : JSON DOES NOT SUPORT , FUNCTIONS , COMMENTS, UNDEFINED

//NOW LETS DO SOME parse via parse

//JSON.parse()

const studentJSON = '{"name":"Alice","program":"WebDev","semester":4}';

const parsedStudent = JSON.parse(studentJSON);
console.log(parsedStudent);
console.log(typeof studentJSON);
console.log(typeof parsedStudent);

const arrayJSON = '["HTML","CSS","JavaScript"]';
const topics = JSON.parse(arrayJSON);
console.log(topics);
//Parsed JSON can become arrays too
//
//nested object example

const nestedJSON = 
`{
    "name":"Alice",
    "address":{
        "city":"Montreal",
        "postalCode":"H1A 1A1"
    }
}`;

console.log("=============");
const parsedUser = JSON.parse(nestedJSON);
console.log(parsedUser);
console.log(parsedUser.address.city);

const badJSON = "{name:'Alice'}";

/// this should throw a syntax error, because
//1. single qoute outside, double qoutes inside

//2. key needs to be within qoutation wmarks

//JSON.parse(badJSON);

/**
 * JSON.STRINGFY()
 * converts a JS value into JSON text.
 * This is serialization in the other direction
 * 
 * this would be useful when we want to convert our JS object
 * and send it somewhere else as a json text.
 * 
 * //JS OBJECT
 * 
 */

const product = {
    name:"Keyboard",
    category:"Accessories",
    pricee:20.99,
  };
 
  const objToJson = JSON.stringify(product);
  console.log("JS Object:");
  console.log(product);//jsobject
  console.log(typeof product); //object
  
console.log("JSONTEXT");
console.log(objToJson);
console.log(typeof objToJson);


// input: JSOBJECT
//OUTPUT: STRING

console.log("==========================");
const colors = ["RED", "GREEN", "BLUE"];
const colorsJSON = JSON.stringify(colors);
console.log(colorsJSON);

//PRETTY PRINTJSON
// making the JSON text look nice with indentation, white space
//line breaks etc. to make it easily readable
const prettyJSON = JSON.stringify(product, null, 2);
console.log(prettyJSON);

/**
 * IMPORTANT: limitations
 */

const book = {
    name:"petite prince",
    author:"Antione de saint exupery",
    read() { // WE CAN STORE A FUNCTION INSIDE OF OBJECT CAN BE MEMORISE ETC
        console.log("read")
    },
};

console.log(book);
//JSON completely ignores the method!
//it also ignores the undefined value!
const bookJSON =JSON.stringify(book, null, 2);
console.log(bookJSON);
//reminder:
//functions are not included in JSON
// JSON IS FOR DATA, NOT BEHAVIOR!

/**
 * JSON with fetch() and Api response
 */

fetch("https://jsonplaceholder.typicode.com/users/3")

    .then((response) => {
        console.log(response);
        return response.json();// parse into JS OBJECT
        return user;
    })
    .then((user) => {
    //     console.log(user);// NO LONGER JSON TEXT
    //     console.log(user.name);
    //BECOMES
    console.log(JSON.stringify(user, null ,2));
     });

    //By the time that we reach user:
    //-itsno longer raw JSON text
    //- it is already javascript object thanks to json()