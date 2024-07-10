document.addEventListener("DOMContentLoaded", function () {
  // Smooth scroll for anchor links
  document.querySelectorAll('a[href^="#"]').forEach((anchor) => {
    anchor.addEventListener("click", function (e) {
      e.preventDefault();
      document.querySelector(this.getAttribute("href")).scrollIntoView({
        behavior: "smooth",
      });
    });
  });

  // Dynamic year for copyright
  const yearSpan = document.querySelector(".footer-bottom p");
  yearSpan.textContent = `© ${new Date().getFullYear()} Charles Werk. All rights reserved.`;

  // Enhance form validation feedback
  const contactForm = document.querySelector(".contact-form form");
  contactForm.addEventListener("submit", function (event) {
    // Prevent form submission for demonstration
    event.preventDefault();

    // Example of additional validation
    const name = document.getElementById("name");
    const email = document.getElementById("email");
    const message = document.getElementById("message");
    let valid = true;

    [name, email, message].forEach((input) => {
      if (!input.value) {
        valid = false;
        input.style.borderColor = "red";
        // Reset to default on input
        input.addEventListener("input", () => (input.style.borderColor = ""));
      }
    });

    if (valid) {
      console.log("Form is valid and can be submitted.");
      // Here, you could actually submit the form or perform an action
      // contactForm.submit();
    } else {
      console.log("Please fill out all required fields.");
    }
  });
});

function toggleMenu() {
  var hamburger = document.querySelector(".hamburger");
  var mobileNav = document.querySelector(".mobile-nav");

  hamburger.classList.toggle("open");
  mobileNav.classList.toggle("open");
}
