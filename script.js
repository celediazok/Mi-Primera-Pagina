function showAlert (){
    alert("Hola esta es una alerta desde Javascript") /*Crea una ventana de alerta que publica el mensaje que ponemos entre comillas y tiene un boton de aceptar. Hasta que no aparezca aceptar , se bloquea la pagina*/
}

/*Para acceder al formulario vamos a crear una variable constante*/
const form = document.getElementById("myForm")

/*Para validar el mail- que sea un mail valido*/
function validateEmail(email) {
    const regex= /^[^\s@]+@[^\s@]+\.[^\s@]{2,7}$/
    return regex.test(email)
}
function validateForm() {
    const input= document.getElementById("Email")
    const inputValue= input.value

    if (!validateEmail(inputValue)) {
        alert('Por favor ingrese un correo electronico valido')
    } else{
        alert('Correo electronico enviado correctamente')
    }
}

if (form) {
    form.addEventListener("submit", function(lala) {
        lala.preventDefault()
        validateForm();
    })
}
document.querySelector("button.button-menu-toggle")
.addEventListener("click", function() {
    document.querySelector(".nav-links").classList.toggle("nav-links-responsive")
}
)