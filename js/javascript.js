// Registration See password
const togglePassword = document.querySelector("#toggle-Password");
const password = document.querySelector("#password");

togglePassword.addEventListener("click", function () {

  // toggle the type attribute
  const type = password.getAttribute("type") === "password" ? "text" : "password";
  password.setAttribute("type", type);
  // toggle the eye icon
  this.classList.toggle('fa-eye-slash');
  this.classList.toggle('fa-eye');
});

const togglePassword2 = document.querySelector("#toggle-Password2");
const rePassword = document.querySelector("#rePassword");

togglePassword2.addEventListener("click", function () {

  // toggle the type attribute
  const type = rePassword.getAttribute("type") === "password" ? "text" : "password";
  rePassword.setAttribute("type", type);
  // toggle the eye icon
  this.classList.toggle('fa-eye-slash');
  this.classList.toggle('fa-eye');

});