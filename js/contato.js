'use strict'

/* Selecionando os elementos que serão manipulados */

const formulario = document.querySelector("form");
const campoCep = formulario.querySelector("#cep");
const campoEndereco = formulario.querySelector("#endereco");
const campoBairro = formulario.querySelector("#bairro");
const campoCidade = formulario.querySelector("#cidade");
const estado = formulario.querySelector("#cidade");
const botaoBuscar = formulario.querySelector("#buscar");
const mensagem = formulario.querySelector("status");

/* Detectando quando o botão de buscar CEP é acionado */
botaoBuscar.addEventListener("click", function(event){
    /* Anular o comportamento padrão de redirecionamento/recarregamento da página. sempre acontece ao trabalhar com <a> e <form> */
    event.preventDefault()
})