const { promises: fs } = require('fs');

class Contenedor {
    constructor(ruta) {
        this.ruta = ruta;
    }


    async save(object) {
        const items = await fs.readFile(this.ruta, 'utf-8');
        if (items) {
            JSON.parse(items);
            let itemId = items.id;
            if (itemId.length-1 >= 0) {
                fs.appendFile(this.ruta, JSON.stringify(items, null, 2));
                itemId++;
            } else {
                fs.writeFile(this.ruta, JSON.stringify(items, null, 2))
            }
        }
    }

    async getById(id) {
        const items = await this.getAll();
        const itemById = items.find(item => item.id == id);
    }

    async getAll() {
        try {
            const items = await fs.readFile(this.ruta, 'utf-8');
            return JSON.parse(items);
        } catch (error) {
            return [];            
        }
    }

    async deleteById(id) {
        const items = await this.getAll();
        const deleteItemById = items.remove(item => item.id == id)
    }

    async deleteAll() {
        const items = await fs.unlink(this.ruta);
    }
}

module.exports = Contenedor; 