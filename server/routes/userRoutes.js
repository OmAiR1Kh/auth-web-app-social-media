const {Router} = require('express')
const route = Router()
const userController = require('../controllers/userControllers')

route.post('/api/auth/register', userController.register)

module.exports = route;
