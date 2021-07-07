const express = require('express')
const app = express()
const PORT = 8001
const middleware = require('./middleware')
const path = require('path')
const loginRoute = require('./routes/loginRoutes')
const registerRoute = require('./routes/registerRoutes')

const server = app.listen(PORT, () => console.log(`Server listening on port ${PORT}`))

app.set("view engine", "pug")
app.set("views", path.join(__dirname, 'views'))

app.use(express.static(path.join(__dirname, 'public')))
app.use("/login", loginRoute)
app.use("/register", registerRoute)

app.get("/", middleware.requireLogin, (req, res, next) => {
    let payload = {
        pageTitle: 'HomeSweetHome'
    }
    res.status(200).render('home', payload)
})