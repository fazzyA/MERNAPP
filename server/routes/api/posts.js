const express = require('express')
const Post = require('../../models/posts')
const router = express.Router()

router.get('/', async (req, res) => {
    // get posts from posts
    const posts = await Post.find();
    res.json({
        success: true,
        status: 200, //ok
        data: posts
    })

})
router.post('/add', async (req, res) => {
    console.log(".......", req.body)
    try {
        const post = await Post.create(req.body)
        res.json({
            success: true,
            status: 201,
            dbid: post._id
        })

    } catch (error) {
        res.json({
            success: false,
            status: 400,
            error
            
        })

    }


})
router.get('/:id', (req, res) => {
    console.log('single')

})
router.put('/:id', (req, res) => {
    console.log('update')

})
router.delete('/:id', (req, res) => {
    console.log('delete')

})
module.exports = router
