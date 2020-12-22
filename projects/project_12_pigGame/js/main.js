var currentPlayer, roundScore, scores, firstDice, secondDice, activeGame, finalScore;

firstDice = document.getElementById('dice-1');
secondDice = document.getElementById('dice-2');

init();

document.querySelector('.btn-roll').addEventListener('click', function () {
  if (activeGame) {
    var firstDiceValue, secondDiceValue;    
    firstDiceValue = Math.floor(Math.random() * 6 + 1);
    secondDiceValue = Math.floor(Math.random() * 6 + 1);
    if (document.querySelector('.final-score').value <= 0) {
      finalScore = 100;
      document.querySelector('.final-score').value = finalScore;
    } else {
      finalScore = document.querySelector('.final-score').value;
    }
    document.querySelector('.final-score').setAttribute('disabled', 'disabled');
    firstDice.style.display = 'block';
    secondDice.style.display = 'block';
    firstDice.src = `./img/dice-${firstDiceValue}.png`;
    secondDice.src = `./img/dice-${secondDiceValue}.png`;
    if (firstDiceValue !== 1 && secondDiceValue !== 1) {
      roundScore += firstDiceValue + secondDiceValue;
      document.getElementById(`current-${currentPlayer}`).textContent = roundScore;
    } else {
      changePlayer();
    }
  };
});

document.querySelector('.btn-hold').addEventListener('click', function () {
  if (activeGame) {
    scores[currentPlayer] += roundScore;
    document.getElementById(`score-${currentPlayer}`).textContent = scores[currentPlayer];
    if (scores[currentPlayer] >= finalScore) {
      document.getElementById(`name-${currentPlayer}`).textContent = 'WINNER!';      
      document.querySelector(`.player-${currentPlayer}-panel`).classList.add('winner');
      document.querySelector(`.player-${currentPlayer}-panel`).classList.remove('active');
      hideDice();
      activeGame = false;
    } else {
      changePlayer();
    }
  };
});

function hideDice() {
  firstDice.style.display = 'none';
  secondDice.style.display = 'none';
};

function changePlayer() {
  currentPlayer === 0 ? currentPlayer = 1 : currentPlayer = 0;
  roundScore = 0;
  document.getElementById('current-0').textContent = 0;
  document.getElementById('current-1').textContent = 0;
  document.querySelector('.player-0-panel').classList.toggle('active');
  document.querySelector('.player-1-panel').classList.toggle('active');
  hideDice();
};

document.querySelector('.btn-new').addEventListener('click', init);

function init() {
  currentPlayer = 0;
  roundScore = 0;
  scores = [0, 0];
  activeGame = true;
  document.querySelector('.final-score').removeAttribute('disabled');
  document.querySelector('.final-score').value = '';
  document.getElementById('score-0').textContent = 0;
  document.getElementById('score-1').textContent = 0;
  document.getElementById('current-0').textContent = 0;
  document.getElementById('current-1').textContent = 0;
  document.getElementById('name-0').textContent = 'Player 1';
  document.getElementById('name-1').textContent = 'Player 2';
  document.querySelector(`.player-0-panel`).classList.remove('winner');
  document.querySelector(`.player-1-panel`).classList.remove('winner');
  document.querySelector('.player-0-panel').classList.remove('active');
  document.querySelector('.player-1-panel').classList.remove('active');
  document.querySelector('.player-0-panel').classList.add('active');
  hideDice();
};