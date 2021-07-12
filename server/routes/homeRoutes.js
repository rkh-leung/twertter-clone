const router = require('express').Router();
const middleware = require('../middleware')

router.get('/', middleware.requireLogin, (req, res, next) => {
    let payload = {
        pageTitle: 'HomeSweetHome',
        userLoggedIn: req.session.user
    }
    res.status(200).render('home', payload)
})

module.exports = router