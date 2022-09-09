const refCategories = document.querySelector("#categories");
console.log("Number of categories:", refCategories.children.length);
const array = refCategories.children;
for (let index = 0; index < array.length; index += 1) {
  console.log("Category:", array[index].querySelector("h2").textContent);
  console.log("Elements:", array[index].querySelector("ul").children.length);
}
