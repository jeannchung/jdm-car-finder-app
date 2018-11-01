const express = require('express')
const path = require('path')
const app = express()
const bodyParser = require('body-parser')
const PORT = process.env.PORT || 3000


app.use(express.static(path.join(__dirname, 'public')))
app.use(express.urlencoded({ extended: true }))
app.use(express.json())

require('./routes/apiRoutes')(app)

app.listen(PORT, () => console.log('http://localhost:3000'))