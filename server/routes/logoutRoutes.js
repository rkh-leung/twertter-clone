const router = require('express').Router();

router.get('/', (req, res, next) => {
    if (req.session) return req.session.destroy(() => res.redirect('/login'))
})

module.exports = router