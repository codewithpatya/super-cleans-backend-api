
const { getDaily_manuf, postDaily_manuf, putDaily_manuf, deleteDaily_manuf } = require('../Controller/Daily_manufController')


// router fun add
const route = require('express').Router()


// all methods routes
route.get('/',getDaily_manuf )

route.post('/', postDaily_manuf)

route.put('/:id', putDaily_manuf)

route.delete('/:id', deleteDaily_manuf)


// export route
module.exports = route