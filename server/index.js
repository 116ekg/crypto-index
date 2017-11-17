const express = require('express')
const app = express()
const path = require('path')
const parser = require('body-parser')
const routes = require('./routes/routes.js')

const PORT = 3000

app.use(parser.urlencoded({extended: true}))
app.use(parser.json())
app.use(express.static(path.join(__dirname, '../static')))

app.use('/api', routes)

app.listen(PORT, function() {
  console.log('now serving application on port ', PORT)
})