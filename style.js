document.getElementById("button").addEventListener("click", function junaid() {
    const firstIteam = document.getElementById("first");
    firstIteam.innerText = "Karim Benzema";
})
document.getElementById("secondButton").addEventListener("click", function junaid() {
    const secondIteam = document.getElementById("first-name");
    secondIteam.innerText = "Naymer JR";
})
document.getElementById("ThirdButton").addEventListener("click", function junaid() {
    const thirdIteam = document.getElementById("second-name");
    thirdIteam.innerText = "Mohamed Salah";
})
document.getElementById("fourButton").addEventListener("click", function junaid() {
    const fourtIteam = document.getElementById("third-name");
    fourtIteam.innerText = "kylian Mbappe";
})
document.getElementById("fiveButton").addEventListener("click", function junaid() {
    const fiveIteam = document.getElementById("four-name");
    fiveIteam.innerText = "Domagoj vida";
})


document.getElementById("calculate").addEventListener("click", function Jahbaz() {
    const inputField = document.getElementById("input-field");
    const inputValue = inputField.value;
    const operationNumber = parseInt(inputValue);
    const expenses = document.getElementById("expense")
    const vie = expenses.innerText;
    const none = operationNumber * 5;
    expenses.innerText = none;
})

document.getElementById("mains").addEventListener("click", function hasan() {
    const secondInput = document.getElementById("second-input");
    const inputString = secondInput.value;
    const operationFirst = parseInt(inputString);

    const lastInput = document.getElementById("third-input");
    const lastInputString = lastInput.value;
    const lastInputOperation = parseInt(lastInputString);

    const inputField = document.getElementById("input-field");
    const inputValue = inputField.value;
    const operationNumber = parseInt(inputValue);
    const expenses = document.getElementById("expense")
    const vie = expenses.innerText;
    const none = operationNumber * 5;
    expenses.innerText = none;

    const totalAmount = document.getElementById("total-Amount");
    const lastField = totalAmount.innerText;
    const TotalSum = operationFirst + lastInputOperation + none;
    totalAmount.innerText = TotalSum;

})
