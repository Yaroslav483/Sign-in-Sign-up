document.getElementById('signInForm').addEventListener('submit', async (e) => {
  e.preventDefault();

  const email = document.getElementById('email').value.trim();
  const password = document.getElementById('password').value.trim();

  if (!email || !password) {
    alert('Будь ласка, заповніть усі поля!');
    return;
  }

  try {
    const response = await fetch('http://localhost:3000/sign-in', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({ email, password })
    });

    const data = await response.json();

    if (response.ok) {
      localStorage.setItem('token', data.token);
      alert('Вхід успішний!');
   
    } else {
      alert(data.message);
    }
  } catch (error) {
    console.error('Помилка при авторизації:', error);
    alert('Сталася помилка. Спробуйте пізніше.');
  }
});
