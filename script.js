// script.js

// ====================
// Part 1: Event Handling - Theme Toggle
// ====================
document.getElementById("themeToggle").addEventListener("click", function() {
  document.body.classList.toggle("dark-mode");
});

// ====================
// Part 2: Interactive Elements
// ====================

// Feature 1: Click Counter
let counter = 0;
document.getElementById("counterBtn").addEventListener("click", function() {
  counter++;
  document.getElementById("count").textContent = counter;
});

// Feature 2: Collapsible FAQ Section
const faqToggle = document.querySelector(".faq-toggle");
const faqAnswer = document.querySelector(".faq-answer");

faqToggle.addEventListener("click", function() {
  faqAnswer.classList.toggle("hidden");
});

// ====================
// Part 3: Custom Form Validation
// ====================
document.getElementById("signupForm").addEventListener("submit", function(event) {
  event.preventDefault(); // prevent form from submitting

  const name = document.getElementById("name").value.trim();
  const email = document.getElementById("email").value.trim();
  const password = document.getElementById("password").value.trim();
  const message = document.getElementById("formMessage");

  // Simple regex for email validation
  const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

  if (name === "" || email === "" || password === "") {
    message.textContent = "❌ All fields are required.";
    message.style.color = "red";
  } else if (!emailPattern.test(email)) {
    message.textContent = "❌ Please enter a valid email address.";
    message.style.color = "red";
  } else if (password.length < 6) {
    message.textContent = "❌ Password must be at least 6 characters.";
    message.style.color = "red";
  } else {
    message.textContent = "✅ Form submitted successfully!";
    message.style.color = "green";
  }
});
