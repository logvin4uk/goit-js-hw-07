const totalCategories = document.querySelectorAll(".item");
console.log("Number of categories: ", totalCategories.length);
totalCategories.forEach((category) => {
  console.log("Category :", category.children[0].textContent);
  console.log("Elements ", category.children[1].children.length);
});
