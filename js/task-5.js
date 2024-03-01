function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215)
    .toString(16)
    .padStart(6, 0)}`;
}

function changeBgColor() {
  const bodyEl = document.body;
  bodyEl.style.backgroundColor = getRandomHexColor();
  const bgColor = document.querySelector(".color");
  bgColor.textContent = getRandomHexColor();
}
const changeColor = document.querySelector(".change-color");
changeColor.addEventListener("click", changeBgColor);
