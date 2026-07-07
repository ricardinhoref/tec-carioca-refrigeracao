// ===============================
// TEC CARIOCA REFRIGERAÇÃO
// script.js
// ===============================

// Rolagem suave para links internos

document.querySelectorAll('a[href^="#"]').forEach(link => {

    link.addEventListener("click", function(e){

        e.preventDefault();

        const destino = document.querySelector(this.getAttribute("href"));

        if(destino){

            destino.scrollIntoView({

                behavior:"smooth"

            });

        }

    });

});

// Animação ao aparecer na tela

const elementos = document.querySelectorAll(

'.card-servico,.card-diferencial,.titulo-secao,.texto-banner,.imagem-banner'

);

const observador = new IntersectionObserver((entradas)=>{

    entradas.forEach((entrada)=>{

        if(entrada.isIntersecting){

            entrada.target.classList.add("mostrar");

        }

    });

},

{

    threshold:0.15

});

elementos.forEach((el)=>{

    observador.observe(el);

});

// Botão WhatsApp

const whatsapp = document.querySelector(".botao-whatsapp");

if(whatsapp){
    whatsapp.href = "https://wa.me/5521968182380";
}

const whatsappFlutuante = document.querySelector(".whatsapp-fixo");

if(whatsappFlutuante){
    whatsappFlutuante.href = "https://wa.me/5521968182380";
}
