
## 💻 Blogs API

Neste projeto foi desenvolvida uma API e um banco de dados para a produção de conteúdo para um blog.

Esta aplicação em Node.js usa o pacote sequelize para fazer um CRUD de posts.

Desenvolvidos endpoints que estarão conectados ao banco de dados seguindo os princípios do REST;

Para fazer um post é necessário o usuário realizar uma autenticação, portanto uma relação entre user e post;

Ao realizar uma postagem é necessário fazer uso da tabela categoria, trabalhando, assim, a relação de posts para categories e de categories para posts.

## 📋 Tecnologias utilizadas

- JavaScript
- Mysql
- Node.js
- Express
- Sequelize


## :open_file_folder: **Requisitos Trabalhados**
- [x]  - 01 - Crie migrations para as entidades Users, Categories, BlogPosts, PostCategories
- [x]  - 02 - Crie models para as entidades Users, Categories, BlogPosts, PostCategories
- [x]  - 03 - Crie o endpoint POST /login
- [x]  - 04 - Crie o endpoint POST /user
- [x]  - 05 - Crie o endpoint GET /user
- [x]  - 06 - Crie o endpoint GET /user/:id
- [x]  - 07 - Crie o endpoint POST /categories
- [x]  - 08 - Crie o endpoint GET /categories
- [x]  - 09 - Crie o endpoint POST /post
- [x]  - 10 - Crie o endpoint GET /post
- [x]  - 11 - Crie o endpoint PUT /post/:id
- [x]  - 12 - Crie o endpoint DELETE /post/:id
- [x]  - 13 - Crie o endpoint DELETE /user/me
- [x]  - 14 - Crie o endpoint GET /post/search?q=:searchTerm


