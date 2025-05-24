function syncWhatsappWithMobile() {
  const mobileInput = document.querySelector('input[name="Mobile_no"]');
  const whatsappInput = document.querySelector('input[name="Whatsapp_no"]');
  const sameAsWhatsappRadios = document.getElementsByName(
    "Same_as_whatsapp_no."
  );

  sameAsWhatsappRadios.forEach((radio) => {
    radio.addEventListener("change", function () {
      if (this.value === "Yes" && this.checked) {
        whatsappInput.value = mobileInput.value;
      } else if (this.value === "No" && this.checked) {
        whatsappInput.value = "";
      }
    });
  });

  mobileInput.addEventListener("input", function () {
    const yesRadio = Array.from(sameAsWhatsappRadios).find(
      (r) => r.value === "Yes"
    );
    if (yesRadio && yesRadio.checked) {
      whatsappInput.value = mobileInput.value;
    }
  });
}

// Call the function after DOM is loaded
window.addEventListener("DOMContentLoaded", syncWhatsappWithMobile);
