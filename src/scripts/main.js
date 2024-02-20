const showKeysCheck = document.querySelector("#show-keys");

showKeysCheck.onclick = () => {
  pianoKeys.forEach((key) => key.firstElementChild.classList.toggle("hide"));
};
