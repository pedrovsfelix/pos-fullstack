import http from 'http';

// - Criar usuários
// - Listagem de usuários
// - Edição de usuários
// - Remoção de usuários

// - HTTP
//  - Método HTTP
//  - URL

// GET, POST, PUT, PATCH, DELETE

// GET -> Buscar informações do back-end
// POST -> Criar novas informações no back-end
// PUT -> Editar ou atualizar as informações no back-end
// PATCH -> Atualizar uma informação única ou específica de um recurso do back-end
// DELETE -> Remover uma informação do back-end

const server = http.createServer((req, res) => {
    const { method, url } = req;

    if ( method === 'GET' && url === '/users' ) {
        // Listar usuários
        return res.end('Listagem de usuários');

    }
    
    return res.end('Hello World');
})

server.listen(3333)