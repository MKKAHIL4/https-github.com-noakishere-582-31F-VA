// given that u have 
const jsonText = '{"title":"Web Interface Programming 2","credits":3,"active":true}';

const parsedCode = JSON.parse(jsonText);

console.log(parsedCode);

console.log(parsedCode.title);
console.log(parsedCode.credits);

//ex2

const course = {
    title: "Advaned Programming",
    credits: 3,
    active: true
};

//convert object to json text
const courseJSON = JSON.stringify(course);

// log the JSON TEXT
console.log(courseJSON);

//log the type
console.log(typeof courseJSON);

//ex3
// 2 indentations for json.stringfy(object null 2 ));

//display readible JSON 
const formattedJSON = JSON.stringify(course, null, 2)
console.log(formattedJSON);