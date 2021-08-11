const paperBtn = document.getElementById('paper-btn');
const rockBtn = document.getElementById('rock-btn');
const scissorBtn = document.getElementById('scissor-btn');
const resetBtn = document.getElementById('reset-btn');

const menu = document.getElementById("computer-menu");
const playerText = document.getElementById('player-text');
const computerText = document.getElementById('computer-text');

const finalResultSection = document.getElementById("final-result");
const winnerText = document.getElementById('winner-text');

let finalResult;

const winner = (playerChoice, computerChoice) => {
    if (playerChoice === computerChoice) return "It's A Draw!";
    else if ((playerChoice === 0 || playerChoice === 2) && (computerChoice === 0 || computerChoice === 2)) {
        if (playerChoice > computerChoice) return "You Lose!";
        else return "You Win!";
    } else if (playerChoice > computerChoice) return "You Win!";
    else return "You Lose!";
}

const changeText = (playerChoice, computerChoice, event) => {
    playerText.innerHTML = `<h3>Player Choice was ${playerChoice}</h3>`;

    switch (computerChoice) {
        case 0:
            computerText.innerHTML = '<h3>Computer Choice was PAPER</h3>';
            menu.style.visibility = 'visible';
            break;
        case 1:
            computerText.innerHTML = '<h3>Computer Choice was SCISSOR</h3>';
            menu.style.visibility = 'visible';
            break;
        case 2:
            computerText.innerHTML = '<h3>Computer Choice was ROCK</h3>';
            menu.style.visibility = 'visible';
            break;
    }

}

const textToNumber = (text) => {
    switch (text) {
        case 'PAPER': return 0;
        case 'SCISSOR': return 1;
        case 'ROCK': return 2;
        default: return 3;
    }
}

const disableEnableButtons = (action) => {
    if(action === 'enabled') {
        paperBtn.removeAttribute("disabled");
        scissorBtn.removeAttribute("disabled");
        rockBtn.removeAttribute("disabled");
    } else {
        paperBtn.setAttribute(action, true);
        scissorBtn.setAttribute(action, true);
        rockBtn.setAttribute(action, true);
    }
    
}

const gameCalc = (event) => {
    let playerChoice = event.target.innerHTML;
    const computerChoice = Math.floor(Math.random() * 3);

    changeText(playerChoice, computerChoice, event);
    playerChoice = textToNumber(playerChoice);

    disableEnableButtons("disabled");
    finalResult = winner(playerChoice, computerChoice);

    winnerText.innerHTML = `<h2>${finalResult}</h2>`;
    finalResultSection.style.visibility = 'visible';

    console.log(finalResult);
}

const resetGame = (event) => {
    finalResultSection.style.visibility = 'hidden';
    menu.style.visibility = 'hidden';
    disableEnableButtons("enabled");
}

paperBtn.addEventListener('click', gameCalc);
scissorBtn.addEventListener('click', gameCalc);
rockBtn.addEventListener('click', gameCalc);
resetBtn.addEventListener('click', resetGame);