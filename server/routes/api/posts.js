const router = require('express').Router()
const Post = require('../../schemas/PostSchemas')

router.get('/', (req, res) => {
    console.log(`get route ${req.body}`)
})

router.post('/', (req, res) => {
    console.log(req.body)
    if (!req.body) {
        console.log("Content param not sent with request")
        return res.sendStatus(400)
    }
    res.status(200).send("Okay")
})

module.exports = router