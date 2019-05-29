const express = require('express');
const router = express.Router();
const User = require('../../models/Users');

router.post('/register',(req,res)=>{
 
    console.log(req.body)
      // create a new User object
      const newUser = new User({
        name: req.body.name,
        email: req.body.email,
        password: req.body.password,
    })

    newUser.save()
    .then(user => {
        res.json({ user: user })
    })
    .catch(err => console.log(err))

})

router.post('/login',(req,res)=>{

    console.log("login called")
    User.findOne({email : req.body.email, password :req.body.password})
    .then(data=>{
        res.json({ user: data })
        //res.send(data);
    })
    .catch(err => res.status(404).json(err))  
})



module.exports = router; 