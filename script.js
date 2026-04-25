const form = document.getElementById('orderForm');
const sourceField = document.getElementById('sourceField');
const submittedAtField = document.getElementById('submittedAtField');
const submitButton = document.getElementById('submitButton');

if (sourceField) {
  sourceField.value = window.location.href;
}

form?.addEventListener('submit', () => {
  if (submittedAtField) {
    submittedAtField.value = new Date().toISOString();
  }

  if (submitButton) {
    submitButton.disabled = true;
    submitButton.textContent = 'Submitting...';
  }
});
