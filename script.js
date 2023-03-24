const countValue = document.querySelector("#counter");

let decrement = () => {

// Converting to Int as .innerText return string
let value = parseInt(countValue.innerText);

//Decrementing
value = value - 1;

//Updating
countValue.innerText = value;

}

let increment = () => {
// Converting to Int as .innerText return string
let value = parseInt(countValue.innerText);

//Incrementing
value = value + 1;

//Updating
countValue.innerText = value;
    
}