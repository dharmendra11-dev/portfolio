const readMoreBtn = document.querySelector(".read-more-btn");
const textContent = document.querySelector(".text-content");

readMoreBtn.addEventListener("click", function () {
  textContent.classList.toggle("expanded");
  readMoreBtn.textContent = textContent.classList.contains("expanded")
    ? "Read Less"
    : "Read More";
});

// Optional: Mobile nav toggle
const menuToggle = document.querySelector(".menu-toggle");
const navLinks = document.querySelector(".nav-links");

menuToggle.addEventListener("click", () => {
  navLinks.classList.toggle("active");
});
