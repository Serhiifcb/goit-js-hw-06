const inputRange = document.querySelector("#font-size-control");
const textOutput = document.querySelector("#text");
inputRange.addEventListener("input", (event) => {
  textOutput.style.fontSize = event.currentTarget.value + "px";
});
