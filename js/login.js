// 1) Sistema de usuarios: 3 roles con 2 cuentas cada uno 
const users = [
    { user: "user1@sportclub.cl", password: "1234", role: "user" },
    { user: "user2@sportclub.cl", password: "1234", role: "user" },
    { user: "coach1@sportclub.cl", password: "1234", role: "coach" },
    { user: "coach2@sportclub.cl", password: "1234", role: "coach" },
    { user: "admin1@sportclub.cl", password: "1234", role: "admin" },
    { user: "admin2@sportclub.cl", password: "1234", role: "admin" }
];

document.getElementById('loginForm').addEventListener('submit', function(event) {
    event.preventDefault(); // Evita que la página se recargue

    // Capturamos los datos del formulario
    const emailInput = document.getElementById('email').value;
    const passwordInput = document.getElementById('password').value;
    const errorMessage = document.getElementById('error-message');

    // 2) Validación: Buscamos si existe el usuario y la contraseña [cite: 10, 11]
    let foundUser = null;
    for (let i = 0; i < users.length; i++) {
        if (users[i].user === emailInput && users[i].password === passwordInput) {
            foundUser = users[i];
            break;
        }
    }

    if (foundUser) {
        // 5) Guardar el usuario logueado en localStorage 
        localStorage.setItem("user", JSON.stringify(foundUser));

        // 3) Redirección: Redirigir a diferentes dashboards según rol [cite: 12, 13]
        if (foundUser.role === "admin") {
            window.location.href = "dashboard-admin.html";
        } else if (foundUser.role === "coach") {
            window.location.href = "dashboard-coach.html";
        } else {
            window.location.href = "dashboard-usuario.html";
        }
    } else {
        // 4) Manejo de errores: Mostrar mensaje en pantalla (NO usar alert) [cite: 14, 15]
        errorMessage.textContent = "Credenciales incorrectas";
        errorMessage.style.color = "red";
    }
});