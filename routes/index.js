var express = require('express');
var router = express.Router();

const mongoose = require('mongoose');
var connect = require('../models/connection');

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

router.get('/home', function(req, res, next) {

  res.render('ticketac');
});

// router.get('/train-list', async function(req, res, next){
//   var journeyList = await journeyModel.findOne(req.body.trainFromFromFront, req.body.trainToFromFront);
//   console.log("journeyList😩😩😩😩", journeyList);

//   res.render('ticketac');
// });


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
