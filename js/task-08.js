const form = document.querySelector(".login-form");
form.addEventListener("submit", handleSubmit);
function handleSubmit(event) {
  event.preventDefault();
  const inputElements = event.currentTarget.elements;
  const userData = {
    email: inputElements.email.value,
    password: inputElements.password.value,
  };
  if (userData.email === "" || userData.password === "") {
    return window.alert("!!! Please fill in all the fields !!!");
  }
  console.log(userData);
  event.currentTarget.reset();
}
