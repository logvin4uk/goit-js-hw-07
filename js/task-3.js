const nameInput = document.getElementById("name-input");
const nameOutput = document.getElementById("name-output");

nameInput.addEventListener("input", checkName);

function checkName() {
  const inputedName = nameInput.value.trim();
  if (inputedName !== "") {
    nameOutput.textContent = inputedName;
  } else {
    nameOutput.textContent = "Anonymous";
  }
}
