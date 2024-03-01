function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215)
    .toString(16)
    .padStart(6, 0)}`;
}

function createBoxes(amount) {
  const boxesContainer = document.getElementById("boxes");

  boxesContainer.innerHTML = "";
  for (let i = 0; i < amount; i++) {
    const box = document.createElement("div");
    box.classList.add("box");
    // Змінюємо розміри кожного наступного боксу
    box.style.width = `${30 + i * 10}px`;
    box.style.height = `${30 + i * 10}px`;
    // змінюємо колір боксу
    box.style.backgroundColor = getRandomHexColor();
    // Додаємо контейнеру #boxes дочірній елемент box
    boxesContainer.appendChild(box);
  }
}

function destroyBoxes() {
  const boxesContainer = document.getElementById("boxes");
  boxesContainer.innerHTML = "";
}

document.querySelector("[data-create]").addEventListener("click", function () {
  const input = document.querySelector("input");
  const amount = input.value;

  if (amount >= 1 && amount <= 100) {
    createBoxes(amount);
    input.value = "";
  } else return;
});

document
  .querySelector("[data-destroy]")
  .addEventListener("click", destroyBoxes);
