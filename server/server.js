const express = require('express')
const server = express()
const path = require('path')
const bodyParser = require('body-parser')
const result = require('dotenv').config()

if (result.error) {
    throw result.error
}

// console.log(result.parsed)

server.set('view engine', 'pug')
server.set('views', path.join(__dirname, 'views'))

server.use(bodyParser.urlencoded({ extended: false }))
server.use(express.static(path.join(__dirname, 'public')))

server.use('/', require('./routes/homeRoutes'))
server.use('/login', require('./routes/loginRoutes'))
server.use('/register', require('./routes/registerRoutes'))


module.exports = server