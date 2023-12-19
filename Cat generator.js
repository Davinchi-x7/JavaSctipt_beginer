function ageInDays() {
    var birthYear = prompt('What year were you born...Good friend');
    var ageInDays = [2023- birthYear] * 365;
    var h1 = document.createElement('h1')
    var textAnswer = document.createTextNode('You are' +ageInDays + 'days old')
    h1.setAttribute('id', 'ageInDays');
    h1.appendChild[textAnswer];
    document.getElementById['flex-box-result'].appendChild[h1];
}
function generateCat() {
var image = document.createElement('img');
var div = document.getElementById('flex-cat-gen')
image.src = "https://cdn2.thecatapi.com/images/5k7.gif"
div.appendChild(image);
}

function rpsGame(yourChoice) {
    console.log(yourChoice);
    console.log(yourChoice.src);
}