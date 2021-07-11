const router = require('express').Router()

router.get('/', (req, res) => {

})

router.post('/', (req, res) => {
    res.status(200).send("Okay")
})

module.exports = router