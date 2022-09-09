const ingredients = [
  "Potatoes",
  "Mushrooms",
  "Garlic",
  "Tomatos",
  "Herbs",
  "Condiments",
];

const refIngredients = document.querySelector("#ingredients");
const elements = ingredients.map((element) => {
  const liEl = document.createElement("li");
  liEl.classList.add("item");
  liEl.textContent = element;
  return liEl;
});
refIngredients.append(...elements);
