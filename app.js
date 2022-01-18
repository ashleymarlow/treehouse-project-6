const qwerty = document.getElementById('qwerty');
const phrase = document.getElementById('phrase');
const missed = 0;

const startButton = document.getElementsByClassName('btn__reset');
startButton[0].addEventListener('click', (e) => {
    document.getElementById('overlay').className = "hidden";
});

const phrases = ['Kitties', 'Doggos', 'Birbs', 'Fishies', 'Tigers'];

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
    let matchFound = null;

    for (const letter of phraseArray) {
        if (button.text == letter) {
            matchFound = true;
        } else {
            matchFound = false;
        }
    }


    return matchFound;
}

qwerty.addEventListener('click', (e) => {
    if (e.target.className !== 'chosen' && e.target.tagName === 'BUTTON') {
        // console.log(e);
        // const letterFound = checkLetter(e.target);
    }
});

