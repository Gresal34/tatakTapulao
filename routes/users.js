const express = require('express');
const router = express.Router();


const User = require('../models/User');
router.get('/register', (req,res) => res.render('register'))


//when you click the register button from register.js, it will bring you to this function
//it puts your data information in the databas.
router.post('/', (req,res)=>{
    const{title,description} = req.body;
    const newUser = new User({
        title,description
    });
    newUser
    .save()
    .then(user => {
        res.redirect('/success');
    })
    .catch(err => console.log(err));
});

module.exports = router;