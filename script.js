const form = document.getElementById('orderForm');
const formStatus = document.getElementById('formStatus');

form?.addEventListener('submit', async (event) => {
  event.preventDefault();

  const payload = {
    name: document.getElementById('name').value.trim(),
    whatsapp: document.getElementById('whatsapp').value.trim(),
    email: document.getElementById('email').value.trim(),
    product: 'Tombola Masterclass',
    price_naira: 4500,
    source: window.location.href,
    submitted_at: new Date().toISOString()
  };

  formStatus.textContent = 'Your order request has been noted. Payment instructions and delivery steps will follow online.';
  form.reset();

  console.log('Order request payload', payload);
});
