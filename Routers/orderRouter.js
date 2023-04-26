
const { getOrder, postOrder, putOrder, deleteOrder } = require('../Controller/orderController')


// router fun add
const route = require('express').Router()


// all methods routes
route.get('/', getOrder)

route.post('/', postOrder)

route.put('/:id', putOrder)

route.delete('/:id', deleteOrder)


// export route
module.exports = route