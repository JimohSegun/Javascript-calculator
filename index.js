const date = document.getElementById("date");
const currentYear = new Date ().getFullYear();

let num1 = 5;
let num2 = 5;
document.getElementById("num-el").textContent = num1
document.getElementById("num2-el").textContent = num2
let sumB = document.getElementById("sum-el")

function add() {
let result = num1 + num2
sumB.textContent = "Sum:" + result

};

function sub() {
    let result = num1 - num2
    sumB.textContent = "Sum:" + result
};

function div() {
    let result = num1 / num2
    sumB.textContent = "Sum:" + result
};

function multi() {
    let result = num1 * num2
    sumB.textContent = "Sum:" + result
};

// date
let newDate = date.innerText 
newDate = currentYear