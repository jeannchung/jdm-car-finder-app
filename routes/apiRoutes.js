const carArray = require('../data/carArray')

module.exports = function (app) {
  app.post('/car', (req, res) => {
    res.sendStatus(200)
    randNum = req.body.randNum
    let price = req.body.price
    let age = req.body.age
    let make = req.body.make
    let body = req.body.body
    let fuel = req.body.fuel
    let trans = req.body.trans
    let drive = req.body.drive
  })

  app.get('/car', (req, res) => res.json(carArray[randNum]))
}