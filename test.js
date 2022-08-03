const Contenedor = require('./Contenedor');

async function main() {
    const items = new Contenedor('./items.txt');

    console.log('Cargamos el primer item');
    let addedItem1 = await items.save(({title: 'Escuadra',price: 123.45, thumbnail: 'https://cdn3.iconfinder.com/data/icons/education-209/64/ruler-triangle-stationary-school-256.png'}))
    console.log(addedItem1);

    console.log('Cargamos el segundo item');
    let addedItem2 = await items.save(({title: 'Calculadora', price: 234.56, thumbnail: 'https://cdn3.iconfinder.com/data/icons/education-209/64/calculator-math-tool-school-256.png'}))
    console.log(addedItem2);

    console.log('Cargamos el tercer item');
    let addedItem3 = await items.save(({title: 'Globo Terráqueo', price: 345.67, thumbnail: 'https://cdn3.iconfinder.com/data/icons/education-209/64/globe-earth-geograhy-planet-school-256.png'}))
    console.log(addedItem3);



    console.log('Mostrando todos los items');
    let allItems = await items.getAll();
    console.log(allItems);

    const idToSearch = 1;
    console.log(`Mostrando item con id ${idToSearch}`);
    let itemById = await items.getById(idToSearch);
    console.log(itemById);

    const idToDelete = 1;
    console.log(`Borrar item con id ${idToDelete}`);
    let deleteItemById = await items.deleteById(idToDelete);
    console.log(deleteItemById);

    console.log('Borrar todo');
    let deleteAllItems = await items.deleteAll();
    console.log(deleteAllItems);
}

main();