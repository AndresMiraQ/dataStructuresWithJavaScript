class HashTable {
    constructor(size) {
        this.data = new Array(size);
    }
    //HASH FUNCTION tomara el key de nuestro objeto, generara un numero random 0 y 65000+, y nos regresara un hash
    hashMethod(key){
        let hash = 0;
        for(let i=0; i < key.length; i++){
            hash = (hash + key.charCodeAt(i) * i) % this.data.length;
        }
        return hash;
    }
    set(key, value){
        const address = this.hashMethod(key);
        if(!this.data[address]){
            this.data[address] = [];            
        }
        this.data[address].push([key, value]);
        return this.data;
    }
    get(key) {
        const address = this.hashMethod(key);
        const currentBucket = this.data[address];
        if(currentBucket) {
            for(let i=0; i<currentBucket.length; i++){
                if(currentBucket[i][0] === key) {
                    return currentBucket[i][1];
                }
            }
        }
        return undefined;
    }
    delete(key) {
        const address = this.hashMethod(key);
        const currentBucket = this.data[address];
        if(currentBucket) {
            for(let i=0; i<currentBucket.length; i++){
                if(currentBucket[i][0] === key) {
                    const itemDrop = this.data[address];
                    this.data[address].splice(i,1);
                    return itemDrop;
                }
            }
        }
        return undefined;
    }
    getKeys() {
        const keys = [];
        for (let i = 0; i < this.data.length; i++) {
          if (this.data[i]) {
            for (let j = 0; j < this.data[i].length; j++) {
              keys.push(this.data[i][j][0]);
            }
          }
        }
        return keys;
      }
}

const myHashTable = new HashTable(50);