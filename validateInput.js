function validateInput(event){
    event.preventDefault();
    let firstName = document.getElementById("fname").value;
    console.log(firstName);
    let lastName = document.getElementById("lname").value;
    console.log(lastName);
    let zip = document.getElementById("zip").value;
    console.log(zip);
    // these log's helps get a reference in the console //

    //Validate first name and last name//
    let firstLast = firstName + " " + lastName;
    console.log(firstName);
    if(firstLast.length < 20){
        alert("Not enough characters. Firts and last name must have at least 20 characters");
        return; 
    }
    console.log("Valid first and last name");

    // We need a zip code that contains only digits and is 5 digits long //
    const zipRegExp = /\b\d{5}\b/;

    if(!zipRegExp.test(zip)) {
     alert("Invalid zip code. Zip must be a number of 5 digits"); 
     console.log(typeof zip)
        return false;
    }
    console.log("Validated!")

    //Shows the secret message when all the inputs are valid//
    let secretMessage = document.getElementById("secretMessage");
    secretMessage.style.display = "block";
    secretMessage.innerText = "Congratulations on completing all the requirements. Very good!!!";
    
}

// Prevent the form from submitting normally//
window.addEventListener ("DOMContentLoaded", (event) => {
    const form = document.getElementById("myForm"); 
    if (form) {
        form.addEventListener("submit" , validateInput)
    }
});