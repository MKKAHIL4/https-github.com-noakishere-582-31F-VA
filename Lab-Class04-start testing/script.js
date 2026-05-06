// ===============================
// LOAD DOM ELEMENTS
// ===============================
const loadStudentBtn = document.getElementById("load-student-btn");
const loadCoursesBtn = document.getElementById("load-courses-btn");
const clearBtn = document.getElementById("clear-btn");

const status = document.getElementById("status");
const studentContainer = document.getElementById("student-container");
const coursesContainer = document.getElementById("courses-container");

console.log("DOM loaded");

// ===============================
// PART 2 - STUDENT PROMISE
// ===============================
function getStudentData() {
    console.log("getStudentData() called");

    return new Promise((resolve, reject) => {

        setTimeout(() => {
            console.log("Inside student timeout");

            const success = true;

            if (success) {
                const student = {
                    id: 1,
                    name: "Alice",
                    program: "Computer Science",
                    semester: 2,
                    bio: "Loves coding and building websites."
                };

                console.log("Resolving student:", student);
                resolve(student);
            } else {
                console.log("Rejecting student");
                reject("Failed to load student data");
            }

        }, 1000);
    });
}

// ===============================
// PART 3 - RENDER STUDENT
// ===============================
function renderStudent(student) {
    console.log("Rendering student:", student);

    studentContainer.innerHTML = `
        <h2>${student.name}</h2>
        <p>Program: ${student.program}</p>
        <p>Semester: ${student.semester}</p>
        <p>${student.bio}</p>
    `;
}

// ===============================
// PART 4 - COURSES PROMISE
// ===============================
function getCoursesData() {
    console.log("getCoursesData() called");

    return new Promise((resolve, reject) => {

        setTimeout(() => {
            console.log("Inside courses timeout");

            const success = true;

            if (success) {
                const courses = [
                    { code: "WIP2", title: "Web Interface Programming 2" },
                    { code: "AWP", title: "Advanced Programming" },
                    { code: "DB2", title: "Database Management Systems 2" }
                ];

                console.log("Resolving courses:", courses);
                resolve(courses);
            } else {
                console.log("Rejecting courses");
                reject("Failed to load courses");
            }

        }, 1000);
    });
}

// ===============================
// PART 5 - RENDER COURSES
// ===============================
function renderCourses(courses) {
    console.log("Rendering courses:", courses);

    coursesContainer.innerHTML = "";

    const ul = document.createElement("ul");

    for (let course of courses) {
        console.log("Adding course:", course);

        const li = document.createElement("li");
        li.textContent = course.code + " - " + course.title;
        ul.appendChild(li);
    }

    coursesContainer.appendChild(ul);
}

// ===============================
// PART 6 - BUTTON EVENTS
// ===============================

// LOAD STUDENT
loadStudentBtn.addEventListener("click", () => {
    console.log("Load Student button clicked");

    status.textContent = "Loading student...";
    studentContainer.innerHTML = "";

    getStudentData()
        .then((student) => {
            console.log("Student received in .then:", student);

            renderStudent(student);
            status.textContent = "Student loaded";
        })
        .catch((error) => {
            console.log("Error in student:", error);

            status.textContent = error;
        });
});

// LOAD COURSES
loadCoursesBtn.addEventListener("click", () => {
    console.log("Load Courses button clicked");

    status.textContent = "Loading courses...";
    coursesContainer.innerHTML = "";

    getCoursesData()
        .then((courses) => {
            console.log("Courses received in .then:", courses);

            renderCourses(courses);
            status.textContent = "Courses loaded";
        })
        .catch((error) => {
            console.log("Error in courses:", error);

            status.textContent = error;
        });
});

// ===============================
// PART 7 - CLEAR BUTTON
// ===============================
clearBtn.addEventListener("click", () => {
    console.log("Clear button clicked");

    studentContainer.innerHTML = "";
    coursesContainer.innerHTML = "";
    status.textContent = "Ready.";
});