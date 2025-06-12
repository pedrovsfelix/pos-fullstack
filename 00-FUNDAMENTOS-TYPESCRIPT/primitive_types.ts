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
function sum(x: number, y: number) {
    const resultado = x + y;
    console.log('Resultado: ' + resultado)
}