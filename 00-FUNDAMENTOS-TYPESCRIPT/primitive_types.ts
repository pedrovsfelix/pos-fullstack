// String - Textos
let username: string;
username = 'Pedro'
console.log(username);

// Number - Números
let total: number;
total = 3;      //Números inteiros
total = 3.5;    //Números decimais

// Boolean - Verdadeiro ou Falso
let isLoading: boolean;
isLoading = true;
isLoading = false;

// Tipagem Explícita
let myName: string;
//myName = 66 // Valor incorreto
myName = 'Pedro Félix'

// Inferencia de Tipos
// Implicita
let message = 'Oi, Tudo bem?'
message = 'Sim, tudo ótimo!'

// Qualquer valor
let myMessage: any; // ou let myMessage
myMessage = 'Mensagem enviada!'
myMessage = 2;
myMessage = true;

// Tipagem explicita em arrays | listas (type annotaion)
let names: string[] = ["Pedro", "Babu"];
let numbers: number[] = [1, 2, 3, 4];

// Inferência de tipos
let products = ["Notebook", 'Celular', 5, true];

// Tipagem de Funções
function sum(x: number, y: number): number {
    const resultado = x + y;
    console.log('Resultado: ' + resultado)

    return resultado
}

const result = sum(6, 4);

const showMessage = (name: string): string => {
    let message = "Olá" + name;
    return message;
}

// Tipagem de Objetos
let user: { name: string, age: string, work?: string } = { name: 'Pedro', age: '28' };
// 'work?:' - se torna uma propriedade opcional

function signIn({ email, password } : { email: string, password: string }) {
    console.log(`Email: ${email} - Senha: ${password}`);
}

signIn({ email: "pedro@email.com", password: "123" })

// Diferenças entre Null e Undefined
// Null
let value: number;
value = 12;
console.log(value); // undefined

let usr = {
    name: 'Pedro',
}
//console.log(user.email) // undefined

// Null
let mail = null;
console.log(mail); // null
if(!mail) {
    console.log('O valor é nulo');
}