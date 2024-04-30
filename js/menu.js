'use strict'

/*  Selecionando o elemento que acionará a lista de links do menu */

const botaoMenu = document.querySelector("nav h2");

// Selecionando a lista de links/menu
const listaDeLinks = document.querySelector(".links-menu");

/*  Monitorando o evento de click do botaoMenu */

botaoMenu.addEventListener("click", function(event){

    /* "Previnir/Anular" o evento padão do link de redirecionamento/recarregamento da página */
    event.preventDefault();
    console.log("beleza");

    listaDeLinks.classList.toggle("aberto")
});