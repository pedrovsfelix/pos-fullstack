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

// HTTP response status code
// status informativos (100-199)
// status de sucesso (200-299)
// status de redirecionamento (300-399)
// status de erro do cliente (400-499)
// status de erro do servidor (500-599)

// Stateful -> Aplicações com armazenamento local, perdem os dados após reiniciar o servidor
// Stateless -> Aplicações sem armazenamento local, não perdem os dados após reiniciar o servidor (ex: REST APIs, MongoDB)

const users = []

const server = http.createServer((req, res) => {
    const { method, url } = req;

    if ( method === 'GET' && url === '/users' ) {
        // Listar usuários
        return res
        .setHeader('Content-Type', 'application/json')
        .end(JSON.stringify(users));

    }

    if ( method === 'POST' && url === '/users' ) {
        users.push({
            id: 1,
            name: 'Babu',
            email: 'babu@email.com'
        })
        // Criar usuários
        return res.writeHead(201).end();

    }

    return res.writeHead(404).end();
})

server.listen(3333)