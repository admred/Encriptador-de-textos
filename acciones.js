
/* https://www.w3schools.com/jsref/prop_style_display.asp */

const diccionario={'e':'enter','i':'imes','a':'ai','o':'ober','u':'ufat'};

function encriptar(event){
    const entrada=document.getElementById("texto-entrada");
    const salida=document.getElementById("texto-salida");

    let buffer=entrada.value;
    if( buffer == false){
        document.getElementById("traduccion-area").style.display = "none";
        document.getElementById("mensaje-area").style.display = "block";
        entrata.placeholder='Ingrese el texto aquí';
        return;
    }

    for(let e in diccionario){
         buffer=buffer.replace(e,diccionario[e]);
     }
     salida.value=buffer;
     document.getElementById("traduccion-area").style.display = "block";
     document.getElementById("mensaje-area").style.display = "none";


}

function desencriptar(event){
    const entrada=document.getElementById("texto-entrada");
    const salida=document.getElementById("texto-salida");


    let buffer=entrada.value;

    if( buffer == false){
        document.getElementById("traduccion-area").style.display = "none";
        document.getElementById("mensaje-area").style.display = "block";
        entrata.placeholder='Ingrese el texto aquí';
        return;
    }

    for(let e in diccionario){
         buffer=buffer.replace(diccionario[e],e);
     }
     salida.value=buffer;
     document.getElementById("traduccion-area").style.display = "block";
     document.getElementById("mensaje-area").style.display = "none";
}

function copiar(event){
     /* document.execCommand('copy'); */
     const salida=document.getElementById("texto-salida");
     navigator.clipboard.writeText(salida.value);
}


