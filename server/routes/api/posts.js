const express = require('express');
const auth = require('../../middleware/auth');
const Post = require('../../models/posts')
const router = express.Router()

router.get('/', async (req, res) => {
    // get posts from posts
    const posts = await Post.find().sort({createdAt:-1});
    res.json({
        success: true,
        status: 200, //ok
        data: posts
    })

})
router.post('/add',auth, async (req, res) => {
    try {
        const post = await Post.create(req.body)
        console.log(req.userData)
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
router.get('/:id', async (req, res) => {
    const post = await Post.findById(req.params.id);
    res.json({
        success: true,
        status: 200, //ok
        data: post
    })

})
router.post('update/:id', async (req, res) => {
    console.log('update')
    const post = await Post.findByIdAndUpdate(req.params.id, req.body);
    res.json({
        success: true,
        status: 200, //ok
        data: post,
        msg: 'updated successfully'
    })


})
router.delete('/:id',auth, async (req, res) => {
    try {
         const post = await Post.findByIdAndDelete(req.params.id);
    res.json({
        success: true,
        status: 200, //ok
        msg: 'post is deleted successfully'
    })
   
    } catch (error) {
        console.log(error)
    }

})
module.exports = router
