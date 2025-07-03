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