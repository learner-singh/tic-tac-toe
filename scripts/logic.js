console.log("Tic Tac Toe");

window.addEventListener('load', bindEvents);



function bindEvents() {
    document.getElementById('play-with-computer')
    .addEventListener('click', playWithComputer);

    document.getElementById('play-with-friends')
    .addEventListener('click', playWithFriends);
    
}

let buttons= null;
let buttonsC;

let flag;
let clickCount = 0;
let message = "";
let isGameFinished = false;
let reset;

function playWithComputer() {
    // resetGame();
    // document.getElementById('xOrZero').addEventListener('select', selectedXOrZero);
    document.getElementById('xOrZero').addEventListener('change', selectedXOrZero);
    // console.log('playwithcomputer called')

    reset = document.getElementById('resetC');
    reset.addEventListener('click', resetGame);
}


function selectedXOrZero() {
    const selected = document.getElementById('xOrZero').value;
    console.log('Selected value is', selected)
    if(selected == 'X') {
        flag = true;
    }
    else{
        flag = false;
    }
    document.getElementById('select-message')
        .innerText = 'You have Selected ' + (flag ? "X" : "0") + ' & Computer is ' +(!flag ? "X" : "0");
        buttons = document.querySelectorAll('.btnC');
          for(let btn of buttons){
            btn.addEventListener('click', printXOrZero);
            
        }
}

function playWithFriends() {
    // resetGame();
    flag = true;

    buttons = document.querySelectorAll(".btn");
    for (let btn of buttons) {
        btn.addEventListener('click', printXOrZero);
    }
    reset = document.getElementById('reset');
    reset.addEventListener('click', resetGame);
}



function printXOrZero() {
    const currentButton = this;
    if ((!isGameFinished) && currentButton.innerText.length == 0) {
        clickCount++;
        currentButton.innerText = flag ? "X" : "0";
        currentButton.style.backgroundColor = flag? "red" : "green";
        if (clickCount >= 5) {
            if (isGameOver()) {
                isGameFinished = true;
                message = "Game Over " + (flag ? "X" : "0") + " Wins";
                printMessage();
            }
        isDraw();
        }
        flag = !flag;
    }
}

const printMessage = () => {
    console.log("printmessag is called")
    // document.querySelectorAll('.message').style.color = flag? "red" : "green";
    // document.querySelectorAll(".message").innerText = message;
    document.getElementById('message').style.color = flag? "red" : "green";
    document.getElementById('messageC').style.color = flag? "red" : "green";
    document.getElementById('message').innerText = message;
    document.getElementById('messageC').innerText = message;

}

function isGameOver() {
    return isThreeSame(buttons[0], buttons[1], buttons[2]) ||
        isThreeSame(buttons[3], buttons[4], buttons[5]) ||
        isThreeSame(buttons[6], buttons[7], buttons[8]) ||
        isThreeSame(buttons[0], buttons[3], buttons[6]) ||
        isThreeSame(buttons[1], buttons[4], buttons[7]) ||
        isThreeSame(buttons[2], buttons[5], buttons[8]) ||
        isThreeSame(buttons[0], buttons[4], buttons[8]) ||
        isThreeSame(buttons[2], buttons[4], buttons[6]);
}

function isThreeSame(one, two, three) {
    if (isNotBlank(one) && isNotBlank(two) && isNotBlank(three)) {
        if ((one.innerText === two.innerText) && (one.innerText == three.innerText)) {
            return true;
        }
    }
    return false;
}

const isNotBlank = (currentButton) => currentButton.innerText.length > 0;

function isDraw() {
    if(clickCount == 9) {
        message = "Game Draw";
        printMessage();
        console.log('message is ', message)
    }

}

function resetGame() {
    flag = true;
    clickCount = 0;
    message = "";
    isGameFinished = false;
    for( let btn of buttons) {
        btn.innerText = "";
        btn.style.backgroundColor = "aquamarine";
    }
    document.getElementById('xOrZero').value = 'X';
    document.getElementById('select-message').innerText = 'By default You are X & Computer is 0';
    printMessage();
    
}