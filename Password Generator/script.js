// Fetching all into variables first 

const inputSlider = document.querySelector("[data-lengthSlider]");
const lengthDisplay = document.querySelector("[ data-lengthNumber]");
const passwordDisplay = document.querySelector("[ data-passwordDisplay]");
const copyBtn = document.querySelector("[ data-copy]");
const copyMsg = document.querySelector("[ data-copyMsg]");
const uppercaseCheck = document.querySelector("#uppercase");
const lowercaseCheck = document.querySelector("#lowercase");
const numberCheck = document.querySelector("#number");
const symbolCheck = document.querySelector("#symbol");
const indicator = document.querySelector("[ data-indicator]");
const generateBtn = document.querySelector(".generate-button");
const allCheckBox = document.querySelectorAll("input[type=checkbox]");

const symbols = '~`!@#$%^&*()_-+={[}]|:;"<,>.?/';


// By default values

let password = ""; //empty
let passwordLength = 10;
let checkCount = 1; //ek checkbox tick h by default
//set color of strength indicator to grey
handleSlider();

//Functions needed

function handleSlider(){
    inputSlider.value = passwordLength;
    lengthDisplay.innerText = passwordLength;
}
 
function setColor(color){
    indicator.style.backgroundColor(color)
}

function randomNumber(min,max){
    return Math.floor(Math.random() * (max-min)) + min;
}

function getRndUppercase(){
    return String.fromCharCode(randomNumber(65,90));
}

function getRndLowercase(){
    return String.fromCharCode(randomNumber(97,122));
}

function getRndNumber(){
    return randomNumber(0,9);
}

function getRndSymbol(){
    let rndNum = randomNumber(0,symbols.length);
    return symbols.charAt(rndNum);
}

function strengthIndicator(){
    let upper = false;
    let lower = false;
    let num = false;
    let sym = false;

    if(uppercaseCheck.checked) upper = true
    if(lowercaseCheck.checked) lower = true
    if(numberCheck.checked) num = true
    if(symbolCheck.checked) sym = true

    if(upper && lower && (num || sym) && passwordLength >= 8){
        setColor("#0f0");
    }
    else if( (lower || upper) && (num || sym) && passwordLength >= 6 ){
        setColor("#ff0");
    }
    else{
        setColor("#f00");
    }
}


