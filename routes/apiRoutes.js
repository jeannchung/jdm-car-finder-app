const carArray = require('../data/cars')
let randNum = 0

module.exports = function (app) {

  app.post('/car', (req, res) => {
    res.sendStatus(200)
    randNum = req.body.randNum
    let carPrice = req.body.price
    let carAge = req.body.age
    let carMake = req.body.make
    let carBody = req.body.body
    let carFuel = req.body.fuel
    let carTrans = req.body.trans
    let carDrive = req.body.drive
  })

  app.get('/car', (req, res) => res.json(carArray[randNum]))
}