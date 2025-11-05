import { initializeApp } from "https://www.gstatic.com/firebasejs/12.2.1/firebase-app.js";
import { getAuth, onAuthStateChanged, signOut } from "https://www.gstatic.com/firebasejs/12.2.1/firebase-auth.js";

const firebaseConfig = {
  apiKey: "AIzaSyD0ppHcnweMHepAgsn25FoCiU7UuoYQ-IQ",
  authDomain: "monara1.firebaseapp.com",
  projectId: "monara1",
  databaseURL: "https://monara1-default-rtdb.asia-southeast1.firebasedatabase.app",
  storageBucket: "monara1.firebasestorage.app",
  messagingSenderId: "734743640311",
  appId: "1:734743640311:web:772e09ef0b827a532c7bf2",
  measurementId: "G-L5TC4YGNYS"
};

const app = initializeApp(firebaseConfig);
const auth = getAuth(app);

// Load navbar
document.addEventListener("DOMContentLoaded", async () => {
  try {
    const res = await fetch("navbar.html");
    const data = await res.text();
    document.body.insertAdjacentHTML("afterbegin", data);

    // Wait until navbar is inserted
    setTimeout(() => {
      const authLink = document.getElementById("authLink");

      onAuthStateChanged(auth, (user) => {
        if (authLink) {
          if (user) {
            authLink.textContent = "My Account";
            authLink.href = "account.html";
          } else {
            authLink.textContent = "Login / Sign Up";
            authLink.href = "auth.html";
          }
        }
      });
    }, 300);
  } catch (err) {
    console.error("Navbar load error:", err);
  }
});
