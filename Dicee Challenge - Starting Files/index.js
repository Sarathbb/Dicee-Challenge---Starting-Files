// Create a random number
let randomNumber1 = Math.floor((Math.random() * 6)+1);
let randomImageSorce1 = `./images/dice${randomNumber1}.png`;
document.querySelector('.img1').setAttribute('src',randomImageSorce1);


let randomNumber2 = Math.floor((Math.random() * 6)+1);
let randomImageSorce2 = `./images/dice${randomNumber2}.png`;
document.querySelector('.img2').setAttribute('src',randomImageSorce2);
// Set random number to image

if(randomNumber1 > randomNumber2)
{
    document.querySelector('.container h1').innerHTML = 'Player1 wins!🚩'
}
else if(randomNumber1 === randomNumber2)
{
    document.querySelector('.container h1').innerHTML = 'Draw!'
}
else{
    document.querySelector('.container h1').innerHTML = '🚩Player2 wins!'
}