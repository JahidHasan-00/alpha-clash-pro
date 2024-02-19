
// function play(){
//     //Hide Home-Screen
//     const element = document.getElementById('home-screen');
//     element.classList.add('hidden');
//     console.log(element.classList);

//     //Show play ground screen
//     const showElement = document.getElementById('play-ground');
//     showElement.classList.remove('hidden');
// }

function gameContinue(){
    const alphabet = randomAlphabet();

    // set random alphabet to screen
    const currentAlphabet = document.getElementById('current-alphabet');
    currentAlphabet.innerText = alphabet;

    // set background
    addBackgroundColor(alphabet);
}


function play(){
    hideElementById('home-screen');
    showElementById('play-ground');
    gameContinue();
}