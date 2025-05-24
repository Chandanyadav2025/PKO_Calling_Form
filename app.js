const scriptURL =
  "https://script.google.com/macros/s/AKfycby6v_2x7C7aUSf0DAC_Y5iyLqsAjP0-wBBtVrhTwhvuX7RcO3q9D5U2nFrB6m9V-GU/exec";

const form = document.forms["contact-form"];

// Set current date when form loads
window.addEventListener('DOMContentLoaded', () => {
  const dateInput = document.getElementById('current_date');
  const today = new Date().toISOString().split('T')[0];
  dateInput.value = today;
});

form.addEventListener("submit", (e) => {
  e.preventDefault();

  fetch(scriptURL, { method: "POST", body: new FormData(form) })
    .then((response) => {
      // No alert on submit
      // Reload immediately, no delay
      window.location.reload();
    })
    .catch((error) => console.error("Error!", error.message));
});
