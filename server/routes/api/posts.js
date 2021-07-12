const router = require('express').Router()
const Post = require('../../schemas/PostSchemas')
const User = require('../../schemas/UserSchemas')

router.get('/', (req, res) => {
})

router.post('/', (req, res) => {
    if (!req.body) {
        console.log("Content param not sent with request")
        return res.sendStatus(400)
    }

    const postData = {
        content: JSON.parse(req.body).content,
        postedBy: req.session.user
    }

        Post.create(postData)
            .then( async data => {
                const newPost = await User.populate(data, {path: 'postedBy'})
                res.status(201).send(newPost)
            })
            .catch(err => {
                console.log(`Error: ${err}`)
                res.sendStatus(400)
            })
})

module.exports = router