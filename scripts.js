// set up text to print, each item in array is new line
var aText = new Array(
    "Hellao. We need to first make sure it is actually you.", 
    "This first one will be easy. What is your password?"
);
var iSpeed = 100; // time delay of print out
var iIndex = 0; // start printing array at this posision
var iArrLength = aText[0].length; // the length of the text array
var iScrollAt = 20; // start scrolling up at this many lines
    
var iTextPos = 0; // initialise text position
var sContents = ''; // initialise contents variable
var iRow; // initialise current row
    
function typewriter()
{
    sContents =  ' ';
    iRow = Math.max(0, iIndex-iScrollAt);
    var destination = document.getElementById("typer");
    
    while ( iRow < iIndex ) {
    sContents += aText[iRow++] + '<br />';
    }
    destination.innerHTML = sContents + aText[iIndex].substring(0, iTextPos) + "_";
    if ( iTextPos++ == iArrLength ) {
    iTextPos = 0;
    iIndex++;
    if ( iIndex != aText.length ) {
    iArrLength = aText[iIndex].length;
    setTimeout("typewriter()", 500);
    }
    } else {
    setTimeout("typewriter()", iSpeed);
    }
}
function displayPassword() {
    var field = document.getElementById("passwordField");
    console.log(field.style.display);
    field.style.display = "block";
}
typewriter() 
setTimeout("displayPassword()", 12000)

function checkPassword() {
    console.log("inside func");
    var pass = document.getElementById("pass")
    if (pass.value == "cringe") {
        location.href = "cringe.html";
    }
}
