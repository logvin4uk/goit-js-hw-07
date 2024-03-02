function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215)
    .toString(16)
    .padStart(6, 0)}`;
}

function changeBgColor() {
  const bodyEl = document.body;
  const switchColorBg = getRandomHexColor();
  bodyEl.style.backgroundColor = switchColorBg;
  const bgColor = document.querySelector(".color");
  bgColor.textContent = switchColorBg;
}
const changeColor = document.querySelector(".change-color");
changeColor.addEventListener("click", changeBgColor);
