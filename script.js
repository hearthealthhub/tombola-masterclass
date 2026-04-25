const form = document.getElementById('orderForm');
const sourceField = document.getElementById('sourceField');
const submittedAtField = document.getElementById('submittedAtField');
const submitButton = document.getElementById('submitButton');
const formStatus = document.getElementById('formStatus');

if (sourceField) {
  sourceField.value = window.location.href;
}

form?.addEventListener('submit', async (event) => {
  event.preventDefault();

  if (submittedAtField) {
    submittedAtField.value = new Date().toISOString();
  }

  if (submitButton) {
    submitButton.disabled = true;
    submitButton.textContent = 'Submitting...';
  }

  if (formStatus) {
    formStatus.textContent = 'Submitting your order request...';
    formStatus.className = 'form-status';
  }

  try {
    const response = await fetch('/', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/x-www-form-urlencoded'
      },
      body: new URLSearchParams(new FormData(form)).toString()
    });

    if (!response.ok) {
      throw new Error('Submission failed');
    }

    window.location.href = '/thank-you';
  } catch (error) {
    if (formStatus) {
      formStatus.textContent = 'Something went wrong while submitting. Please try again.';
      formStatus.className = 'form-status is-error';
    }

    if (submitButton) {
      submitButton.disabled = false;
      submitButton.textContent = 'Submit order request';
    }
  }
});
