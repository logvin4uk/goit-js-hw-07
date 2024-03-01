document
  .querySelector(".login-form")
  .addEventListener("submit", function (event) {
    event.preventDefault();
    const user = {};

    // Отримання всіх полів форми
    const formElements = this.elements;
    // Ітерація через елементи форми та додавання їх значень до об'єкта
    for (let i = 0; i < formElements.length; i++) {
      var element = formElements[i];
      // Перевірка, чи це поле вводу і чи воно не є кнопкою "submit"
      if (element.tagName === "INPUT" && element.type !== "submit") {
        if (element.value.trim() === "") {
          alert("All form fields must be filled in");
          return;
        }
        user[element.name] = element.value;
      }
    }

    // Вивід об'єкта в консоль
    console.log(user);
    this.reset();
  });
