// Utilitários do TypeScript facilitam o trabalho no dia a dia com tipagem, manipulação de tipos e inferência.

// Partial
interface User {
    id: number,
    name: string,
    email?: string,
}

const newUser: User = { id: 1, name: 'Pedro', email: 'pedro@email.com' }

// Tornando apenas as propriedades que quero atualizar, deixando os campos opcionais ao invés de apenas o E-mail.
const updatedUser: Partial<User> = { name: 'Pedro Felix' }

// Pick
interface Book {
    title: string;
    pages: number;
    author: string;
}

// Utilizamos este utilitário para escolher a propriedade que desejamos reaproveitar e editar.
const book: Pick<Book, "title"> = { title: "Typescript" }