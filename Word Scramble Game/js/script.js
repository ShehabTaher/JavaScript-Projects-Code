const wordText = document.querySelector('.word');
const wordHint = document.querySelector('.hint span');
const timeText = document.querySelector('.time b');
const inputField = document.querySelector('input');
const refreshBtn = document.querySelector('.refresh-word');
const checkBtn = document.querySelector('.check-word');


let correctWord , timer;

const initTimer = maxTime => {
    clearInterval(timer);
    timer = setInterval(() => {
        if(maxTime > 0 ){
            maxTime--; // decrement max time by -1
            return timeText.innerHTML = maxTime;
        }
        clearInterval(timer);
        alert(`Time Off! ${correctWord.toUpperCase()} was the a correct word`);
        initGame(); // calling initGame function, so the game restart
    }, 1000);
}

const initGame = () => {
    initTimer(30); // calling initTimer function with passing 20 as maxTime value
    let randomObj = words[Math.floor(Math.random() * words.length)]; // getting random object from words
    let wordArray = randomObj.word.split(""); // splitting each letter of random word
    for (let i = wordArray.length - 1 ; i > 0; i--) {
        let j = Math.floor(Math.random() * (i + 1)); // getting random number
        // shuffling and swiping word array letters randomly
        [wordArray[i], wordArray[j]] = [wordArray[j], wordArray[i]];       
    
    }
    wordText.innerHTML = wordArray.join(""); // passing shuffled word as word text
    wordHint.innerHTML = randomObj.hint; // passing random object hint as hint text
    correctWord =randomObj.word.toLowerCase(); // passing random word to correct word
    inputField.value = ""; // making input field empty
    inputField.setAttribute("maxlength",correctWord.length); // setting input maxlength attr value to word length 
    // console.log(randomObj);
}
initGame();

const checkWord = () => {
    let userword = inputField.value.toLocaleLowerCase(); // getting user value
    if(!userword) return alert("please enter a word check"); // if user didn't enter anything
    // if user word doesn't matched with the correct word
    if(userword !== correctWord) return alert(`Oops! ${userword} is not a correct word`);
    // if above two if conditions are failed then show congras alert because user word is correct
    alert(`congrats! ${userword.toUpperCase()} is a correct word`);
    initGame();

};  

refreshBtn.addEventListener("click", initGame);
checkBtn.addEventListener("click", checkWord);