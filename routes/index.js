const express = require('express');
const router = express.Router();
const User = require('../models/User');
router.get('/register', (req,res) => res.render('register'))

router.get('/test',async (req,res)=>{
    try{
        const posts = await User.find();
        res.json(posts);
    }catch(err){
        res.json({message:err})
    }
});

//loads up welcome when the url is in /
router.get('/', (req,res) => res.render('index'));
router.get('/tracking', (req,res) => res.render('tracking'));
router.get('/contact', (req,res) => res.render('contact'));

router.get('/:postId',async (req,res)=>{
    try{
        // console.log(req.params.postId);
        const post = await User.findById(req.params.postId);
        res.json(post);
    }catch(err){
        res.render("404 Error")
    }
})


//loads up the dashboard when the url is in /successs
router.get('/success',(req,res) => res.render('success'));

router.post('/', (req,res)=>{
    const{name,email,address,postalCode,phoneNumber,time,date,senderFname,senderLname,senderAddressOne,senderAddressTwo,senderPostalCode,senderContact,recipientFname,recipientLname,recipientAddressOne,recipientAddressTwo,recipientCityTown,recipientProvince,recipientCountry,recipientContact} = req.body;
    const newUser = new User({
        name,
        email,
        address,
        postalCode,
        phoneNumber,
        time,
        date,
        senderFname,
        senderLname,
        senderAddressOne,
        senderAddressTwo,
        senderPostalCode,
        senderContact,
        recipientFname,
        recipientLname,
        recipientAddressOne,
        recipientAddressTwo,
        recipientCityTown,
        recipientProvince,
        recipientCountry,
        recipientContact


        
    });
    newUser
    .save()
    .then(user => {
        res.render('success')
    })
    .catch(err => console.log(err));
});

//extracts all routers into app.js
module.exports = router;