document.getElementById('register-form').addEventListener('submit', (e) => {
    e.preventDefault();
    const username = document.getElementById('username').value;
    const password = document.getElementById('password').value;
  
    // Guardar los datos en localStorage
    localStorage.setItem(username, password);
    alert('Usuario registrado exitosamente.');
  });
  
  document.getElementById('login-form').addEventListener('submit', (e) => {
    e.preventDefault();
    const username = document.getElementById('login-username').value;
    const password = document.getElementById('login-password').value;
  
    // Verificar los datos
    const storedPassword = localStorage.getItem(username);
    if (storedPassword && storedPassword === password) {
      window.location.href = 'login.html'; // Redirigir a la página de inicio
    } else {
      alert('Usuario o contraseña incorrectos.');
    }
  });