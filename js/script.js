const btnEncriptar = document.querySelector(".btn-encriptar");
const btnDesencriptar = document.querySelector(".btn-desencriptar");
const txtEncriptar = document.querySelector(".texto");
const aviso = document.querySelector(".aviso");
const respuesta = document.querySelector(".evaluar");
const contenido = document.querySelector(".encriptado-contenedor");
const btnCopiar = document.querySelector(".btn-copiar");

btnEncriptar.addEventListener("click", e=>{
  e.preventDefault();
  let texto = txtEncriptar.value;
  let txt = texto.normalize("NFD").replace(/[$\.¿\?~!\¡@#%^&*()_|}\{[\]>\<:"`;,\u0300-\u036f']/g, " ");
  
  if(texto == "") {
    aviso.textContent = "Tienes que ingresar al menos una palabra";
  }else if(texto != txt) {
    aviso.textContent = "Los carácteres especiales no están permitidos";
  }else if(texto != texto.toLowerCase()) {
    aviso.textContent = "Las mayúsculas no están permitidas";
  }else {
    texto = texto.replace(/e/mg, "enter");
    texto = texto.replace(/i/mg, "imes");
    texto = texto.replace(/a/mg, "ai");
    texto = texto.replace(/o/mg, "ober");
    texto = texto.replace(/u/mg, "ufat");

    respuesta.innerHTML = texto;
    btnCopiar.style.visibility = "inherit";
    contenido.remove();
  }
});

btnDesencriptar.addEventListener("click", e=>{
  e.preventDefault();
  let texto = txtEncriptar.value;
  let txt = texto.normalize("NFD").replace(/[$\.¿\?~!\¡@#%^&*()_|}\{[\]>\<:"`;,\u0300-\u036f']/g, " ");
  
  if(texto == "") {
    aviso.textContent = "Tienes que ingresar al menos una palabra";
  }else if(texto != txt) {
    aviso.textContent = "Los carácteres especiales no están permitidos";
  }else if(texto != texto.toLowerCase()) {
    aviso.textContent = "Las mayúsculas no están permitidas";
  }else {
    texto = texto.replace(/enter/mg, "e");
    texto = texto.replace(/imes/mg, "i");
    texto = texto.replace(/ai/mg, "a");
    texto = texto.replace(/ober/mg, "o");
    texto = texto.replace(/ufat/mg, "u");

    respuesta.innerHTML = texto;
    btnCopiar.style.visibility = "inherit";
    contenido.remove();
  }
});

btnCopiar.addEventListener("click", e=>{
  e.preventDefault();
  let copiar = respuesta;
  copiar.select();
  document.execCommand("copy");
})
