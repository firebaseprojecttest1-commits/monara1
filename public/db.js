// Import Firebase SDKs
import { initializeApp } from "https://www.gstatic.com/firebasejs/12.2.1/firebase-app.js";
import { getDatabase, ref, push, set } from "https://www.gstatic.com/firebasejs/12.2.1/firebase-database.js";

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

// ✅ Initialize Firebase
const app = initializeApp(firebaseConfig);
const db = getDatabase(app);

// ✅ Form submit event
document.getElementById("contactForm").addEventListener("submit", function (e) {
  e.preventDefault();

  // Get values
  const name = document.getElementById("name").value.trim();
  const emailid = document.getElementById("emailid").value.trim();
  const msgContent = document.getElementById("msgContent").value.trim();

  if (!name || !emailid || !msgContent) {
    alert("Please fill out all fields.");
    return;
  }

  // Reference and push data
  const contactsRef = ref(db, "contacts");
  const newContactRef = push(contactsRef);

  set(newContactRef, {
    name: name,
    email: emailid,
    message: msgContent,
    timestamp: new Date().toISOString(),
  })
    .then(() => {
      document.querySelector(".alert").style.display = "block";
      setTimeout(() => {
        document.querySelector(".alert").style.display = "none";
      }, 3000);
      document.getElementById("contactForm").reset();
    })
    .catch((error) => {
      alert("Error sending data: " + error.message);
      console.error(error);
    });
});
