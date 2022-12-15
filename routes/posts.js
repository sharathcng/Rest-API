const express = require('express')
const router = express.Router()
const Post = require('../models/Post')

//get all posts
router.get('/', async (req, res) => {
    try {
        const posts = await Post.find()
        res.json(posts)
    }
    catch (err) {
        res.json({ message: err })
    }
})

//specific post
router.get('/:postId', async (req, res) => {
    console.log(req.params.postId)
    try {
        const post = await Post.findById(req.params.postId)
        res.json(post)
    }
    catch (err) {
        res.json({ message: err })
    }
})

//post new post
router.post('/', (req, res) => {
    const post = new Post({
        title: req.body.title,
        description: req.body.description
    });

    post.save()
        .then(data => {
            res.json(data)
        })
        .catch(err => {
            console.log("Errrrrrrrrrrr", err)
            res.json({ message: err })
        })

})


//delete post
router.delete('/:postId', async (req, res) => {
    try {
        const post = await Post.remove({ _id: req.params.postId })
        Post.re
        res.json(post)
    }
    catch (err) {
        res.json({ message: err })
    }
})


//update post
router.patch('/:postId', async (req, res) => {
    try {
        const post = await Post.updateOne(
            { _id: req.params.postId },
            { $set: { title: req.body.title } }
        )
        res.json(post)
    }
    catch (err) {
        res.json({ message: err })
    }
})

module.exports = router