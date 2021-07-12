const express = require('express')
const server = express()
const path = require('path')
const session = require('express-session')
require('dotenv').config()

server.set('view engine', 'pug')
server.set('views', path.join(__dirname, 'views'))

server.use(session({ secret: 'neovim lover', resave: false, saveUninitialized: true, cookie: {} }))
server.use(express.json())
server.use(express.text())
server.use(express.urlencoded({ extended: true }))
server.use(express.static(path.join(__dirname, 'public')))

server.use('/', require('./routes/landingRoutes'))
server.use('/home', require('./routes/homeRoutes'))
server.use('/login', require('./routes/loginRoutes'))
server.use('/logout', require('./routes/logoutRoutes'))
server.use('/register', require('./routes/registerRoutes'))
server.use('/api/posts', require('./routes/api/posts'))

module.exports = server