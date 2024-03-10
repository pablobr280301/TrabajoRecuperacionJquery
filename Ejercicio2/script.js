const gridContainer = document.getElementById('grid-container');
const cells = [];
let sequence = [];
let playerSequence = [];
let level = 1;
let isPlayerTurn = false;

function createGrid() {

    gridContainer.innerHTML = "";

    for (let i = 0; i < 9; i++) {
        const cell = document.createElement('div');
        cell.classList.add('grid-cell');
        cell.addEventListener('click', () => cellClicked(i));
        cells.push(cell);
        gridContainer.appendChild(cell);
    }
}

function startGame() {
    createGrid();
    sequence = generateSequence();
    showSequence();
}

function generateSequence() {
    const sequence = [];
    for (let i = 0; i < level; i++) {
        sequence.push(Math.floor(Math.random() * 9));
    }
    return sequence;
}

function showSequence() {
    isPlayerTurn = false;
    sequence.forEach((index, i) => {
        setTimeout(() => {
            cells[index].classList.add('animate');
            setTimeout(() => {
                cells[index].classList.remove('animate');
            }, 300);
        }, i * 600);
    });

    setTimeout(() => {
        isPlayerTurn = true;
    }, sequence.length * 600 + 100);
}

function cellClicked(index) {
    if (isPlayerTurn) {
        playerSequence.push(index);
        if (playerSequence.length === sequence.length) {
            checkSequence();
        }
    }
}

function checkSequence() {
    for (let i = 0; i < sequence.length; i++) {
        if (playerSequence[i] !== sequence[i]) {
            showMessage('Has fallado, se reiniciara en breve.');
            resetGame();
            return;
        }
    }

    if (playerSequence.length === sequence.length) {
        showMessage('Correcto, siguiente nivel.');
        level++;
        playerSequence = [];
        setTimeout(() => {
            showMessage(''); 
            sequence = generateSequence();
            showSequence();
        }, 2000); 
    }
}


function showMessage(message) {
    const messageElement = document.getElementById('message');
    messageElement.textContent = message;
}

function resetGame() {
    showMessage('Has fallado, se reiniciara en breve.');
    setTimeout(() => {
        location.reload();
    }, 2000);
}
