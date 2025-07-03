//Interfaces ou Interface
interface IProduct {
    id: number,
    name: string,
}

function newProduct(product: IProduct ) {

}

newProduct({ id: 1, name: "Produto A" });