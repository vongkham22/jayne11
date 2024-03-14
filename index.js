let randomNumber1 = Math.floor(Math.random() *6) + 1;
 
let randomDiceImage1 = `./images/dice${randomNumber1}.png`;
document.querySelector('.img1').setAttribute('src', randomDiceImage1);
let h1 = document.querySelector('h1');
if (randomNumber1 > randomNumber2) {
  h1.innerHTML = "Player 1 Wins!";
} else if (randomNumber2 > randomNumber1) {
  h1.innerHTML = "Player 2 Wins!";
} else {
  h1.innerHTML = "It's a Draw!";
}