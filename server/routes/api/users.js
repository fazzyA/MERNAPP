const express = require("express");
const User = require("../../models/users.js");
const router = express.Router();
var bcrypt = require('bcryptjs');
//const users = require('../../Users');
var jwt = require('jsonwebtoken')
const dotenv = require('dotenv')
dotenv.config();

//===========================================Get all users
router.get("/", async (req, res) => {
  try {

    const users = await User.find();
    console.log(users);

    res.json({
      status: 200,
      success: true,
      data: users
    })
  } catch (e) {
    res.json({
      status: 404,
      success: false,
      error: e.message
    })
    // res.status(404).json({ success: false, error: err.message });
  }
});
//=========================================== Create Single User

router.post("/add", async (req, res) => {
  //console.log("....",req)
  let { pwd, email, name } = req.body;
  var salt = bcrypt.genSaltSync(10);
  var hash = bcrypt.hashSync(pwd, salt);
  console.log("hash=====", hash)
  let newUser = { pwd: hash, email, name }
  try {
    User.findOne({ email: req.body.email })
      .then(user => {
        if (!user) {
          //// save
          User.create(newUser)
            .then(usr => res.json({
              success: true,
              dbid: usr._id,
              status: 201
            }))
        }//if

      })
      .catch(err => res.json({
        error: err,
        status: 404
      }))



  } catch (err) {
    console.log(err);
    res.status(400).json({ success: false, error: err.message });
  }

});

//===================================================================Get single user
router.get('/:id', async (req, res) => {
  try {
    const user = await User.findById(req.params.id);
    res.status(200).json({ success: true, data: user });
  } catch (err) {
    res.status(400).json({ success: false, error: err.message });
  }


});
router.post('update/:id', async (req, res) => {
  console.log('update')
  const user = await User.findByIdAndUpdate(req.params.id, req.body);
  res.json({
    success: true,
    status: 200, //ok
    data: user,
    msg: 'updated successfully'
  })


})
router.delete('/:id', async (req, res) => {
  try {
    const user = await User.findByIdAndDelete(req.params.id);
    res.json({
      success: true,
      status: 200, //ok
      msg: 'post is deleted successfully'
    })

  } catch (error) {
    console.log(error)
  }

})

// let id = parseInt(req.params.id)
// console.log(id)
// let result = users.filter((item) => item.id == id)
// res.json(result[0])
router.get('/:id', async (req, res) => {

  res.json({
    success: true,
    status: 200, //ok
    data: users
  })

})
router.delete('/:id', async (req, res) => {
  try {
    const user = await User.findByIdAndDelete(req.params.id);
    console.log(req.params.id)
    res.json({
      success: true,
      status: 200, //ok
      msg: 'users is deleted successfully'
    })

  } catch (error) {
    console.log(".....", error)
  }

})
// });
router.post('/login', async (req, res) => {
  const { pwd, email } = req.body;
  console.log(req.body)

  try {
    User.findOne({ email })
      .then(user => {
        console.log(user)
        bcrypt.compare(pwd, user.pwd)
        .then((isMatch) => {
          if (!isMatch) return res.status(400).json({ msg: "Invalid credentials" });
          else {
            jwt.sign({id: user._id, email:user.email}, process.env.JWT_SECRET, function(err, token) {
              let onLineUser = {id:user._id, name:user.name, email:user.email,token, isAdmin:user.isAdmin}
              if(err) return res.json({status:400, msg:"no token generated"})
              console.log(token);
              res.json({
              status: 200,
              data: onLineUser,
              msg: "login success",
              token
            })
 });

          }//else
        }) //bcypt then
        // .catch(err => console.log('.....', err))
      })//usr then
  }//try
  catch (error) {
    console.log(error)
  }
}//post
)

///=========logout
router.delete('/logout',(req,res)=>{
req.session.destroy((err)=>{
if(err){
  res.json({
    status: 400,
    msg: "logout failed"
  })

} else{

  res.clearCookie("session-id");
  res.json({
    status: 200,
    msg: "logout success"
  })

}
})
})
// router.post('/authcheck',(req,res)=>{
//   console.log('authcheck')
//   /// if user loggedIn
//   const sessUser = req.session.user;
//   console.log('...........',sessUser)
//   if (sessUser) {
//      res.json({ msg: " Authenticated Successfully", user:sessUser });
//   } else {
//      res.json({status:401, msg: "Unauthorized" });
//   }
// })



module.exports = router
