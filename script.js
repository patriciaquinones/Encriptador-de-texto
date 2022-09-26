let texto = document.getElementById("resultado");
let ingresado = document.getElementById("textoIngresado");
var letras;

function estado(){
    document.getElementById("btnCopiar").style.visibility="visible";
    document.getElementById("resultado").style.visibility="visible";
    document.getElementById("caja-result").style.display="none"
}

function estadoEncriptado(){
    const encriptado = encriptar(textoIngresado.value); 
    texto.value = encriptado;
}

function encriptar(encriptacion) {
    estado();
    let letras = [['e','enter'],['i','imes'],['a','ai'],['o','ober'],['u','ufat']];
    encriptacion = encriptacion.toLowerCase();
    
    for (let i = 0; i < letras.length; i++){
        if(encriptacion.includes(letras[i][0])){
            encriptacion = encriptacion.replace(letras[i][0],letras[i][1]);
            (encriptacion[i][0],encriptacion[i][1]);
        }
    } 
    return encriptacion;
}

function estadoDesencriptado(){
    const desEncriptado = desencriptar(textoIngresado.value); 
    texto.value = desEncriptado;
}

function desencriptar (desencriptacion) {
    estado();
    let letras = [['e','enter'],['i','imes'],['a','ai'],['o','ober'],['u','ufat']];
    desencriptacion = desencriptacion.toLowerCase();
    
    for (let i = 0; i < letras.length; i++){
        if(desencriptacion.includes(letras[i][1])){
            desencriptacion = desencriptacion.replace(letras[i][1],letras[i][0]);
            (desencriptacion[i][1],desencriptacion[i][0]);
        }
    } 
    return desencriptacion;
}

function copiar (){
    texto.select();
    navigator.clipboard.writeText(texto.value);
        alert("Texto copiado");
        texto.value = "";
    
}


  



