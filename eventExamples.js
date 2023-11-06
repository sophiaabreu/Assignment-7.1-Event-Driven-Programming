/*function saylol(timestamp) {
    document.write("<input type='button' value='lol'>"); //document.write can clear the page and can't help with make dinamic your page
    //requestAnimationFrame(saylol);
} */

/*function addButton() {
    //Create a new input element, setting its attributes
    var inputElement = document.createElement("input");
    inputElement.setAttribute("type", "button");

    //Input to displayed on the button
   inputElement.setAttribute("value", "New Button");
   
    /*var buttonText = document.createTextNode("New Button");
    inputElement.appendChild(buttonText);

    //Attaches button in the HTML file
    var parent = document.getElementById("memeParagraph");
    parent.appendChild(inputElement); //we have to attach the child

    var newParagraph = document.createElement("p");
    
    var paragraphText = document.createTextNode("New Paragraph");
    newParagraph.appendChild(paragraphText);

    parent.appendChild(newParagraph);
}*/

// This function adds the start and stop buttons to the page//
function addButtons() {
    console.log("Adding Buttons!");

    // Create an input element of type button for the start button//
    let inputElementStart = document.createElement("input");
    inputElementStart.setAttribute("type", "button");
    inputElementStart.setAttribute("value", "Start");
    inputElementStart.setAttribute("id", "startButton");
    inputElementStart.setAttribute("onclick", "startButton()");

    // Create an input element of type button for the stop button//
    let inputElementStop = document.createElement("input");
    inputElementStop.setAttribute("type", "button");
    inputElementStop.setAttribute("value", "Stop");
    inputElementStop.setAttribute("id", "stopButton");
    inputElementStop.setAttribute("onclick", "stopButton()");
    inputElementStop.setAttribute("disabled", true);
    
    // Append the start and stop buttons to the paragraph with id 'memeParagraph'//
    let parent = document.getElementById("memeParagraph");
    parent.appendChild(inputElementStart);
    parent.appendChild(inputElementStop);
}

// This function is called when the start button is clicked//
function startButton() {
    console.log("Pressed Start!");
    let inputElementStart = document.getElementById("startButton");
    inputElementStart.setAttribute("disabled", "true");

    let inputElementStop = document.getElementById("stopButton");
    inputElementStop.removeAttribute("disabled");

    let memeImage = document.getElementById("memeImage");
    memeImage.style.animationDuration = "3s";
}

// This function is called when the stop button is clicked//
function stopButton() {
    console.log("Pressed Stop!");
    let inputElementStart = document.getElementById("startButton");
    inputElementStart.removeAttribute("disabled");

    let inputElementStop = document.getElementById("stopButton");
    inputElementStop.setAttribute("disabled", "true");

    let memeImage = document.getElementById("memeImage");
    memeImage.style.animationDuration = "0s";
}