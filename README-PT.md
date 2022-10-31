<h1 align="center">Cineflex</h1>


![Project initial page](/public/images/home.png)


<p align="center">
  <img src="https://img.shields.io/badge/lançamento-outubro-blue?style=for-the-badge" alt="release date: october" />
  <img src="https://img.shields.io/badge/status-completo-brightgreen?style=for-the-badge" alt="status: completed"/>
</p>

**_Select another language:_ [English](https://github.com/daniel-bernardino747/Cineflex#readme)**

:page_facing_up: Este é um projeto de reserva de filmes desenvolvido com a **linguagem React**. Você pode selecionar um dos filmes disponibilizados pela API, a sessão e horário e os assentos que deseja. Além disso, outras pessoas também podem reservar e, quando isso acontece, os lugares ficam indisponíveis.

## :link: Acesso ao projeto

Você pode acessar o projeto clicando [aqui](https://github.com/daniel-bernardino747/Cineflex), ou baixando ele [aqui](https://github.com/daniel-bernardino747/Cineflex/archive/refs/heads/main.zip). De qualquer maneira, você consegue acessar cada Component criado através do Index.


## :point_up_2: Recursos

**1.** ***Selecionar Informações da API***: Você pode selecionar os pôsteres de filmes para ver suas respectivas sessões disponíveis e também selecionar a sessão para ver os lugares disponíveis na sessão selecionada.

**2.** ***Selecionar Assentos***: Você não pode selecionar assentos indisponíveis da API e será informado disso se tentar. Os assentos disponíveis podem ser selecionados e desmarcados, quantos você quiser.

**3.** ***Enviar Informações para API***: Se você gosta de um filme e quer assisti-lo, pode reservar seus assentos selecionados digitando seu nome e CPF e enviando para a API.

**4.** ***Sucesso***: Ao final você será informado de todas as suas escolhas, não se esqueça de printar e curtir seu filme. :clapper:


## :wrench: Técnicas e Tecnologias usadas

:heavy_check_mark: `React native`

:heavy_check_mark: `React Router`

:heavy_check_mark: `Styled-Components`

:heavy_check_mark: `Axios`

:heavy_check_mark: `Higher Order Functions (Funções de ordem superior)`

:heavy_check_mark: `Anonymous and arrows Functions (Funções anônimas e Arrow Functions)`

:heavy_check_mark: `CComponentização`

:heavy_check_mark: `CSS Organizado de acordo com as regras`

:heavy_check_mark: `Tratamento de Erros`


<details>
  <summary>
    <h2>:open_file_folder: Index</h2>
  </summary>

* **Geral:**
  * [HTML](https://github.com/daniel-bernardino747/Cineflex/blob/main/public/index.html)  
  * [index.js](https://github.com/daniel-bernardino747/Cineflex/blob/main/src/index.js)
  * [GlobalStyle Components](https://github.com/daniel-bernardino747/Cineflex/blob/main/src/GlobalStyle.js)

* **Componentes:**
  * [App](https://github.com/daniel-bernardino747/Cineflex/tree/main/src/components/App)
  * [Film](https://github.com/daniel-bernardino747/Cineflex/tree/main/src/components/Film)
  * [Forms](https://github.com/daniel-bernardino747/Cineflex/tree/main/src/components/Forms)
 
* **Páginas**
  * [ErrorPage](https://github.com/daniel-bernardino747/Cineflex/tree/main/src/Pages/ErrorPage)
  * [Home](https://github.com/daniel-bernardino747/Cineflex/tree/main/src/Pages/Home)
  * [Session](https://github.com/daniel-bernardino747/Cineflex/tree/main/src/Pages/Session)
  * [Seats](https://github.com/daniel-bernardino747/Cineflex/tree/main/src/Pages/Seats)
  * [Sucess](https://github.com/daniel-bernardino747/Cineflex/tree/main/src/Pages/Sucess)

* **Serviços**
  * [GETs Requests](https://github.com/daniel-bernardino747/Cineflex/blob/main/src/services/get.js)
  * [POSTs Requests](https://github.com/daniel-bernardino747/Cineflex/blob/main/src/services/post.js)
