// 6) Mostrar el nombre del usuario en el dashboard 
// Recuperamos el dato guardado [cite: 19]
const loggedUser = JSON.parse(localStorage.getItem("user"));

if (loggedUser) {
    // Se muestra el correo en el elemento con id 'userName'
    document.getElementById('userName').textContent = loggedUser.user;
} else {
    // Si intentan entrar al dashboard sin loguearse, los devuelve al login
    window.location.href = "index.html";
}