const decBtn = document.querySelector('button[data-action="decrement"]');
const incBtn = document.querySelector('button[data-action="increment"]');
const value = document.querySelector("#value");
let counterValue = 0;
const decrementFunction = () => {
  counterValue -= 1;
  value.textContent = counterValue;
};
const incrementFunction = () => {
  counterValue += 1;
  value.textContent = counterValue;
};
decBtn.addEventListener("click", decrementFunction);
incBtn.addEventListener("click", incrementFunction);
