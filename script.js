const form = document.getElementById('orderForm');
const formStatus = document.getElementById('formStatus');

function encodeForm(data) {
  return new URLSearchParams(data).toString();
}

form?.addEventListener('submit', async (event) => {
  event.preventDefault();

  const payload = {
    'form-name': 'tombola-order',
    name: document.getElementById('name').value.trim(),
    whatsapp: document.getElementById('whatsapp').value.trim(),
    email: document.getElementById('email').value.trim(),
    product: 'Tombola Masterclass',
    price_naira: '4500',
    source: window.location.href,
    submitted_at: new Date().toISOString()
  };

  try {
    await fetch('/', {
      method: 'POST',
      headers: { 'Content-Type': 'application/x-www-form-urlencoded' },
      body: encodeForm(payload)
    });

    formStatus.textContent = 'Order request received. Payment instructions and delivery steps will be sent after review.';
    form.reset();
  } catch (error) {
    formStatus.textContent = 'There was a problem submitting your order. Please try again.';
    console.error(error);
  }
});
