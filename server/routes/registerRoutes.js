const router = require('express').Router();

router.get("/", (req, res, next) => {
    
    res.status(200).render("register");
})

module.exports = router;