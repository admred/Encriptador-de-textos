
/* https://www.w3schools.com/jsref/prop_style_display.asp */

const diccionario={'e':'enter','i':'imes','a':'ai','o':'ober','u':'ufat'};

function encriptar(event){
    const entrada=document.querySelector(".texto-entrada");
    const salida=document.querySelector(".texto-salida");

    let buffer=entrada.value;
    if( buffer == false){
        document.querySelector(".traduccion-area").style.display = "none";
        document.querySelector(".mensaje-area").style.display = "flex";
        entrata.placeholder='Ingrese el texto aquí';
        return;
    }

    for(let e in diccionario){
         buffer=buffer.replaceAll(e,diccionario[e]);
     }
     salida.value=buffer;
     document.querySelector(".traduccion-area").style.display = "flex";
     document.querySelector(".mensaje-area").style.display = "none";


}

function desencriptar(event){
    const entrada=document.querySelector(".texto-entrada");
    const salida=document.querySelector(".texto-salida");


    let buffer=entrada.value;

    if( buffer == false){
        document.querySelector(".traduccion-area").style.display = "none";
        document.querySelector(".mensaje-area").style.display = "flex";
        entrata.placeholder='Ingrese el texto aquí';
        return;
    }

    for(let e in diccionario){
         buffer=buffer.replaceAll(diccionario[e],e);
     }
     salida.value=buffer;
     document.querySelector(".traduccion-area").style.display = "flex";
     document.querySelector(".mensaje-area").style.display = "none";
}

function copiar(event){
     /* document.execCommand('copy'); */
     const salida=document.querySelector(".texto-salida");
     navigator.clipboard.writeText(salida.value);
}


