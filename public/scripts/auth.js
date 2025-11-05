import { initializeApp } from "https://www.gstatic.com/firebasejs/12.2.1/firebase-app.js";
import {
  getAuth,
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  sendEmailVerification,
  onAuthStateChanged
} from "https://www.gstatic.com/firebasejs/12.2.1/firebase-auth.js";

const firebaseConfig = {
  apiKey: "AIzaSyD0ppHcnweMHepAgsn25FoCiU7UuoYQ-IQ",
  authDomain: "monara1.firebaseapp.com",
  databaseURL: "https://monara1-default-rtdb.asia-southeast1.firebasedatabase.app",
  projectId: "monara1",
  storageBucket: "monara1.firebasestorage.app",
  messagingSenderId: "734743640311",
  appId: "1:734743640311:web:772e09ef0b827a532c7bf2",
  measurementId: "G-L5TC4YGNYS"
};

const app = initializeApp(firebaseConfig);
const auth = getAuth(app);

// Toggle between login and signup
const loginForm = document.getElementById("loginForm");
const signupForm = document.getElementById("signupForm");
const showLogin = document.getElementById("showLogin");
const showSignup = document.getElementById("showSignup");

showLogin.addEventListener("click", () => {
  signupForm.style.display = "none";
  loginForm.style.display = "block";
  showLogin.classList.add("active");
  showSignup.classList.remove("active");
});

showSignup.addEventListener("click", () => {
  loginForm.style.display = "none";
  signupForm.style.display = "block";
  showSignup.classList.add("active");
  showLogin.classList.remove("active");
});

// Sign up new user
signupForm.addEventListener("submit", async (e) => {
  e.preventDefault();
  const email = document.getElementById("signupEmail").value.trim();
  const password = document.getElementById("signupPassword").value.trim();

  try {
    const userCredential = await createUserWithEmailAndPassword(auth, email, password);
    await sendEmailVerification(userCredential.user);

    const hiddenEmail = email.replace(/^(.{3}).*(@.*)$/, "$1***$2");
    localStorage.setItem("verifyEmail", hiddenEmail);

    window.location.href = "verify.html";
  } catch (error) {
    alert("Error: " + error.message);
  }
});

// Login existing user
loginForm.addEventListener("submit", async (e) => {
  e.preventDefault();
  const email = document.getElementById("loginEmail").value.trim();
  const password = document.getElementById("loginPassword").value.trim();

  try {
    await signInWithEmailAndPassword(auth, email, password);
    window.location.href = "account.html";
  } catch (error) {
    alert("Login failed: " + error.message);
  }
});

// Auto redirect if logged in
onAuthStateChanged(auth, (user) => {
  if (user && user.emailVerified) {
    window.location.href = "account.html";
  }
});
