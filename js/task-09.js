const refBody = document.querySelector("body");
const refBtnChange = document.querySelector(".change-color");
const refSpan = document.querySelector(".color");
function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215).toString(16)}`;
}
refBtnChange.addEventListener("click", (event) => {
  refBody.style.backgroundColor = getRandomHexColor();
  refSpan.innerHTML = getRandomHexColor();
});
