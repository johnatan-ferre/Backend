const { promises: fs } = require('fs');

class Contenedor {
    constructor(ruta) {
        this.ruta = ruta
    }


    async save(object) {
        const items = await this.getAll()
        object.id = items[items.length - 1].id + 1
        items.push(object)
        try {
            console.log(`Se va a guardar el siguiente item: ${JSON.stringify(object)}`)
            await fs.writeFile(this.ruta, JSON.stringify(items, null, 2))
            console.log('Guardado ok.')
        } catch (error) {
            console.log('Error de escritura')
            console.log(error)
        }
    }

    async getById(id) {
        const items = await this.getAll();
        const itemById = items.find(item => item.id == id)
        return itemById
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

    async deleteById(id) {
        const items = await this.getAll()
        const deleteItemById = items.find(item => item.id === id)
        items.splice(deleteItemById, 1)
        await fs.writeFile(this.ruta, JSON.stringify(items))
        console.log(`Se elimina el elemento ${deleteItemById}`)
    }

    async deleteAll() {
        try {
            console.log('Todos los elementos van a ser borrados..')
            await fs.unlink(this.ruta)
            console.log('Elementos eliminados con éxito.')
        } catch (error) {
            console.error('Error de escritura.')
            console.error(error)
        }
    }
}

module.exports = Contenedor; 