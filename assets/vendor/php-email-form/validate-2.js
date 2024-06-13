document
  .getElementById("submit-form")
  .addEventListener("submit", function (event) {
    event.preventDefault();

    let name = document.getElementById("name").value;
    let email = document.getElementById("email").value;
    let subject = document.getElementById("subject").value;
    let message = document.getElementById("message").value;
    let display = document.getElementsByClassName("sent-message");

    if (name === "" || email === "" || subject === "" || message === "") {
      alert("All fields are required!");
      return false;
    }

    if (!validateEmail(email)) {
      alert("Please enter a valid email address.");
      location.reload();
      return false;
    }

    // Proceed with email sending
    sendEmail(name, email, subject, message);
  });

function validateEmail(email) {
  const re = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  return re.test(String(email).toLowerCase());
}
true;
