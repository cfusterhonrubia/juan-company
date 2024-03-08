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

    if (!/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(email)) {
        emailError.textContent = "El email no tiene un formato válido";
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
  
//Captar los resultados de la valoracion y publicarlos
function resultados(event) {
    event.preventDefault(); // Detener la acción por defecto del envío del formulario
  
    // Obtener los valores de los elementos del formulario
    const radiosSatisfaccion = document.getElementsByName("satisfaccion");
    const radiosRecomendacion = document.getElementsByName("recomendacion");
    let satisfaccion, recomendacion;

    // Iterar sobre los radios de satisfacción para encontrar el marcado
    for (let i = 0; i < radiosSatisfaccion.length; i++) {
        if (radiosSatisfaccion[i].checked) {
            satisfaccion = parseInt(radiosSatisfaccion[i].value);
            break;
        }
    }

    // Iterar sobre los radios de recomendación para encontrar el marcado
    for (let i = 0; i < radiosRecomendacion.length; i++) {
        if (radiosRecomendacion[i].checked) {
            recomendacion = parseInt(radiosRecomendacion[i].value);
            break;
        }
    }

    const calidad = parseInt(document.getElementById("calidad").value);
  
    // Calcular los promedios
    var weightedSum = (satisfaccion * 1) + (calidad * 1) + (recomendacion * 1); // Utilizamos 1 como peso mínimo
    var totalWeight = 15; // Suma de los pesos mínimos posibles (1+1+1=3)
    var promedio = (weightedSum / totalWeight) * 5;
    alert("Muchas gracias por compartir tu opinion")
    // Mostrar los resultados
    const resultadosElement = document.getElementById("resultados");
    resultadosElement.innerHTML = `
      <h1>Resultados del cuestionario</h1>
      <p>Satisfacción: <strong>${promedio.toFixed(2)} sobre 5</strong></p>
    `;
  
    return false; // Retornar false para prevenir el envío del formulario
}
//Esta funcion la asociaremos en un boton de las paginas para doder aplicar diferentes estilos y cabiar colores
function cambiarColor() {
    document.body.classList.toggle("estilo-claro");
    document.body.classList.toggle("estilo-oscuro");
  }