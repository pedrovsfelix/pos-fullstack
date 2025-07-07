//Interfaces ou Interface
interface IProduct {
    id: number,
    name: string,
}

function newProduct(product: IProduct ) {

}

newProduct({ id: 1, name: "Produto A" });

// Interfaces extendida
interface IPerson {
    id: number,
    name: string,
}

interface ITeacher extends IPerson {
    // id: number,
    // name: string,
    subjects: string[],
}

interface IStudent extends IPerson {
    // id: number,
    // name: string,
    age: number,
}

let teacher: ITeacher = { id: 1, name: "Pedro", subjects: ["Math", "Science"] };
let student: IStudent = { id: 2, name: "Babu", age: 5 };

// Usando type
type TProduct = {
    id: number,
    name: string,
}

function nProdcut(prd: TProduct) {

}

nProdcut({ id: 1, name: "Produto A" });

type SelectResponse = TProduct[] | null;

function SelectProducts(): SelectResponse {
    return null; // ou retornar um array de produtos
}

// Intersecção de Tipos
type Person = {
    id: number,
    name: string
}

// Aproveitando as informações de Person
type Teacher = Person & {
    subjects: string[],
}

// Aproveitando as informações de Person
type Student = Person & {
    age: number,
}

// Diferença entre Type e Interface
// Type é mais flexível, permite intersecção e união de tipos, enquanto Interface é mais adequada para definir contratos e herança. Interfaces podem ser estendidas, enquanto Types podem ser combinados.
// Exemplo de uso de Type e Interface

interface IBaseProduct {
    price: number,
}

interface IProduct extends IBaseProduct {
    id: number,
    name: string
}

// Interfaces é permitido criar múltiplas declarações com o mesmo nome
interface IProduct {
    quantity: number,
}

// Type não permite isso, se tentar declarar duas vezes dará erro de duplicação
type TBaseProduct = {
    price: number,
}

type TProducts = TBaseProduct & {
    id: number,
    name: string
}

let product1: IProduct = { id: 1, name: "Produto A", price: 100, quantity: 10 };
let product2: TProducts = { id: 2, name: "Produto B", price: 200 };

// Exemplo de tipos primitivos
type TypeString = string;
type TypeNumber = number;

interface X extends string {
    // Não é possível estender tipos primitivos com interface
}

// Asserção de Tipos
type UserResponse = {
    id: number,
    name: string,
    avatar: string,
}

let userResponse = {} as UserResponse;

// Restringindo Valores
type Size = "small" | "medium" | "large"

let size: Size;

size = "small"

// Enums
// Recurso para melhorar a legibilidade
// Exemplo para vários tipos de usuários, restrições de ambientes, etc.
enum Profile {
    Admin = 1,
    Client = 2,
    Seller = 3,
}
let profile: number = Profile.Admin;

// Generic
/**
 * S -> state
 * T -> type
 * K -> key
 * V -> value
 * E -> element
 * P -> property
 * R -> return
 * C -> component
 * etc
 */
function useState<T extends number | string = string>() {
    let state: T;

    function get() {
        return state;
    }

    function set(newValue: T) {
        state = newValue;
    }

    return { get, set };
}

let newState = useState();
newState.get(); // Retorna o estado atual
newState.set(10); // Atualiza o estado para 10