const router = require('express').Router();
const bcrypt = require('bcrypt')
const User = require('../schemas/userSchemas')
require('../mongoUtil')

router.get("/", (req, res, next) => {
    res.status(200).render("register");
})

router.post('/', async (req, res, next) => {
    let firstName = req.body.firstName.trim()
    let lastName = req.body.lastName.trim()
    let username = req.body.username.trim()
    let email = req.body.email.trim()
    let password = req.body.password
    let payload = req.body

    if (firstName && lastName && username && email && password) {
        const user = await User.findOne({
            $or: [
                { username: username },
                { email: email }
            ]
        })
            .catch((err) => {
                console.log(err)
                payload.errorMessage = 'Something went wrong'
                res.status(200).render('register', payload)
        })
        if (user == null) {
            // no user found
            const data = req.body
            data.password = await bcrypt.hash(password, 10,)

            User.create(data)
                .then((user) => {
                    req.session.user = user
                    return res.redirect('/')
                })
        } else {
            // user found
            if (email === user.email) {
                payload.errorMessage = 'Email already in use'
            } else {
                payload.errorMessage = 'Username already in use'
            }
            res.status(200).render('register', payload)
        }
    }
     else {
        payload.errorMessage = 'Please make sure each field has a valid value.'
        res.status(200).render('register', payload)
    }
})
module.exports = router;