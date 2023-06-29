"use strict";
let scores = [0, 0];
const score0El = document.getElementById("score--0");
const score1El = document.getElementById("score--1");
const currentScore0El = document.getElementById("current--0");
const currentScore1El = document.getElementById("current--1");
const dicedisp = document.querySelector(".dice");
const newGame = document.querySelector(".btn--new");
const newRoll = document.querySelector(".btn--roll");
const Hold = document.querySelector(".btn--hold");
const img = document.querySelector("img");
let activePlayer = 0;
let randomdice;
score0El.textContent = 0;
score1El.textContent = 0;
dicedisp.classList.add("hidden");
let currentScore = 0;
newRoll.addEventListener("click", function () {
  if(scores[0]<100 && scores[1]<100){
  dicedisp.classList.remove("hidden");
  randomdice = Math.trunc(Math.random() * 6 + 1);
  if (randomdice !== 1) {
    dicedisp.src = `dice-${randomdice}.png`;
    currentScore += randomdice;
    document.getElementById(`current--${activePlayer}`).textContent =currentScore;
  } else {
    document.querySelector(`.player--${activePlayer}`).classList.remove("player--active");
    currentScore = 0;
    document.getElementById(`current--${activePlayer}`).textContent =currentScore;
    activePlayer = activePlayer === 0 ? 1 : 0;
    dicedisp.src = `dice-${randomdice}.png`;
    document.querySelector(`.player--${activePlayer}`).classList.add("player--active");
  }}
});
Hold.addEventListener("click", function () {
  if(scores[0]<100 && scores[1]<100){
  scores[activePlayer] += currentScore;
  document.getElementById(`current--${activePlayer}`).textContent =0;
  document.getElementById(`score--${activePlayer}`).textContent=scores[activePlayer];
  document.querySelector(`.player--${activePlayer}`).classList.remove("player--active");
  activePlayer = activePlayer === 0 ? 1 : 0;
  document.querySelector(`.player--${activePlayer}`).classList.add("player--active");
  document.getElementById(`score--${activePlayer}`).textContent=scores[activePlayer];
  currentScore=0;
  if(scores[0]>=100)
  {
    document.querySelector(`.player--${Number(!activePlayer)}`).classList.remove('player--active');
    document.querySelector(`.player--${Number(!activePlayer)}`).classList.add('player--winner');
    dicedisp.classList.add("hidden");
  }
  else if(scores[1]>=100)
  {
    document.querySelector(`.player--${Number(!activePlayer)}`).classList.remove('player--active');
    document.querySelector(`.player--${Number(!activePlayer)}`).classList.add('player--winner');
    dicedisp.classList.add("hidden");
  }
  }
});
newGame.addEventListener("click",function(){
  document.querySelector('.dice').src='';
  currentScore=0;
  document.querySelector('.player--0').classList.add("player--active");
  document.querySelector('.player--1').classList.remove("player--active");
  scores = [0,0];
  document.getElementById(`score--0`).textContent=scores[0];
  document.getElementById(`score--1`).textContent=scores[1];
  document.getElementById(`current--0`).textContent =0;
  document.getElementById(`current--1`).textContent =0;
  dicedisp.classList.add("hidden");
  document.querySelector(`.player--${Number(!activePlayer)}`).classList.remove('player--winner');
  activePlayer=0;
})
