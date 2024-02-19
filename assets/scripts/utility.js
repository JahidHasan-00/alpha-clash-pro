
function hideElementById(elementId){
    const element = document.getElementById(elementId);
    element.classList.add('hidden');
}

function showElementById(elementId){
    const element = document.getElementById(elementId);
    element.classList.remove('hidden');
}

function addBackgroundColor(elementId){
    const element = document.getElementById(elementId);
    element.classList.add('bg-orange-300');
}

function randomAlphabet(){
    //get Alphabet
    const text = 'abcdefghijklmnopqrstuvwxyz';
    const alphabets = text.split('');
    // 
    const randomNumber = Math.random()*25;
    const index = Math.round(randomNumber);
    // 
    const alphabet = alphabets[index];
    return alphabet;
}