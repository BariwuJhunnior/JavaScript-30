function removeTransition(event) {
  if (event.propertyName !== "transform") return;

  event.target.classList.remove("playing");
}

function playSound(event) {
  const sound = document.querySelector(`audio[data-key="${event.keyCode}"]`);
  const key = document.querySelector(`div[data-key="${event.keyCode}"]`);

  if (!sound) return;

  key.classList.add("playing");

  sound.currentTime = 0;
  sound.play();
}

window.addEventListener("keydown", playSound);

const keys = document.querySelectorAll(".key");

keys.forEach((key) => key.addEventListener("transitionend", removeTransition));
