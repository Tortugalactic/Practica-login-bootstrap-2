// ********REGISTRO ********

// para  extraer datos del DOM (HTML) exatamente el ID que le pusimos al input.
const nombre = document.getElementById('myname')
const apellidos = document.getElementById('surname')
const correo = document.getElementById('email')
const celular = document.getElementById('mobile')
const contrasenia = document.getElementById('password')
const contrasenia2 = document.getElementById('repeatPassword')
const terminosYcondiciones = document.getElementById('termsAndConditions')
const form = document.getElementById('form')

// querySelectorAll nos devuelve una coleccion de elementos que cumplan con los parametros dados
const listInputs = document.querySelectorAll('.form-input')

// evento formulario
//* al formulario completo le agregamos un evento de escucha y le agregamos un tipo submit y un evento
form.addEventListener('submit', e => {
  // evento por defecto
  /*  lo a enviado y lo a resetiado  */
  e.preventDefault()

  //para quitar mensaje de error cuando aparece

  /* vamos a ir iterando c/d elemento  / es como  un bucle    y le decimos*/

  listInputs.forEach(element => {
    /* su ultimo hijo lo volvemos vacio */
    element.lastElementChild.innerHTML = ''
  })

  /* cada vez que le demos enviar a la lista de lo que va hacer es que toca la 
  lista de inputs su ultimo hijo se borre su mensaje */

  //callback funcion

  /* ese valor lo tenemos que colocar en un let */ //esa condcion solo le pertenece a validacionform()
  /*el valor que retorne de condicion validacionform lo tenemos aqui */
  let condicion = validacionForm()
  /*si condicion es true */
  if (condicion) {
    //condicon === true
    alert('Registro valido ')
    enviarFormulario()
  } else {
    alert('Registro invalido ')
  }
})

//  funcion para validar datos del formulario
function validacionForm() {
  /*para que envie solo cuando la condicion sea verdadera (correcto los datos*/
  /*si la variable condicion es verdadera -  el scope de let esta limitado en la funcion da validacion*/
  let condicion = true
  // NOMBRE

  // condicional if - length para saber la longitud del valor de la variable
  // el metodo trim quitamos todos los espacios/saltos de linea con la asignacion de comillas vacias

  /* si quita los espacios y no encuentra nada  va a votar error */
  if (nombre.value.length < 1 || nombre.value.trim() == '') {
    // el queryselector va a buscar el primer elemento que le estamos pasando
    let nombreClass = document.querySelector('.myNombre')
    // va a mofificar el html del ultimo elemento hijo
    nombreClass.lastElementChild.innerHTML = 'Nombre no valido'
    /* si es que muestra el mensaje de error o esta mal va hacer falso */
    condicion = false
  } else {
    localStorage.setItem('myname', nombre.value)
    condicion = true
  }

  // APELLIDO
  if (apellidos.value.length < 1 || apellidos.value.trim() == '') {
    let apellidoClass = document.querySelector('.myApellido')
    apellidoClass.lastElementChild.innerHTML = 'Apellido no valido'
    condicion = false
  } else {
    localStorage.setItem('surname', apellidos.value)
    condicion = true
  }

  // EMAIL
  if (correo.value.length < 1 || correo.value.trim() == '') {
    let emailClass = document.querySelector('.myEmail')
    emailClass.lastElementChild.innerHTML = 'Email no valido'
    condicion = false
  } else {
    localStorage.setItem('email', correo.value)
    condicion = true
  }

  //TELEFONO
  if (celular.value.length != 10 || celular.value.trim() == '') {
    let telefonoClass = document.querySelector('.myTelefono')
    telefonoClass.lastElementChild.innerHTML = 'Telefono no valido'
    condicion = false
  } else {
    localStorage.setItem('mobile', celular.value)
    condicion = true
  }

  // PASSWORD
  if (contrasenia.value.length < 1 || contrasenia.value.trim() == '') {
    let passwordClass = document.querySelector('.myPassword')
    passwordClass.lastElementChild.innerHTML = 'Password no valido'
    condicion = false
  } else {
    localStorage.setItem('password', contrasenia.value)
    condicion = true
  }

  // PASSWORD CONFIRM
  if (contrasenia2.value != contrasenia.value) {
    let password2Class = document.querySelector('.myRepeatPassword')
    password2Class.lastElementChild.innerHTML = 'No coincide el password'
    condicion = false
  } else {
    localStorage.setItem('repeatPassword', contrasenia2.value)
    condicion = true
  }

  //TERMINOS Y CONDICONES

  //Lo niego para que cuando no tenga el atributo checked coloque el mensaje
  let termsClass = document.querySelector('.myTermsAndConditions')
  if (!terminosYcondiciones.checked) {
    termsClass.lastElementChild.innerHTML = '!acepte *'
    condicion = false
  } else {
    termsClass.lastElementChild.innerHTML = ''
  }
  /* y tenemos que retornar la condicion */
  return condicion
}

// Funcion para enviar formulario
function enviarFormulario() {
  //window.location sirve para redirigir al navegador a una nueva pagina
  window.location.href = '/assets/pages/index.html'
}
