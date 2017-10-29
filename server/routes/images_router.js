
var express = require('express');
var router = express.Router();
var pg = require('pg');

var config = {
  database: 'deneb',
  host: 'localhost',
  port: 5432,
  max: 10,
  idleTimeoutMillis: 30000
};
var pool = new pg.Pool(config);


var image1 = {
  id: 1,
  path: "styles/images/dogyawn.jpg",
  description: "HELLO THERE",
  showPic: true,
  likes: 0,
  views: 0,
  comments: [],
  showComments: false
};

var image2 = {
  id: 2,
  path: "styles/images/houseonwater.jpg",
  description: "HI",
  showPic: true,
  likes: 0,
  views: 0,
  comments: [],
  showComments: false
};

var image3 = {
  id: 3,
  path: "styles/images/fieldperson.jpg",
  description: 'what up!!!',
  showPic: true,
  likes: 0,
  views: 0,
  comments: [],
  showComments: false
};

var images = {
  image1: image1,
  image2: image2,
  image3: image3
};



//
// app.put('/images', function(req, res){
//     console.log(req.body); // req.body will be our recordForSale sent from the client
//     var recordForSale = req.body;
//     recordCollection.push(recordForSale);
//     console.log(recordCollection);
//     res.sendStatus(201);
// });

// Records GET route
router.get('/', function(req, res){
    res.send(images);
    console.log(images);
});
//
// router.put('/:id', function(req,res){
//   var imageId = req.params.id;
//   console.log(editId);
//   //res.sendStatus(200);
//   pool.connect(function (errorConnectingToDb, db, done) {
//     if (errorConnectingToDb) {
//       console.log('Error connecting', errorConnectingToDb);
//       res.sendStatus(500);
//     } else {
//       // We connected to the db!!!!! pool -1
//       var queryText = 'UPDATE "hotel_pets" SET "name" = $1, "breed" = $2, "color" = $3 WHERE "id" = $4;';
//       db.query(queryText, [req.body.petNameIn, req.body.petBreedIn, req.body.petColorIn, editId], function (errorMakingQuery, result) {
//         // We have received an error or result at this point
//         done(); // pool +1
//         if (errorMakingQuery) {
//           console.log('Error making query', errorMakingQuery);
//           res.sendStatus(500);
//         } else {
//           // Send back success!
//           res.sendStatus(201);
//         }
//       }); // END QUERY
//     }
//   }); // END POOL
// }); //END PUT ROUTE



module.exports = router;
