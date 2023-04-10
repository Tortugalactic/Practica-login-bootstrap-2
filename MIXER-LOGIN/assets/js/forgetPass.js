// para datos del DOM (HTML) exatamente el ID que le pusimos al email 
var correo =document.getElementById('email'); 

function recuperarPass(){
    // el querisSelector va a seleccionar el primer elemento que le estamos pasando (div)
    let elemento = document.querySelector('div');
    /* condicional if */ /* length la longitud de nombre */
  /* el metodo trim quitar todos los espacios con la igualdad vacia  */
    if(correo.value.length < 5 ||correo.value.trim() == '' ){
       /*  limpiar input */
       elemento.lastElementChild.innerHTML = 'correo no valido';
       document.getElementById('email').value = '';
    }else{
        /* el ultimo elemento hijo del div se le modifique el html  */
        elemento.lastElementChild.innerHTML = 'Se envio a su correo un mesaje con su password'
       /*  limpiar input */
       document.getElementById('email').value = ''; 
       localStorage.setItem("email", correo);
    }
}
