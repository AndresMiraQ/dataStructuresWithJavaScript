// Un array de manera simple
//const array = ["Silencioso", "MQ", "A"];

//arrays desde una clase
class MyArray{
    constructor(){
        this.lenght = 0;
        this.data = {};
    }
    //Obtener el índice de una array
    get(index){
        return this.data[index];
    }
    //Agregar un elemento al final
    push(item){
        this.data[this.lenght] = item;
        this.lenght++;
        return this.data; 
    }
    //Eliminar el último elemento
    pop(){
        //Cúal es el elemento que se eliminará
        const lastItem = this.data[this.lenght - 1];
        //Eliminar elemento
        delete this.data[this.lenght - 1];
        this.lenght--;
        return lastItem;
    }
    delete(index){
        const itemDrop = this.data[index];
        this.shiftIndex(index);
        return itemDrop;
    }
    shitIndex(index){
        for(let i = index; i < this.lenght -1; i++){
            this.data[i] = this.data[i + 1];
        }
        delete this.data[this.lenght -1]
        this.lenght--;
    }
}
//Example with one instance
let array1 = new MyArray();
array1.push("Silencioso", "MQ", "31");
array1.push("MQ");
array1.push("31");
 
