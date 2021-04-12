const models = require('../models')

const dinosController = {}

dinosController.index = (req, res) => {
  models.dino.findAll()
  .then((dinos) => {
    res.json({ dinos })
  })
  .catch((error) => {
    res.json({ error })
  })
}

dinosController.create = (req, res) => {
  models.dino.create(req.body)
  .then((dino) => {
    res.json({ dino })
  })
  .catch((error) => {
    res.json({ error })
  })

}

module.exports = dinosController