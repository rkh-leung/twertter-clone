const express = require('express')
const server = express()
const path = require('path')
const bodyParser = require('body-parser')
const result = require('dotenv').config()
const session = require('express-session')

if (result.error) throw result.error

server.set('view engine', 'pug')
server.set('views', path.join(__dirname, 'views'))

server.use(session({ secret: 'neovim lover', resave: false, saveUninitialized: true, cookie: {} }))
server.use(bodyParser.urlencoded({ extended: false }))
server.use(express.static(path.join(__dirname, 'public')))

server.use('/', require('./routes/homeRoutes'))
server.use('/login', require('./routes/loginRoutes'))
server.use('/logout', require('./routes/logoutRoutes'))
server.use('/register', require('./routes/registerRoutes'))


module.exports = server

// var sess = {
//     secret: 'keyboard cat',
//     cookie: {}
// }

// if (app.get('env') === 'production') {
//     app.set('trust proxy', 1) // trust first proxy
//     sess.cookie.secure = true // serve secure cookies
// }
// console.log(result.parsed)