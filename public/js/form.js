const showLoginBtn = document.getElementById("showLogin");
const showSignupBtn = document.getElementById("showSignup");
const loginForm = document.getElementById("loginForm");
const signupForm = document.getElementById("signupForm");

showLoginBtn?.addEventListener("click", () => {
  loginForm.style.display = "block";
  signupForm.style.display = "none";
  showLoginBtn.classList.add("active");
  showSignupBtn.classList.remove("active");
});

showSignupBtn?.addEventListener("click", () => {
  loginForm.style.display = "none";
  signupForm.style.display = "block";
  showSignupBtn.classList.add("active");
  showLoginBtn.classList.remove("active");
});