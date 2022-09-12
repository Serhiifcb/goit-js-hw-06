const refInput = document.querySelector("#controls > input");
const refCreateBtn = document.querySelector("button[data-create]");
const refDestroyBtn = document.querySelector("button[data-destroy]");
const refContainer = document.querySelector("#boxes");
let divNum;
refInput.addEventListener("blur", (event) => {
  divNum = event.currentTarget.value;
  console.log("Number of div sections:", divNum);
});
function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215).toString(16)}`;
}
const createBoxes = (amount) => {
  destroyBoxes();
  amount = divNum;
  let height = 30;
  let width = 30;
  for (let index = 1; index <= amount; index++) {
    height += 10;
    width += 10;
    let divEl = document.createElement("div");
    divEl.style.display = "flex";
    divEl.style.height = height + "px";
    divEl.style.width = width + "px";
    divEl.style.marginTop = "5px";
    divEl.style.backgroundColor = getRandomHexColor();
    refContainer.append(divEl);
  }
};
const destroyBoxes = () => {
  refContainer.innerHTML = "";
};
refCreateBtn.addEventListener("click", createBoxes);
refDestroyBtn.addEventListener("click", destroyBoxes);
