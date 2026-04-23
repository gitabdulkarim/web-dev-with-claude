// ================= BUTTON INTERACTION =================
function showMessage() {
  alert("Thanks for your interest! Our team will help you build a modern AI-powered website.");
}


// ================= CONTACT FORM HANDLER =================
document.addEventListener("DOMContentLoaded", function () {

  const form = document.getElementById("contactForm");

  if (form) {
    form.addEventListener("submit", function (e) {
      e.preventDefault();

      const name = document.getElementById("name").value.trim();
      const email = document.getElementById("email").value.trim();
      const message = document.getElementById("message").value.trim();

      // Basic validation
      if (!name || !email || !message) {
        alert("Please fill all fields before submitting.");
        return;
      }

      // Fake submission (for demo purpose)
      document.getElementById("responseMsg").innerText =
        "Your message has been sent successfully! We will contact you soon.";

      form.reset();
    });
  }

});
