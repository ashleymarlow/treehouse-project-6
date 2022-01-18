const qwerty = document.getElementById('qwerty');
const phrase = document.getElementById('phrase');
let missed = 0;

const startButton = document.getElementsByClassName('btn__reset');
startButton[0].addEventListener('click', (e) => {
    document.getElementById('overlay').className = "hidden";
});

const phrases = ['Kitties', 'Doggos', 'Birbs', 'Fishy babies', 'Tigers'];

function getRandomPhraseAsArray(arr){
    const randomNumber = Math.floor( Math.random() * 5);
    const randomPhrase = arr[randomNumber];
    const randomPhraseAsArray = randomPhrase.split('');
    return randomPhraseAsArray;
}

function addPhraseToDisplay(arr) {
    for (const character of arr) {
        const li = document.createElement('li');
        li.textContent = character;

        if (character != " ") {
            li.className = "letter";
        }

        const phraseUl = document.getElementById('phrase').getElementsByTagName('ul')[0];
        phraseUl.appendChild(li);
    }

}

const phraseArray = getRandomPhraseAsArray(phrases);
addPhraseToDisplay(phraseArray); 


function checkLetter(button) {
    const phraseLiArray = document.getElementsByClassName('letter');
    let matchFound = null;

    for (const letterLi of phraseLiArray) {

        if (button.innerHTML.toLowerCase() == letterLi.innerHTML.toLowerCase()) {
            letterLi.className += " show";
            matchFound = true;
        }
    }


    return matchFound;
}

function checkWin() {
    const hiddenLetters = document.getElementsByClassName('letter');
    const shownLetters = document.getElementsByClassName('show');

        if (hiddenLetters.length == shownLetters.length){
            document.getElementById('overlay').className = "win";
            document.getElementsByClassName('title')[0].innerHTML = "You won, dawg!";
        } 
        if (missed >= 5) {
            document.getElementById('overlay').className = "lose";
            document.getElementsByClassName('title')[0].innerHTML = "Shucks man, try again!";
        }

}


qwerty.addEventListener('click', (e) => {
    if (e.target.className !== 'chosen' && e.target.tagName === 'BUTTON') {
        e.target.classList.add('chosen');
        const letterFound = checkLetter(e.target);
        if (letterFound == null) {
            document.getElementsByClassName('tries')[missed].getElementsByTagName('img')[0].src="images/lostHeart.png";
            missed++;
        }
        checkWin();
    }
});



