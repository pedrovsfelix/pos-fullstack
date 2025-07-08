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

// Omit
interface Journal {
    title: string;
    pages: number;
    author: string;
    description: string;
}

// Ocultar ou omitir alguma propriedade
const journal: Omit<Journal, "description"> = { title: "Typescript", pages: 100, author: "Pedro" }

// Para duas ou mais propriedades
const journal2: Omit<Journal, "description" | "author"> = { title: "Javascript", pages: 50 }

// Record
// Utilizamos para mapear tipos de objetos. Difinir chaves e valores
const scores: Record<string, number> = {
    "Pedro": 10,
    Babu: 9,
}

// Limitando valores
type Profile = "admin" | "user" | "guest"

const user: Record<Profile, number> = {
    "admin": 1,
    user: 2,
    guest: 3
}

// Para objetos personalizados
interface Persons {
    name: string,
    gender: string
}

const persons: Record<string, Persons> = {
    1: { name: 'Pedro', gender: 'Masculino' },
    2: { name: 'Babu', gender: 'Masculino' }
}


// Typeof
interface Product {
    id: number,
    name: string
}

const product1: Product = { id: 1, name: "Produto 1" }

// A tipagem seja do tipo 1, herdando as características original do "Pai"
const product2: typeof product1 = { id: 2, name: "Produto 2" }