const router = require('express').Router();

router.get("/", (req, res, next) => {
    res.status(200).render("register");
})

router.post('/', (req, res, next) => {
    let firstName = req.body.firstName.trim()
    let lastName = req.body.lastName.trim()
    let username = req.body.username.trim()
    let email = req.body.email.trim()
    let password = req.body.password.trim()
    let payload = req.body

    if (firstName && lastName && username && email && password) {
        console.log(payload)
    }
     else {
        payload.errorMessage = 'Please make sure each field has a valid value.'
        res.status(200).render('register', payload)
    }
})
module.exports = router;