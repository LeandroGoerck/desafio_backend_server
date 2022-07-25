# Desafio Backend Server

# Instruções para rodar

## 💻 Instalando o projeto

Clone o repositório:  
```
git clone git@github.com:LeandroGoerck/desafio-backend-server.git
```
    
Acesse a pasta do repositório  
```
cd desafio-backend-server
```

Instale as dependências:
```  
npm install
```

Suba um banco de dados mysql  
Renomeie o arquivo ```.env.example``` para ```.env``` e configure com as credencias do seu banco de dados 
  
Execute a aplicação
```  
npm start  
```
  
# Descritivo do desafio

## Backend
O desafio é implementar um backend REST para uma aplicação de músicas utilizando typescript.

Com as seguintes funcionalidades:
  - [x] *Criar uma playlist / *não adiciona as musicas
  - [x] Editar uma playlist
  - [x] Deletar uma playlist
  - [x] Listar todas as playlists
  - [x] Criar um usuário
  - [x] Editar um usuário
  - [x] Deletar um usuário
  - [x] Listar todos os usuários
  - [x] Login
  - [x] Registrar-se
  - [x] Obs.: Todos os usuário que se cadastram possuem a role USER.

  - [x] As rotas de login e registro devem ser as únicas de acesso público. Todas as outras rotas devem ser restritas a usuários autenticados.
  - [x] As funcionalidades referente a usuários devem ser acessíveis apenas para usuários com a role "ADMIN" e retornando 403 para os demais usuários.
  - [x] Se o usuário autenticado tiver a role "USER", então apenas as playlists criadas pelo mesmo devem ser acessíveis.
  - [x] Importante: O usuário inicial deve se chamar "admin" e a senha "admin" e utilizando a role "ADMIN".

  ## Banco de dados
O banco de dados utilizado é o mysql.

### Estrutura de dados
  ```
  user:
    id: number
    name: string
    email: string
    password: string
    role: ADMIN | USER
  ```

  ```
  playlist:
    id: number
    name: string
    genre: string;
    musics: string[];
    user_id: number
  ```
