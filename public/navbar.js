// scripts/navbar.js
document.addEventListener("DOMContentLoaded", () => {
  fetch("navbar.html")
    .then(response => {
      if (!response.ok) throw new Error("Navbar not found");
      return response.text();
    })
    .then(data => {
      // Insert the navbar at the top of the body
      document.body.insertAdjacentHTML("afterbegin", data);

      // Highlight the current active page
      const currentPage = location.pathname.split("/").pop();
      document.querySelectorAll(".nav-links a").forEach(link => {
        if (link.getAttribute("href") === currentPage) {
          link.classList.add("active");
        }
      });
    })
    .catch(err => console.error("Error loading navbar:", err));
});
