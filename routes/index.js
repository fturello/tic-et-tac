var express = require('express');
var router = express.Router();

const mongoose = require('mongoose');
const { render } = require('../app');
var connect = require('../models/connection');
var usersModel = require('../models/users');

var journeySchema = mongoose.Schema({
  departure: String,
  arrival: String,
  date: Date,
  departureTime: String,
  price: Number,
});

var journeyModel = mongoose.model('journey', journeySchema);

var city = ["Paris","Marseille","Nantes","Lyon","Rennes","Melun","Bordeaux","Lille"]
var date = ["2018-11-20","2018-11-21","2018-11-22","2018-11-23","2018-11-24"]




router.get('/', function(req, res, next) {
  res.render('login', { title: 'Express' });
});

router.post('/sign-up', async function(req,res,next){

    console.log("5555555555", req.body)
    var newUser = new usersModel({
      username: req.body.usernameFromFront,
      email: req.body.emailFromFront,
      password: req.body.passwordFromFront,
    })
    console.log("8888888888888", newUser)
  
    var newUserSave = await newUser.save();
  
    req.session.user = {
      name: newUserSave.username,
      id: newUserSave._id,
    }
  
    console.log(req.session.user)
  
    res.redirect('/home',)
});

router.post('/sign-in', async function(req,res,next){

  var searchUser = await usersModel.findOne({
    email: req.body.emailFromFront,
    password: req.body.passwordFromFront
  })
  console.log("666666666", searchUser)

  if(searchUser!= null){
    req.session.user = {
      name: searchUser.usernameFromFront,
      id: searchUser._id
    }
    console.log("000000000", req.session.user)
    res.redirect('/home')
  } else {
    res.redirect('/')
  }

  
});

router.get('/home', function(req, res, next) {

  res.render('ticketac');
});

router.post('/tickets', async function(req, res, next){
  console.log("--------", req.body)
  var journeyList = await journeyModel.find({departure: req.body.departure, arrival: req.body.arrival, date: req.body.date});
  console.log("/////journeyList🤬🤬🤬🤬", journeyList);

  res.render('tickets', {journeyList});
});

router.get('/lasttrips', function(req, res, next){
  

  res.render('lasttrips')
})


// Remplissage de la base de donnée, une fois suffit
// router.get('/save', async function(req, res, next) {

  // How many journeys we want
  // var count = 300

  // Save  ---------------------------------------------------
    // for(var i = 0; i< count; i++){

//     departureCity = city[Math.floor(Math.random() * Math.floor(city.length))]
//     arrivalCity = city[Math.floor(Math.random() * Math.floor(city.length))]

//     if(departureCity != arrivalCity){

//       var newUser = new journeyModel ({
//         departure: departureCity , 
//         arrival: arrivalCity, 
//         date: date[Math.floor(Math.random() * Math.floor(date.length))],
//         departureTime:Math.floor(Math.random() * Math.floor(23)) + ":00",
//         price: Math.floor(Math.random() * Math.floor(125)) + 25,
//       });
       
//        await newUser.save();

//     }

//   }
//   res.render('index', { title: 'Express' });
// });



module.exports = router;
