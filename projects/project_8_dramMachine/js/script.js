function playSound(event) {
  const key = document.querySelector(`.key[data-key="${event.keyCode}"]`);
  const audio = document.querySelector(`audio[data-key="${event.keyCode}"]`);

  key.classList.toggle('playing');
  audio.play();
  audio.currentTime = 0;
}

function turnOffButton(event) {
  const key = document.querySelector(`.key[data-key="${event.keyCode}"]`);
  key.classList.toggle('playing');
}

document.addEventListener('keydown', playSound);
document.addEventListener('keyup', turnOffButton);