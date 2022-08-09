const express = require('express')
const { Router } = express
const ItemsApi = require('./api/items.js')


const itemsApi = new ItemsApi()
const itemsRouter = new Router()

itemsRouter.use(express.json())
itemsRouter.use(express.urlencoded({extended: true}))

const itemExists = (req, res, next) => {
    const { id } = req.params
    if (!itemsApi.list(parseInt(id))) {
        res.status(500).json({error:'Item no encontrado'})
    } next()
}


// Rutas

itemsRouter.get('/', (req, res) => {
    res.json(itemsApi.listAll())
})

itemsRouter.get('/:id', itemExists, (req, res) => {
    const { id } = req.params
    res.json(itemsApi.list(id))
})

itemsRouter.post('/', (req, res) => {
    itemsApi.save(req.body)
    res.json(itemsApi.listAll())
})

itemsRouter.put('/:id', itemExists, (req, res) => {
    const { id } = req.params
    itemsApi.update(req.body, parseInt(id))
    res.json(itemsApi.listAll())
})

itemsRouter.delete('/:id', itemExists, (req, res) => {
    const { id } = req.params
    itemsApi.delete(parseInt(id))
    res.json(itemsApi.listAll())
})


// Server

const app = express()
app.use(express.static('public'))
app.use('/api/productos', itemsRouter)

const port = 8080
const server = app.listen(port, () => {
    console.log(`Servidor HTTP escuchando en puerto ${server.address().port}`)
})
server.on('error', error => console.log(`Error en servidor ${error}`))

