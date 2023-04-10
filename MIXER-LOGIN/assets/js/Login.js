// Creacion de datos realesen variables
const userCorrecrt = "somosgrupo5";
const passwordCorrect ="grupo5";

// creo la funcion para la validacion de Datos
function entrar (){
    // para datos del DOM (HTML) exatamente el ID que le pusimos al user y password declaradas en variables  
    var user =document.getElementById("usuarioPrincipal").value;
    var pass =document.getElementById("passPrincipal").value;
    // condicional para validacion de usuario y password  
    if (user === userCorrecrt && pass === passwordCorrect) {
        window.location.href = "/assets/pages/index.html";
        /* para guadar en el localStorage */
        localStorage.setItem("usuarioPrincipal", user);
        localStorage.setItem("passPrincipal", pass);
    }else{

        alert("password/user incorrectos intenta de nuevo")
        /* limpiar valor del input */
        document.getElementById("passPrincipal").value ="";
        document.getElementById("passPrincipal").value = "";
    }
}