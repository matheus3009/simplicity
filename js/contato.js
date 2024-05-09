'use strict'

/* Selecionando os elementos que serão manipulados */

const formulario = document.querySelector("form");
const campoCep = formulario.querySelector("#cep");
const campoEndereco = formulario.querySelector("#endereco");
const campoBairro = formulario.querySelector("#bairro");
const campoCidade = formulario.querySelector("#cidade");
const estado = formulario.querySelector("#estado");
const botaoBuscar = formulario.querySelector("#buscar");
const mensagemStatus = formulario.querySelector("#status");

/* Detectando quando o botão de buscar CEP é acionado */
botaoBuscar.addEventListener("click", async function(event){
    /* Anular o comportamento padrão de redirecionamento/recarregamento da página. sempre acontece ao trabalhar com <a> e <form> */
    event.preventDefault();

   
    if (campoCep.value.length !== 8) {
        //informar o usúario
        mensagemStatus.textContent = "digite um CEP válido";
        mensagemStatus.style.color = "hotpink";
        //parar completamente a execução
        return;
    }

    let cepInformado = campoCep.value;
    console.log(cepInformado);

    /* AJAX - Asyncronous JavaScript And XML
    (JavaScript assíncrono e XML)
    
    Técnica de comunicação (transmissão, recebimento) de dados que permite o processamento em conjunto com APIs (ou Web Services)
    */

    //Etapa 1: preparar a URL da API com o CEP informado
    let url = `https://viacep.com.br/ws/${cepInformado}/json/`
    console.log(url);

    //Etapa 2: acessar a API (com a URL) e aguardar o retorno dela
    const resposta = await fetch(url);
    
    //Etapa 3: extrair os dados da resposta da API em formato JSON
    const dados = await resposta.json();

    //Etapa 4: lidar com os dados (em caso e de sucesso)

    // Se existir a string/prop "erro" no objto dados
    if ("erro" in dados) {
        mensagemStatus.textContent = "CEP inexistente!";
        mensagemStatus.style.color = "hotpink";
    } else {
        mensagemStatus.textContent = "CEP encontrado!"
        mensagemStatus.style.color = "blue"

        const camposRestantes = formulario.querySelectorAll(".campos-restantes");

        /* removendo a classe */

        for (const campo of camposRestantes) {
            campo.classList.remove("campos-restantes")
        }

        campoEndereco.value = dados.logradouro;
        campoBairro.value = dados.bairro;
        campoCidade.value = dados.localidade;
        estado.value = dados.uf;
    }
})

