const inputField = document.getElementById('input');

var arrayOfLetters = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"]
var arrayOfOperators = ["Enter", "=", "*", "/", "-", "+"];


$(document).on("keypress",function(event){
    
    if(arrayOfLetters.includes(event.key)){
        console.log('Bruh... its a calculator.. use fucking numbers holy shits');
        event.preventDefault();
    } else if(event.key === "Enter"){
        equalTo();
        event.preventDefault();
    } else {
        inputField.textContent += event.key
    }
   
})

function insertNum(num){
    inputField.textContent += num
}


function equalTo(){
    if(inputField.textContent){
        inputField.textContent = eval(inputField.textContent)
    } else {
        false
    }
}

function eraseNum(){
    inputField.textContent = inputField.textContent.substring(0, inputField.textContent.length - 1)
}

function clearInput(){
    inputField.textContent = ''
}

