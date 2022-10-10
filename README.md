<h1 align="center">Cineflex</h1>


![Project initial page](/public/images/home.png)


<p align="center">
  <img src="https://img.shields.io/badge/release%20date-october-blue?style=for-the-badge" alt="release date: october" />
  <img src="https://img.shields.io/badge/status-completed-brightgreen?style=for-the-badge" alt="status: completed"/>
</p>

:page_facing_up: This is a movie booking project developed with **React language**. You can select one of the movies made available by the API, the session and time and the seats you want. In addition, other people can also book and, when that happens, seats are unavailable.

## :link: Access project

You can access the project clicking [here](https://github.com/daniel-bernardino747/Cineflex), or downloading it [here](https://github.com/daniel-bernardino747/Cineflex/archive/refs/heads/main.zip). Alternatively, you can access each Component created through the index.


## :point_up_2: Features

**1.** ***Select API Information***: You can select movie posters to see their respective available sessions and also select the session to see available seats in the selected session.

**2.** ***Select Seats***: You can't select unavailable seats from the API and will be informed of this if you try. Available seats can be selected and also deselected, as many as you like.

**3.** ***Send information to API***: If you like a movie and want to watch it, you can reserve your selected seats by entering your name and CPF and submitting it to the API.

**4.** ***Sucess***: At the end you will be informed of all your choices, don't forget to print and enjoy your movie. :clapper:


## :wrench: techniques and technology used

:heavy_check_mark: `React native`

:heavy_check_mark: `React Router`

:heavy_check_mark: `Styled-Components`

:heavy_check_mark: `Axios`

:heavy_check_mark: `Higher Order Functions`

:heavy_check_mark: `Anonymous and arrows Functions`

:heavy_check_mark: `Componentization`

:heavy_check_mark: `Sort CSS rules`

:heavy_check_mark: `Erros handling`


<details>
  <summary>
    <h2>:open_file_folder: Index</h2>
  </summary>

* **General:**
  * [HTML](https://github.com/daniel-bernardino747/Cineflex/blob/main/public/index.html)  
  * [index.js](https://github.com/daniel-bernardino747/Cineflex/blob/main/src/index.js)
  * [GlobalStyle Components](https://github.com/daniel-bernardino747/Cineflex/blob/main/src/GlobalStyle.js)

* **Components:**
  * [App](https://github.com/daniel-bernardino747/Cineflex/tree/main/src/components/App)
  * [Film](https://github.com/daniel-bernardino747/Cineflex/tree/main/src/components/Film)
  * [Forms](https://github.com/daniel-bernardino747/Cineflex/tree/main/src/components/Forms)
 
* **Pages**
  * [ErrorPage](https://github.com/daniel-bernardino747/Cineflex/tree/main/src/Pages/ErrorPage)
  * [Home](https://github.com/daniel-bernardino747/Cineflex/tree/main/src/Pages/Home)
  * [Session](https://github.com/daniel-bernardino747/Cineflex/tree/main/src/Pages/Session)
  * [Seats](https://github.com/daniel-bernardino747/Cineflex/tree/main/src/Pages/Seats)
  * [Sucess](https://github.com/daniel-bernardino747/Cineflex/tree/main/src/Pages/Sucess)

* **Services**
  * [GETs Requests](https://github.com/daniel-bernardino747/Cineflex/blob/main/src/services/get.js)
  * [POSTs Requests](https://github.com/daniel-bernardino747/Cineflex/blob/main/src/services/post.js)
