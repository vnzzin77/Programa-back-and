
const express = require('express')
const http = require('http');
const axios = require('axios');
const app = express();
const router = express.Router();
// Função para lidar comas requisições
const requestMain = (request, response) => {
    // URL da API que queremos acessar
    const apiUrl = 'https://jsonplaceholder.typicode.com/posts/1';
    const apiUrlPosts = 'https://jsonplaceholder.typicode.com/posts';
    const apiUrlComments = 'https://jsonplaceholder.typicode.com/comments';
    const apiUrlAlbums  = 'https://jsonplaceholder.typicode.com/albums';
    const apiUrlPhotos = 'https://jsonplaceholder.typicode.com/photos';
    const apiUrlTodos = 'https://jsonplaceholder.typicode.com/todos';
    const apiUrlUsers = 'https://jsonplaceholder.typicode.com/users';
    // Fazendo uma requisição HTTP GET com API 
    if(router.get('/')){
        axios.get(apiUrl)
        .then((apiResponse) => {
            // configurando o cabeçalho da resposta
            response.writeHead(200, {'Content-Type': 'text/plain'})

            // Exibindo os dados retornados na resposta
            response.end(`Dados da API: ${JSON.stringify(apiResponse.data)}`)
        })
        .catch((error) => {
            console.error('Erro aoo acessar a API');
        })
    }
        if(router.get('/posts')) {
            axios.get(apiUrlPosts)
            .then((apiResponse) => {
                // configurando o cabeçalho da resposta
                response.writeHead(200, {'Content-Type': 'text/plain'})
    
                // Exibindo os dados retornados na resposta
                response.end(`Dados da API: ${JSON.stringify(apiResponse.data)}`)
            })
            .catch((error) => {
                console.error('Erro ao acessar a API');
            })
        }
        if(router.get('/comments')) {
            axios.get(apiUrlComments)
            .then((apiResponse) => {
                // configurando o cabeçalho da resposta
                response.writeHead(200, {'Content-Type': 'text/plain'})
    
                // Exibindo os dados retornados na resposta
                response.end(`Dados da API: ${JSON.stringify(apiResponse.data)}`)
            })
            .catch((error) => {
                console.error('Erro ao acessar a API');
            })
        }
        if(router.get('/albums')) {
            axios.get(apiUrlAlbums)
            .then((apiResponse) => {
                // configurando o cabeçalho da resposta
                response.writeHead(200, {'Content-Type': 'text/plain'})
    
                // Exibindo os dados retornados na resposta
                response.end(`Dados da API: ${JSON.stringify(apiResponse.data)}`)
            })
            .catch((error) => {
                console.error('Erro aoo acessar a API');
            })
        }
        if(router.get('/photos')) {
            axios.get(apiUrlPhotos)
            .then((apiResponse) => {
                // configurando o cabeçalho da resposta
                response.writeHead(200, {'Content-Type': 'text/plain'})
    
                // Exibindo os dados retornados na resposta
                response.end(`Dados da API: ${JSON.stringify(apiResponse.data)}`)
            })
            .catch((error) => {
                console.error('Erro aoo acessar a API');
            })
        }
        if(router.get('/todos')) {
            axios.get(apiUrlTodos)
            .then((apiResponse) => {
                // configurando o cabeçalho da resposta
                response.writeHead(200, {'Content-Type': 'text/plain'})
    
                // Exibindo os dados retornados na resposta
                response.end(`Dados da API: ${JSON.stringify(apiResponse.data)}`)
            })
            .catch((error) => {
                console.error('Erro aoo acessar a API');
            })
        }
        if(router.get('/users')) {
            axios.get(apiUrlUsers)
            .then((apiResponse) => {
                // configurando o cabeçalho da resposta
                response.writeHead(200, {'Content-Type': 'text/plain'})
    
                // Exibindo os dados retornados na resposta
                response.end(`Dados da API: ${JSON.stringify(apiResponse.data)}`)
            })
            .catch((error) => {
                console.error('Erro aoo acessar a API');
            })
        }
    }  
// Criando servidor
const server = http.createServer(requestMain);
// Definindo a porta
const PORT = 3000;
// Iniciando o servidor e ouvindo a porta definida
server.listen(PORT, () => {
    console.log(`Servidor rodando em http://localhost:${PORT}`)
})
