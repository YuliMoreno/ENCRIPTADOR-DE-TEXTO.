//-------Selección de Elementos-------//
const btnEncriptar = document.querySelector(".btn-encriptar");
const txtEncriptar = document.querySelector(".encriptar");
const aviso = document.querySelector(".texto-aviso");
const respuesta = document.querySelector(".evaluar");
const btnCopiar = document.querySelector(".btn-copiar");
const btnDesencriptar = document.querySelector(".btn-desencriptar");

// Limpieza inicial de los campos cuando se carga la página
document.addEventListener("DOMContentLoaded", () => {
    resetPage();

    // Añadir evento input para limpiar el resultado si se borra el texto de entrada
    if (txtEncriptar) {
        txtEncriptar.addEventListener("input", () => {
            if (txtEncriptar.value.trim() === "") {
                resetPage(); 
            }
        });
    }
});

// Función para resetear la página
function resetPage() {
    
    if (txtEncriptar) {
        txtEncriptar.value = "";
    }

    if (respuesta) {
        respuesta.innerHTML = "";
        respuesta.removeAttribute("style");
    }

    if (btnCopiar) {
        btnCopiar.style.visibility = "hidden";
    }
    
    if (!document.querySelector(".tarjeta-contenedor")) {
        const newContenido = document.createElement("div");
        newContenido.classList.add("tarjeta-contenedor");
    
        const imgMuneco = document.createElement("img");
        imgMuneco.classList.add("img-muneco");
        imgMuneco.src = "../assets/muneco.png"; 
        imgMuneco.alt = "Muñeco";
        newContenido.appendChild(imgMuneco);
    
        const textoUno = document.createElement("p");
        textoUno.classList.add("texto-uno");
        textoUno.textContent = "Ningún mensaje fue encontrado";
        newContenido.appendChild(textoUno);
    
        const textoDos = document.createElement("p");
        textoDos.classList.add("texto-dos");
        textoDos.textContent = "Ingrese el texto que deseas encriptar o desencriptar";
        newContenido.appendChild(textoDos);
    
        document.querySelector(".tarjeta").appendChild(newContenido);
    }
}
    
//-------Boton de Encriptar-------//
btnEncriptar.addEventListener("click", e=>{
    e.preventDefault();
    let texto = txtEncriptar.value;
    let txt = texto.normalize("NFD").replace(/[$\.¿\?~!\¡@#%^&*()_|}\{[\]>\<:"`;,\u0300-\u036f']/g, "");

    if(texto == ""){
        aviso.style.background = "#0A3871";
        aviso.style.color = "#FFFF";
        aviso.style.fontWeight = "800";
        aviso.textContent = "El campo de texto no debe estar vacío";

        setTimeout(()=>{
            aviso.removeAttribute("style");
        },1500);
    }

    else if(texto !== txt){
        aviso.style.background = "#0A3871";
        aviso.style.color = "#FFFF";
        aviso.style.fontWeight = "800";
        aviso.textContent = "No debe tener acentos y caracteres especiales";

        setTimeout(()=>{
            aviso.removeAttribute("style");
        },1500);
    }

    else if(texto !== texto.toLowerCase()){
        aviso.style.background = "#0A3871";
        aviso.style.color = "#FFFF";
        aviso.style.fontWeight = "800";
        aviso.textContent = "El texto debe ser todo en minúscula";

        setTimeout(()=>{
            aviso.removeAttribute("style");
        },1500);
    }

    else{
        texto = texto.replace(/e/mg, "enter");
        texto = texto.replace(/i/mg, "imes");
        texto = texto.replace(/a/mg, "ai");
        texto = texto.replace(/o/mg, "ober");
        texto = texto.replace(/u/mg, "ufat");

        respuesta.innerHTML = texto;
        btnCopiar.style.visibility = "inherit";

        const currentContent = document.querySelector(".tarjeta-contenedor");
        if (currentContent) {
            currentContent.remove();
        }
    }
});

//-------Boton de Desencriptar-------//
btnDesencriptar.addEventListener("click", e=>{
    e.preventDefault();
    let texto = txtEncriptar.value;
    let txt = texto.normalize("NFD").replace(/[$\.¿\?~!\¡@#%^&*()_|}\{[\]>\<:"`;,\u0300-\u036f']/g, "");

    if(texto == ""){
        aviso.style.background = "#0A3871";
        aviso.style.color = "#FFFF";
        aviso.style.fontWeight = "800";
        aviso.textContent = "El campo de texto no debe estar vacío";

        setTimeout(()=>{
            aviso.removeAttribute("style");
        },1500);
    }

    else if(texto !== txt){
        aviso.style.background = "#0A3871";
        aviso.style.color = "#FFFF";
        aviso.style.fontWeight = "800";
        aviso.textContent = "No debe tener acentos y caracteres especiales";

        setTimeout(()=>{
            aviso.removeAttribute("style");
        },1500);
    }

    else if(texto !== texto.toLowerCase()){
        aviso.style.background = "#0A3871";
        aviso.style.color = "#FFFF";
        aviso.style.fontWeight = "800";
        aviso.textContent = "El texto debe ser todo en minúscula";

        setTimeout(()=>{
            aviso.removeAttribute("style");
        },1500);
    }

    else{
        texto = texto.replace(/enter/mg, "e");
        texto = texto.replace(/imes/mg, "i");
        texto = texto.replace(/ai/mg, "a");
        texto = texto.replace(/ober/mg, "o");
        texto = texto.replace(/ufat/mg, "u");

        respuesta.innerHTML = texto;
        btnCopiar.style.visibility = "inherit";

        const currentContent = document.querySelector(".tarjeta-contenedor");
        if (currentContent) {
            currentContent.remove();
        }
    }
});

//-------Boton de Copiar-------//
btnCopiar.addEventListener("click", e=>{
    e.preventDefault();
    let copiar = respuesta;
    copiar.select();
    document.execCommand("copy"); 
});
