$(document).ready(function(){
    const numberDisplay = $('#numberDisplay');
    const userInput = $('#userInput');
    const result = $('#result');
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
        userInput.prop('disabled', true); 
        numberDisplay.text(numbers);
        setTimeout(() => {
            numberDisplay.text('');
            userInput.prop('disabled', false); 
            userInput.focus(); 
        }, duration);
    }


    $('#startButton').click(function(){
        numbersToRemember = generateNumberSequence(currentLevel);
        displayNumbers(numbersToRemember, 2000);
    });

    $('#checkButton').click(function(){
        const answer = userInput.val().trim();
        if (answer === numbersToRemember) {
            result.text('Correct!');
            userInput.val(''); 
            userInput.prop('disabled', true);
            currentLevel++;
            setTimeout(() => {
                $('#startButton').trigger('click');
                result.text('');
            }, 1000);
        } else {
            result.text('Incorrect. The correct answer was: ' + numbersToRemember);
        }
    });
});
