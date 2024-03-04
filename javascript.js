//Validacion del formulario
function validarFormulario() {
    var name = document.getElementById("name").value;
    var apellidos = document.getElementById("apellidos").value;
    var email = document.getElementById("email").value;
    var terminos = document.getElementById("terminosCheckbox").checked;
    var texto = document.getElementById("texto").value;

    var nameError = document.getElementById("nameError");
    var apellidosError = document.getElementById("apellidosError");
    var emailError = document.getElementById("emailError");
    var terminosError = document.getElementById("terminosError");
    var textoError = document.getElementById("textoError");

    if (nameError) nameError.textContent = "";
    if (apellidosError) apellidosError.textContent = "";
    if (emailError) emailError.textContent = "";
    if (terminosError) terminosError.textContent = "";
    if (textoError) textoError.textContent = "";

    if (name === "") {
        if (nameError) nameError.textContent = "Debe ingresar su nombre";
        alert("no ha introducido su nombre")
        return false;
    }

    if (apellidos === "") {
        if (apellidosError) apellidosError.textContent = "Debe ingresar sus apellidos";
        alert("no ha introducido sus apellidos")
        return false;
    }

    if (email === "") {
        if (emailError) emailError.textContent = "Debe ingresar su correo electrónico";
        alert("no ha introducido su mail")
        return false;
    }

    if (!terminos) {
        if (terminosError) terminosError.textContent = "Debe aceptar los términos y condiciones";
        alert("no ha aceptado nuestros terminos")
        return false;
    }

    if (texto === "") {
        if (textoError) textoError.textContent = "Debe ingresar su consulta";
        alert("no ha ingresado ninguna consulta")
        return false;
    }

    // Limpiar los campos del formulario si todo está correcto
    document.getElementById("name").value = "";
    document.getElementById("apellidos").value = "";
    document.getElementById("email").value = "";
    document.getElementById("terminosCheckbox").checked = false;
    document.getElementById("texto").value = "";

    return true;
}

//Ocultar los productos en la pagina de portatiles

function mostrarOcultar() {
    const productoOculto = document.getElementsByClassName("oculto");
    for (let i = 0; i < productoOculto.length; i++) {
      productoOculto[i].classList.toggle("visible");
    }
  }
  
  