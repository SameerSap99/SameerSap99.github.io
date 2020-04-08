// set up text to print, each item in array is new line
var aText = new Array(
    "Happy 1 year of cringe, Maya! Thank you so much for the happiest, most exciting year of my life.", 
    "I hope you enjoyed the game as much as I enjoyed making it :)",
    "You literally amaze me in every way and I'm so excited for our future.",
    "Might be a little forward, lets get out of this quarantine first...",
    "Kiddengggg. I love you more than you'll ever know, Maya",
    "Happy 1 year!!",
    "-Love, Sameer"
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
typewriter() 

