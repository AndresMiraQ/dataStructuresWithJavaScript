class MyStacks{
    constructor(){
        this.lenght = 0;
        this.data = {};
    }
    //poner el elemento al final de la lista
    push(item){
        this.data[this.lenght] = item;
        this.lenght++;
        return this.data; 
    }
    //Eliminar el último elemento
    pop(){
        if(!this.data){
            return undefined;
        }else{
            //Cúal es el elemento que se eliminará
            const lastItem = this.data[this.lenght - 1];
            //Eliminar elemento
            delete this.data[this.lenght - 1];
            this.lenght--;
            return lastItem;
        }    
    }
    peek(){
        return this.data[this.lenght - 1];
    }
}