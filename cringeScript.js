// set up text to print, each item in array is new line
var aText = new Array(
    "Good Job! You know your own password! Since we're quarantined, I made a game...", 
    "So the idea is simple: ",
    "Each page will have a picture.",
    "Each picture will have an associated password. This can be anything.",
    "It can be the month it was from, something funny, anything!",
    "If you get the password right, you move on to the next page.",
    "Your score will be at the top.",
    "Don't fail, bih",
    "Love you :)"
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
    if (destination == null) {
        return;
    }
    
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
    var field = document.getElementById("StartField");
    console.log(field.style.display);
    field.style.display = "block";
}
typewriter() 
setTimeout("displayPassword()", 43000)

function startGame() {
    location.replace(window.location.href.replace("cringe", "start"));
}

function changePicture() {
    console.log("inside func");
    console.log(document.getElementById("jib").src);
    if (document.getElementById("jib").src.includes("jibjab1")) 
        {
            document.getElementById("jib").src = "./jibjab/jibjab2.png";
        }
        else 
        {
            document.getElementById("jib").src = "./jibjab/jibjab1.png";
        }
}

function checkStart() {
    var pass = document.getElementById("pass2")
    if (pass.value == "jibjab") {
        location.replace(window.location.href.replace("start", "lvl2"));
    }
}

function checkLvl2() {
    var pass = document.getElementById("pass3")
    if (pass.value == "sushi den") {
        location.replace(window.location.href.replace("lvl2", "lvl3"));
    }
}
function checkLvl3() {
    var pass = document.getElementById("pass4")
    if (pass.value == "brian") {
        location.replace(window.location.href.replace("lvl3", "lvl4"));
    }
}

function checkLvl4() {
    var pass = document.getElementById("pass5")
    if (pass.value == "sweet tomatoes" || pass.value =="sweettomatoes" || pass.value=="st") {
        location.replace(window.location.href.replace("lvl4", "lvl5"));
    }
}

function checkLvl5() {
    var pass = document.getElementById("pass6")
    if (pass.value == "anchovies" || pass.value =="anchovie") {
        location.replace(window.location.href.replace("lvl5", "lvl6"));
    }
}

function checkLvl6() {
    var pass = document.getElementById("pass7")
    if (pass.value == "december" || pass.value =="beach") {
        location.replace(window.location.href.replace("lvl6", "switcheroo"));
    }
}

function checkLvl7() {
    var pass = document.getElementById("pass8")
    if (pass.value == "osl" || pass.value =="outside lands") {
        location.replace(window.location.href.replace("switcheroo", "hellaou"));
    }
}

function checkLvl8() {
    var pass = document.getElementById("pass9")
    if (pass.value == "christmas" || pass.value =="rooftop") {
        location.replace(window.location.href.replace("hellaou", "levelup"));
    }
}

function checkLvl9() {
    var pass = document.getElementById("pass10")
    if (pass.value == "pooja") {
        location.replace(window.location.href.replace("levelup", "uabih"));
    }
}

function checkLvl10() {
    var pass = document.getElementById("pass11")
    if (pass.value == "homeroom") {
        location.replace(window.location.href.replace("uabih", "doctah"));
    }
}

function checkLvl11() {
    var pass = document.getElementById("pass12")
    if (pass.value == "arinell" || pass.value == "arinells") {
        location.replace(window.location.href.replace("doctah", "omgalmostdone"));
    }
}

function checkLvl12() {
    var pass = document.getElementById("pass13")
    if (pass.value == "cringiversary") {
        location.replace(window.location.href.replace("omgalmostdone", "winnah"));
    }
}
