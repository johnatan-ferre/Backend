const Contenedor = require('./Contenedor');

async function main() {
    const item = new Contenedor('./items.txt');


    console.log('Item agregado');
    let addedItem = await item.save(item);
    console.log(addedItem);

    console.log('Mostrando todos los items');
    let allItems = await item.getAll();
    console.log(allItems);

    const idToSearch = 1;
    console.log(`Mostrando item con id ${idToSearch}`);
    let itemById = await item.getById(idToSearch);
    console.log(itemById);

    const idToDelete = 1;
    console.log(`Borrar item con id ${idToDelete}`);
    let deleteItemById = await item.deleteById(idToDelete);
    console.log(deleteItemById);

    console.log('Todo borrado');
    let deleteAllItems = await item.deleteAll();
    console.log(deleteAllItems);
}

main();