const express = require('express')
const app = express()
const PORT = 8001
const middleware = require('./middleware')
const path = require('path')
const loginRoute = require('./routes/loginRoutes')

const server = app.listen(PORT, () => console.log(`Server listening on port ${PORT}`))

app.set("view engine", "pug")
app.set("views", "views")

app.use(express.static(path.join(__dirname, 'public')))
app.use('/login', loginRoute)

app.get("/", middleware.requireLogin, (req, res, next) => {
    let payload = {
        pageTitle: 'Home'
    }
    res.status(200).render('home', payload)
})