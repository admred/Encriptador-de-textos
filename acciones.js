/* thank to: https://www.w3schools.com/jsref/prop_style_display.asp */

/* Muestra el area del texto traducido o lo oculta */
function mostrarTraduccion(onoff) {
    const traduccionArea=document.querySelector(".traduccion-area");
    const mensajeArea=document.querySelector(".mensaje-area");

    if(onoff) {
        traduccionArea.style.display='flex';
        mensajeArea.style.display='none';
        return true;
    }

    traduccionArea.style.display='none';
    mensajeArea.style.display='flex';
    return false;
}

/* Des/Encripta segun el boton */
function procesar(boton) {
    const diccionario={'e':'enter','i':'imes','a':'ai','o':'ober','u':'ufat'};
    const entrada=document.querySelector(".texto-entrada");
    const salida=document.querySelector(".texto-salida");

    let buffer=entrada.value;
    if( !mostrarTraduccion(buffer) ) {
        return; /* no hacer nada */
    }

    for(let e in diccionario){
        switch (boton.innerText) {
            case 'Encriptar':
                buffer=buffer.replaceAll(e,diccionario[e]);
                break;
            case 'Desencriptar':
                buffer=buffer.replaceAll(diccionario[e],e);
                break;
            default:
                /* */
        }
    }
    salida.value=buffer;
    mostrarTraduccion(true);
}

/* boton copiar */
function copiar(){
     const salida=document.querySelector(".texto-salida");
     navigator.clipboard.writeText(salida.value);
}
