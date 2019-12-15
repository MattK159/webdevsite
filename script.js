
var menub = document.getElementById('menub'); 
var cardb = document.getElementById('cardgame'); 
var closeb = document.getElementById('closeb'); 
var displaygamemenu = 0; 
menub.addEventListener("click", displayMenu); 
cardb.addEventListener('click', playgame); 
closeb.addEventListener('click',exitgame); 

console.log("Script running"); 
var menu = 0; 
function myFunction(x) {
    x.classList.toggle("change");
    if(menu == 0) {
        document.getElementById('nav').style.display = "inline-block"; 
        menu = 1; 
    }
    else {
        document.getElementById('nav').style.display = "none"; 
        menu = 0;
    }
  }

  function sleep(ms) {
    return new Promise(resolve => setTimeout(resolve, ms));
  }

async function backflicker() {
    console.log("Changing back colourr"); 
    menub.style.bacgkround = "rgb(255,0,0)"; 
    await sleep(1000);
    menub.style.bacgkround = "rgb(255,255,255)"; 
    console.log("Done"); 
}

function displayMenu() {
    console.log("Clicked menu");
    if(displaygamemenu == 1) {
        console.log("Hiding menu"); 
        document.getElementById("dropdown").style.left = "-145px"; 
        backflicker(); 
        displaygamemenu = 0; 
    }
    else {
        console.log("Showing menu"); 
        document.getElementById("dropdown").style.left = "-40px";
        document.getElementById('dimmer').style.background = "rgba(0, 0, 0, 0.5)";
 
        displaygamemenu = 1; 
    }
}

function exitgame() {
    document.getElementById("dimmer").style.display = "none";
    document.getElementById("gamewindow").style.display = "none";
    document.getElementById('title').innerHTML = ""; 
}

function playgame() {
    document.getElementById("dimmer").style.display = "block";
    document.getElementById("gamewindow").style.display = "block";
    document.getElementById('title').innerHTML = "Card Game"; 
}






var deck  = [
    {picture: "AceHearts.png", facevalue: 1 },    
    {picture: "2Hearts.png", facevalue: 2 },    
    {picture: "3Hearts.png", facevalue: 3 },    
    {picture: "4Hearts.png", facevalue: 4 },
    {picture: "5Hearts.png", facevalue: 5 },    
    {picture: "6Hearts.png", facevalue: 6 },
    {picture: "7Hearts.png", facevalue: 7 },    
    {picture: "8Hearts.png", facevalue: 8 },
    {picture: "9Hearts.png", facevalue: 9 },    
    {picture: "10Hearts.png", facevalue: 10 },
    {picture: "JackHearts.png", facevalue: 11 },    
    {picture: "QueenHearts.png", facevalue: 12 },
    {picture: "KingHearts.png", facevalue: 13 },    
    {picture: "AceClubs.png", facevalue: 1 },   
    {picture: "2Clubs.png", facevalue: 2 },    
    {picture: "3Clubs.png", facevalue: 3 },    
    {picture: "4Clubs.png", facevalue: 4 },
    {picture: "5Clubs.png", facevalue: 5 },    
    {picture: "6Clubs.png", facevalue: 6 },
    {picture: "7Clubs.png", facevalue: 7 },
    {picture: "8Clubs.png", facevalue: 8 },
    {picture: "9Clubs.png", facevalue: 9 },
    {picture: "10Clubs.png", facevalue: 10 },
    {picture: "JackClubs.png", facevalue: 10 },    
    {picture: "QueenClubs.png", facevalue: 10 },
    {picture: "KingClubs.png", facevalue: 10 },
    {picture: "AceSpades.png", facevalue: 1 },
    {picture: "2Spades.png", facevalue: 2 },    
    {picture: "3Spades.png", facevalue: 3 },    
    {picture: "4Spades.png", facevalue: 4 },
    {picture: "5Spades.png", facevalue: 5 },    
    {picture: "6Spades.png", facevalue: 6 },
    {picture: "7Spades.png", facevalue: 7 },    
    {picture: "8Spades.png", facevalue: 8 },
    {picture: "9Spades.png", facevalue: 9 },    
    {picture: "10Spades.png", facevalue: 10 },
    {picture: "JackSpades.png", facevalue: 10 },    
    {picture: "QueenSpades.png", facevalue: 10 },
    {picture: "KingSpades.png", facevalue: 10 },    
    {picture: "AceDiamonds.png", facevalue: 1 },    
    {picture: "2Diamonds.png", facevalue: 2 },    
    {picture: "3Diamonds.png", facevalue: 3 },    
    {picture: "4Diamonds.png", facevalue: 4 },
    {picture: "5Diamonds.png", facevalue: 5 },    
    {picture: "6Diamonds.png", facevalue: 6 },
    {picture: "7Diamonds.png", facevalue: 7 },    
    {picture: "8Diamonds.png", facevalue: 8 },
    {picture: "9Diamonds.png", facevalue: 9 },    
    {picture: "10Diamonds.png", facevalue: 10 },
    {picture: "JackDiamonds.png", facevalue: 10 },    
    {picture: "QueenDiamonds.png", facevalue: 10 },
    {picture: "KingDiamonds.png", facevalue: 10 }   
    
    

    ];