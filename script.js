
var menub = document.getElementById('menub'); 
var cardb = document.getElementById('cardgame'); 
var closeb = document.getElementById('closeb'); 
var displaygamemenu = 0; 
menub.addEventListener("click", displayMenu); 
cardb.addEventListener('click', playgame); 
closeb.addEventListener('click',exitgame); 
document.getElementById('coming').addEventListener('click',chessgame); 



var deck  = [
    {picture: "cards/AceHearts.png", facevalue: 1 },    
    {picture: "cards/2Hearts.png", facevalue: 2 },    
    {picture: "cards/3Hearts.png", facevalue: 3 },    
    {picture: "cards/4Hearts.png", facevalue: 4 },
    {picture: "cards/5Hearts.png", facevalue: 5 },    
    {picture: "cards/6Hearts.png", facevalue: 6 },
    {picture: "cards/7Hearts.png", facevalue: 7 },    
    {picture: "cards/8Hearts.png", facevalue: 8 },
    {picture: "cards/9Hearts.png", facevalue: 9 },    
    {picture: "cards/10Hearts.png", facevalue: 10 },
    {picture: "cards/JackHearts.png", facevalue: 11 },    
    {picture: "cards/QueenHearts.png", facevalue: 12 },
    {picture: "cards/KingHearts.png", facevalue: 13 },    
    {picture: "cards/AceClubs.png", facevalue: 1 },   
    {picture: "cards/2Clubs.png", facevalue: 2 },    
    {picture: "cards/3Clubs.png", facevalue: 3 },    
    {picture: "cards/4Clubs.png", facevalue: 4 },
    {picture: "cards/5Clubs.png", facevalue: 5 },    
    {picture: "cards/6Clubs.png", facevalue: 6 },
    {picture: "cards/7Clubs.png", facevalue: 7 },
    {picture: "cards/8Clubs.png", facevalue: 8 },
    {picture: "cards/9Clubs.png", facevalue: 9 },
    {picture: "cards/10Clubs.png", facevalue: 10 },
    {picture: "cards/JackClubs.png", facevalue: 10 },    
    {picture: "cards/QueenClubs.png", facevalue: 10 },
    {picture: "cards/KingClubs.png", facevalue: 10 },
    {picture: "cards/AceSpades.png", facevalue: 1 },
    {picture: "cards/2Spades.png", facevalue: 2 },    
    {picture: "cards/3Spades.png", facevalue: 3 },    
    {picture: "cards/4Spades.png", facevalue: 4 },
    {picture: "cards/5Spades.png", facevalue: 5 },    
    {picture: "cards/6Spades.png", facevalue: 6 },
    {picture: "cards/7Spades.png", facevalue: 7 },    
    {picture: "cards/8Spades.png", facevalue: 8 },
    {picture: "cards/9Spades.png", facevalue: 9 },    
    {picture: "cards/10Spades.png", facevalue: 10 },
    {picture: "cards/JackSpades.png", facevalue: 10 },    
    {picture: "cards/QueenSpades.png", facevalue: 10 },
    {picture: "cards/KingSpades.png", facevalue: 10 },    
    {picture: "cards/AceDiamonds.png", facevalue: 1 },    
    {picture: "cards/2Diamonds.png", facevalue: 2 },    
    {picture: "cards/3Diamonds.png", facevalue: 3 },    
    {picture: "cards/4Diamonds.png", facevalue: 4 },
    {picture: "cards/5Diamonds.png", facevalue: 5 },    
    {picture: "cards/6Diamonds.png", facevalue: 6 },
    {picture: "cards/7Diamonds.png", facevalue: 7 },    
    {picture: "cards/8Diamonds.png", facevalue: 8 },
    {picture: "cards/9Diamonds.png", facevalue: 9 },    
    {picture: "cards/10Diamonds.png", facevalue: 10 },
    {picture: "cards/JackDiamonds.png", facevalue: 10 },    
    {picture: "cards/QueenDiamonds.png", facevalue: 10 },
    {picture: "cards/KingDiamonds.png", facevalue: 10 }   
    ];


//burger menu
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


//Game menu/card game code
function displayMenu() {
    console.log("Clicked menu");
    if(displaygamemenu == 1) {
        console.log("Hiding menu"); 
        document.getElementById("dropdown").style.left = "-145px"; 
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


function randcard() {
    var randcard = (Math.random() * 52); 
    console.log("Random num: " + randcard); 
    randcard = Math.floor(randcard); 
    return randcard; 
}

var cardval1;
var cardval2; 
var card2src; 
var card1 = document.getElementById('card1'); 
var card2 = document.getElementById('card2'); 
document.getElementById('drawb').addEventListener('click', pdraw); 


function playgame() {

    document.getElementById("dimmer").style.display = "block";
    document.getElementById("gamewindow").style.display = "block";
    document.getElementById('title').innerHTML = "Card Game"; 
    card1.style.display = 'inline-block';
    card2.style.display = 'inline-block';
    document.getElementById('drawb').style.display = 'block';
    document.getElementById('resetb').style.display = 'none';

    var c1 = randcard()
    card1.src = deck[c1].picture; 
    cardval1 = deck[c1].facevalue; 
    card2.src = 'cards/back.png'; 
    
    var check = true
    while(check) {
        console.log("Getting player card value"); 
        var c2 = randcard(); 
        cardval2 = deck[c2].facevalue
        if(deck[c2].picture != deck[c1].picture) {
            check = false; 
            console.log("Pcard found, value: " + cardval2); 
            card2src = deck[c2].picture; 
        }
    }
}

function pdraw() {
    console.log("Player draws"); 
    console.log("CPU: " + cardval1);
    console.log("Player: " + cardval2); 
    document.getElementById('card2').src = card2src; 


    setTimeout(displayWinner, 2000); 
}

function displayWinner() {
    card1.style.display = 'none';
    card2.style.display = 'none';
    document.getElementById('drawb').style.display = 'none';
    document.getElementById('resetb').style.display = 'block'; 
    document.getElementById('resetb').addEventListener('click',playgame); 

    if(cardval1 == cardval2) {
        document.getElementById('title').innerHTML = 'Draw!'; 
    }
    else if(cardval1 > cardval2) {
        document.getElementById('title').innerHTML = 'You lose!';
    }
    else {
        document.getElementById('title').innerHTML = 'You won!';
    }
}

function chessgame() {
    document.getElementById("dimmer").style.display = "block";
    document.getElementById("gamewindow").style.display = "block";
    document.getElementById('title').innerHTML = "Coming soon!"; 
    document.getElementById('drawb').style.display = 'none';
    card1.style.display = 'none';
    card2.style.display = 'none';
}