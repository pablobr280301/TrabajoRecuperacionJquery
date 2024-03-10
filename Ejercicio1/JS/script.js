const numberDisplay = document.getElementById('numberDisplay');
const userInput = document.getElementById('userInput');
const result = document.getElementById('result');
let numbersToRemember = '';
let currentLevel = 1; 


function generateNumberSequence(length) {
    let numbers = '';
    for (let i = 0; i < length; i++) {
        numbers += Math.floor(Math.random() * 10);
    }
    return numbers;
}


function displayNumbers(numbers, duration) {
    userInput.disabled = true; 
    numberDisplay.textContent = numbers;
    setTimeout(() => {
        numberDisplay.textContent = '';
        userInput.disabled = false;
        userInput.focus(); 
    }, duration);
}


function startTest() {
    numbersToRemember = generateNumberSequence(currentLevel);
    displayNumbers(numbersToRemember, 2000); 
}


function checkAnswer() {
    const answer = userInput.value.trim();
    if (answer === numbersToRemember) {
        result.textContent = 'Correcto';
        userInput.value = ''; 
        userInput.disabled = true;
        currentLevel++;
        setTimeout(() => {
            startTest();
            result.textContent = ''; 
        }, 1000);
    } else {
        result.textContent = 'Perdiste, El numero correcto era: ' + numbersToRemember;
    }
}
