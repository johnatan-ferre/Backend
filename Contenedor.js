const { promises: fs } = require('fs');

class Contenedor {
    constructor(ruta) {
        this.ruta = ruta
    }

    async getAll() {
        try {
            const items = await fs.readFile(this.ruta, 'utf-8')
            return JSON.parse(items);
        } catch (error) {
            console.log('Error de lectura.')
            console.log(error)
            return []          
        }
    }
    
    async getRandom() {
        const items = await this.getAll()
        return this.largoArreglo(items) ? items[Math.floor(Math.random() * items.length)] : null
    }

    largoArreglo(arr){
        if (arr.length === 0){
            console.error('Array vacio')
            return false
        }
        return true
    }
}

module.exports = Contenedor; 