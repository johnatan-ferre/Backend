const Contenedor = require('./Contenedor')
const items = new Contenedor('items.txt')

const express = require('express')
const app = express()
const port = 8080


const server = app.listen(port, () => {
    console.log(`Servidor HTTP escuchando en el puerto ${server.address().port}`)
})

app.get('/productos', async (req, res) => {
    const allItems = await items.getAll()
    res.send(allItems)
})

app.get('/productoRandom', async (req, res) => {
    const itemRandom = await items.getRandom()
    res.send(itemRandom)
})

app.get('*', (req, res) => {
    res.send('<h1>Error al escribir la ruta</h1>')
})
server.on('error', error => console.log(`Error en servidor ${error}`))