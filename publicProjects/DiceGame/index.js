var randomNumber1 = Math.floor(Math.random() * 6) + 1;
console.log(randomNumber1);

randomDice1 = "dice" + randomNumber1 +".png";   // dice1.png
randomImg1 = "images/" + randomDice1;   // images/dice1.png

var play1 = document.querySelectorAll("img")[0];
play1.setAttribute("src", randomImg1 );



var randomNumber2 = Math.floor(Math.random() * 6) + 1;
console.log(randomNumber2);

randomDice2 = "dice" + randomNumber2 +".png";   // dice1.png
randomImg2 = "images/" + randomDice2;   // images/dice1.png


var play2 = document.querySelectorAll("img")[1];
play2.setAttribute("src", randomImg2 );


if (randomNumber1 > randomNumber2){
    document.querySelector("h1").innerText = "Player 1 Won!";
} else if(randomNumber1 === randomNumber2) {
    document.querySelector("h1").innerText = "No winners";
} else {
    document.querySelector("h1").innerText = "Player 2 Won!";
}






//This code below is longer way and code above is shorter more optimized way


/*One way*/
/*
if (randomNumber1 === 1){
    document.querySelectorAll("img")[0].setAttribute("src", "images/dice1.png");
   
} else if(randomNumber1 === 2){
    document.querySelectorAll("img")[0].setAttribute("src", "images/dice2.png");
} else if(randomNumber1 === 3){
    document.querySelectorAll("img")[0].setAttribute("src", "images/dice3.png");
} else if (randomNumber1 === 4){
    document.querySelectorAll("img")[0].setAttribute("src", "images/dice4.png");
} else if (randomNumber1 === 5){
    document.querySelectorAll("img")[0].setAttribute("src", "images/dice5.png");
} else if( randomNumber1 === 6){
    document.querySelectorAll("img")[0].setAttribute("src", "images/dice6.png");
} else {
    alert("Error!")
}


if (randomNumber2 === 1){
    document.querySelectorAll("img")[1].setAttribute("src", "images/dice1.png");
} else if(randomNumber2 === 2){
    document.querySelectorAll("img")[1].setAttribute("src", "images/dice2.png");
} else if(randomNumber2 === 3){
    document.querySelectorAll("img")[1].setAttribute("src", "images/dice3.png");
} else if (randomNumber2 === 4){
    document.querySelectorAll("img")[1].setAttribute("src", "images/dice4.png");
} else if (randomNumber2 === 5){
    document.querySelectorAll("img")[1].setAttribute("src", "images/dice5.png");
} else if( randomNumber2 === 6){
    document.querySelectorAll("img")[1].setAttribute("src", "images/dice6.png");
} else {
    alert("Error!")
}

if (randomNumber1 > randomNumber2){
    document.querySelector("h1").innerText = "Player 1 Won!";
} else if(randomNumber1 === randomNumber2) {
    document.querySelector("h1").innerText = "No winners";
} else {
    document.querySelector("h1").innerText = "Player 2 Won!";
}

*/