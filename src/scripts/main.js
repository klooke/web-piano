const volumeInput = document.querySelector("#volume");
const showKeysCheck = document.querySelector("#show-keys");
const pianoKeys = document.querySelectorAll(".piano .key");

const mappedKeys = {};
const audioTune = new Audio();

function playAudio(key) {
  audioTune.src = `./res/audio/${key}.wav`;
  audioTune.play();
}

volumeInput.onchange = (event) => {
  audioTune.volume = event.target.value;
};

showKeysCheck.onclick = () => {
  pianoKeys.forEach((key) => key.firstElementChild.classList.toggle("hide"));
};

pianoKeys.forEach((key) => {
  mappedKeys[key.dataset.key] = key;
  mappedKeys[key.dataset.key].onclick = () => playAudio(key.dataset.key);
});

window.addEventListener("keydown", (event) => {
  event.preventDefault();

  mappedKeys[event.key]?.click();
});

window.addEventListener("DOMContentLoaded", () => {
  audioTune.volume = volumeInput.value;
});
