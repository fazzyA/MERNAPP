const express = require('express');
const router = express.Router()
const users = require('../../Users');

//Get all users
router.get('/', (req,res)=>{
    res.json(users)
})
//Get single user
router.get('/:id', (req,res)=>{
    let id = parseInt(req.params.id)
    console.log(id)
    let result = users.filter((item)=>item.id == id)
    res.json(result[0])
})
module.exports = router