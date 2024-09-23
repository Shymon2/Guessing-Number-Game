const minNum = 1;
const maxNum = 100;

let attemp = -1;
let ranNum;
const result = document.getElementById("result");
const guessBox = document.getElementById("guessBox");
const numAttemp = document.getElementById("numAttemp");

function rollNumberAttemp(){
    attemp = Math.floor((Math.random())*(10 - 5)) + 5;
    numAttemp.textContent = `You have ${attemp} guesses`;
    ranNum = Math.floor(Math.random()*(maxNum - minNum)) + minNum;
    result.textContent = "";
    guessBox.value = "";
    console.log(ranNum);
    console.log(attemp);
}
function guessingGameMain(){
    result.classList.remove("greenText", "redText");
   
    if(attemp === -1){
        result.textContent = "You have to roll once";
        result.classList.add("redText");
    }
    else if (attemp === 0) {
        result.textContent = "You lose !!!"
        result.classList.add("redText");
    }
    else{
        let guess = Number(guessBox.value);
        if(guess == ""){
            result.textContent = "Please enter a number (0 - 99)"
            result.classList.add("redText");
        }
        else if(guess > maxNum || guess < minNum){
            result.textContent = "Value out of range (0 - 99)"
            result.classList.add("redText");
        }
        else if(isNaN(guess)){
            result.textContent = "Please enter valid value"
            result.classList.add("redText");
        }
        else if(ranNum > guess){
            result.textContent = "Too low";
            attemp--;
            numAttemp.textContent = `You have ${attemp} guesses`;
        }
        else if(ranNum < guess){
            result.textContent = "Too high";
            attemp--;
            numAttemp.textContent = `You have ${attemp} guesses`;
        }
        else{
            result.textContent = "Congratuation ! You are correct";
            numAttemp.textContent = "(Roll to replay)"
            result.classList.add("greenText")
        }
    }
}