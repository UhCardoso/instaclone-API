# Instaclone API

Projeto do Backend em NodeJS onde foi refeito a interface do Instagram WEB, desenvolvido durante a semana Omnistack7, praticando os principais conceitos de ReactJS, ReactNative e NodeJs com MongoDB. 
Neste projeto eu adicionei uma funcionalidade extra no qual o usuário poderá comentar e visualizar os comentarios de cada foto em tempo real, utilizando a biblioteca *Socket.io*.
![alt text](https://thumbs2.imgbox.com/ed/25/KYJQGBoT_t.png)

---
## Features do projeto
- **Rota para postar foto:**

`https://api--instagram-clone.herokuapp.com/posts`

No frontend utilizando a biblioteca *Axios* é feito uma requisição **POST**, enviando os seguintes campos:

`"author": "Nome Sobrenome"`
`"place": "Local da foto",`
`"description": "Descrição sobre a foto",`
`"hashtags": "#algumahashtag",`
`"image": "nome-imagem.jpg"`

- **Rota para listar fotos:**

`https://api--instagram-clone.herokuapp.com/posts`

No frontend utilizando a biblioteca *Axios* é feito uma requisição com o metodo HTTP **GET** retornando um array de JSON. Veja o exemplo abaixo:

![alt text](https://thumbs2.imgbox.com/d0/69/4Kkun7rY_t.png)

**Rota para dar like:**

`https://api--instagram-clone.herokuapp.com/posts/<id_do_post>/like`

No frontend utilizando a biblioteca *Axios* é feito uma requisição com o metodo HTTP **POST**, passando o id da foto que será curtida na url da requisição. 

  ---
## Features extras

  **Rota para enviar comentário:**

`https://api--instagram-clone.herokuapp.com/posts/<id_do_post>/comment`

No frontend utilizando a biblioteca *Axios* é feito uma requisição com o metodo HTTP **POST**, enviando os seguintes campos:

{
	`"author": "Nome Sobrenome",`
	`"comment": "algum comantário"`
}

**Rota para listar comentário:**

`https://api--instagram-clone.herokuapp.com/posts/<id_do_post>/comment`

No frontend utilizando a biblioteca *Axios* é feito uma requisição com o metodo HTTP **GET** retornando um array de JSON. Veja o exemplo abaixo:

![alt text](https://thumbs2.imgbox.com/ca/a5/Kwd0fB5c_t.png)


