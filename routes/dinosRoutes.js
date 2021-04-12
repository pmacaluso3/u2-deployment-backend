const dinoRouter = require('express').Router()

const dinosController = require('../controllers/dinosController')

dinoRouter.get('/', dinosController.index)
dinoRouter.post('/', dinosController.create)

module.exports = dinoRouter