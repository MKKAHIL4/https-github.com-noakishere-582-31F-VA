console.log("-------------console.log");
console.log("Dom Load elements part1:");
console.log("--------------");




const loadStudentBtn = document.getElementById("load-student-btn");
const loadCoursesBtn = document.getElementById("load-courses-btn");
const clearBtn = document.getElementById("clear-btn");

const status = document.getElementById("status");
const studentContainer = document.getElementById("student-container");
const coursesContainer = document.getElementById("courses-container");
console.log("Dom Loaded");

//Student Data- part2:
console.log("------end-1------");
console.log("student data - part2 promise:");
console.log("--------------");

function getStudentData() {
    console.log("getStudentdata() called")
    return new Promise((resolve, reject) => {
        
        setTimeout(() => {
            console.log("Inside student timeout");

            const success = true;
            if (success){
            const student = {
                    id: 1,
                    name: "Natalie",
                    program: "Web development and design",
                    semester: 1,
                    bio:" I Like desgining things and applying it to websites."
                };
                console.log("Resolving student:", student);
                resolve(student);
            }else{
                console.log("Rejecting student")
                reject("Failed to load student data");
            }
        }, 1000);
    });
}

console.log("-----end-2-------");
console.log("Render Student - part 3:");
console.log("--------------");

function renderStudent(student) {
    console.log("Rendering Student:", student);

    studentContainer.innerHTML = `
    <div class="fade-in">
        <h2>Name: ${student.name}</h2>
        <p>Program: ${student.program}</p>
        <p>Semester: ${student.semester}</p>
        <p>Bio: ${student.bio}</p>
    <div>
    `;
}

console.log("-----end-3-------");
console.log("Course Promise - part 4:");
console.log("--------------");

function getCoursesData() {
    console.log("getCourseData() called");

    // return new Promise((resolve, reject) => {
    //     setTimeout(() =>{
    //         console.log("Inside Courses Timeout");

    //         const success = true;

    //         if (success){
                const courses = [
                    { code: "WIP2", title: "Web Interface Programming 2" },
                    { code: "AWP", title: "Advanced Programming" },
                    { code: "DB2", title: "Database Management Systems 2" }
                ];
                
    //             console.log("Resolving courses:", courses);
    //             resolve(courses);
    //         } else {
    //             console.log("Rejecting courses: ");
    //             reject("Failed to load courses!!!!");
    //         }

    //     }, 1000);
    
    // });
    return simulateAsync(courses, 1000, true);
}

console.log("-----end-4-------");
console.log("Render Course Data - part 5:");
console.log("--------------");

function renderCourses(courses) {
    console.log("Rendering Courses : ", courses);

    coursesContainer.innerHTML = "";
    const ul = document.createElement("ul");
    ul.classList.add("fade-in");

    for (let course of courses){
        console.log("Adding course:", course);

        const li = document.createElement("li");
        li.textContent = course.code + "-" + course.title;
        ul.appendChild(li);
    }
    coursesContainer.appendChild(ul);
}

console.log("------end-5------");
console.log("Load student - part 6:");
console.log("--------------");

loadStudentBtn.addEventListener("click", () => {
    console.log("Load Student button clicked");

    status.innerHTML = 'Loading Student.... <span class="loading"></span>';
    studentContainer.innerHTML = "";
     coursesContainer.innerHTML = "";

    getStudentData()
        .then((student) =>  {
                const loadedStudent = student;
                console.log("student received:", loadedStudent);

                renderStudent(loadedStudent);
                status.textContent = "Student loaded.";
                //css applied
                
            })
            .catch((error) => {
                console.log("Error in student info:", error);
                status.textContent = error;
            });
        });
console.log("------end-6------");
console.log("Load Courses - part 7:");
console.log("--------------");

loadCoursesBtn.addEventListener("click", () => {
    console.log("Load Courses button clicked");

    //status.textContent = "Loading Courses....";
                //css applied
                status.innerHTML = 'Loading courses... <span class="loading"></span>';
                studentContainer.innerHTML = "";
                coursesContainer.innerHTML = "";

    getCoursesData()
        .then((courses) =>  {
                
                console.log("courses recived:", courses);

                renderCourses(courses);
                status.textContent = ".Courses Loaded.";
            })
            .catch((error) => {
                console.log("Error in Courses info:", error);
                status.textContent = error;
            });
        });

console.log("-------end-7-----");
console.log("Clear button - part 8:");
console.log("--------------");

clearBtn.addEventListener("click", () => {
    console.log("The Clear Button is Clicked");

    studentContainer.innerHTML = "";
    coursesContainer.innerHTML = "";
    status.textContent = "Ready.";
});
    //leave bonus till the end you got the idea dont think about it
    // return simulateAsync(student, 1000, true) is applied for get
    //courses as an example of the asynchronous.
console.log("-------end-7-----");
console.log("Clear button - part 8:");
console.log("--------------");

function simulateAsync(data, delay, shouldSucceed = true) {
    console.log("simulateAsync called with : ", data);
    return new Promise((resolve, reject) => {
        
        setTimeout(() => {
            console.log("Inside simulateAsync timeout");

    
            if (shouldSucceed){
                console.log("Resolving async", data);
                resolve(data);
            }else{
                console.log("Rejecting", data)
                reject("Something went wrong while displaying data");
            }
        }, delay);
    });
}
        
