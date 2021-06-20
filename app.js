const express = require('express');
const path = require('path');
const app = express();
const mongoose = require('mongoose');

// require('dotenv/config');

// replace the dotenv with this. instead on having it on seperate .env file, 
// it is embeded in the code extracted from keys.js
const db = require('dotenv/config').DB_CONNECTION;

// this line of codes connects you to mongoDB
// mongoose.connect(db,{useNewUrlParser: true})
// .then(()=> console.log('MongoDB Connected...'))
// .catch(err => console.log(err));

//ejs viewport
app.set('view engine', 'ejs');

//this lets you load static files to your ejs, such as style.css
app.use(express.urlencoded({ extended:false }));
app.use(express.static(path.join(__dirname,'assets')));

//Routes
app.use('/', require('./routes/index'));
app.use('/users', require('./routes/users'));


//not found error. then it loads error page.
app.use((req, res, next) => {
  res.render('404error');
});

app.use((error, req, res, next) => {
  res.render('404error');
});


mongoose.connect(process.env.DB_CONNECTION,{useNewUrlParser:true},()=>
    console.log('Connected to DB')
);

//localhost listens to port 3000, or whatever port you desire.
//the lower port you go, the more likely you run into permission errors
const PORT = process.env.PORT || 3000;
app.listen(PORT, console.log(`Server started on port ${PORT}`));