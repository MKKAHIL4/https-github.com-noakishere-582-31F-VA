console.log("password program");
const correctPassword = "12345";

function checkPassword(enteredPassword) {
    const promise = new Promise((resolve, rejected) => {
        if (enteredPassword == correctPassword) {
            setTimeout(() => {
             resolve("Password is correct");
            }, 2000);
        }else {
            rejected("Password is incorrect");
        }
    });
    console.log(promise);
    return promise;
}
    console.log ("-----------------------");
    console.log ("-----------------------");
    
    
    checkPassword("12345").then((result) => {
        console.log("1st attempt: " + result);
    })
    .catch((error) => {
         console.log("1st attempt: " + error);
    });

    checkPassword("miley").then((result) => {
        console.log("2nd attempt: " + result);
    })
    .catch((error) => {
         console.log("2nd attempt: " + error);
    });

    checkPassword("12345vanessa").then((result) => {
        console.log("3rd attempt: " + result);
    })
    .catch((error) => {
         console.log("3rd attempt: " + error);
    });

    const button = document.getElementById("load-button");
    const output = document.getElementById("output");
    const input_field = document.getElementById("input")

    function input_check(str) {
        let promise = new Promise((resolve) => {
            setTimeout(() => {      
                resolve("content Loaded");
            }, 3000); 
        });
        return promise;
    }

    button.addEventListener("click", () => {
        output.textContent = "Loading ./......";
        input_check(input_field.value).then(result) => {
            output.textContent= result;
            input_field.value ="";
        }).catch((error) => {
            output.textContent = error;
             input_field.value ="";
        });
    });