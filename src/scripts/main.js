const showKeysCheck = document.querySelector("#show-keys");
const pianoKeys = document.querySelectorAll(".piano .key");

const audioTune = new Audio();

function playAudio(key) {
  audioTune.src = `./res/audio/${key}.wav`;
  audioTune.play();
}

showKeysCheck.onclick = () => {
  pianoKeys.forEach((key) => key.firstElementChild.classList.toggle("hide"));
};

pianoKeys.forEach((key) => {
  key.onclick = () => playAudio(key.dataset.key);
});

