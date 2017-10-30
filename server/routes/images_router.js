
var express = require('express');
var router = express.Router();
var pg = require('pg');
var images = require('../modules/images.js');

var config = {
  database: 'deneb',
  host: 'localhost',
  port: 5432,
  max: 10,
  idleTimeoutMillis: 30000
};
var pool = new pg.Pool(config);

//
// router.put('/likes/:id', function(req, res){
//   console.log(req.body.id);
//   for (var i = 0; i < images.length; i++) {
//     if (images[i].id == req.body.id) {
//       images[i].likes ++;
//       images[i].anyLikes = true;
//       console.log(images[i]);
//     }
//   }
//   res.sendStatus(201);
// }); //end PUT route for likes

router.put('/likes/:id', function(req,res){
  var imageId = req.body.image_id;
  var likes = req.body.likes;
  console.log(req.body);
  //res.sendStatus(200);
  pool.connect(function (err, db, done) {
    if (err) {
      console.log('Error connecting', err);
      res.sendStatus(500);
    } else {
      // We connected to the db!!!!! pool -1
      var queryText = 'UPDATE "fakebook_images" SET "likes" = $1 WHERE "image_id" = $2;';
      db.query(queryText, [likes++, imageId], function (err, result) {
        // We have received an error or result at this point
        done(); // pool +1
        if (err) {
          console.log('Error making query', err);
          res.sendStatus(500);
        } else {
          // Send back success!
          res.sendStatus(201);
        }
      }); // END QUERY
    }
  }); // END POOL
}); //END PUT ROUTE

// router.put('/comments/:id', function(req, res){
//   // console.log(req.body.comment);
//   for (var i = 0; i < images.length; i++) {
//     if (images[i].id == req.body.id) {
//       images[i].comments.push(req.body.comment);
//       console.log(images[i]);
//     }
//   }
//   res.sendStatus(201);
// }); //end PUT route for comments

router.post('/comments/:id', function(req,res){
  var imageId = req.params.id;
  var comment = req.body.comment;
  console.log(imageId, comment);
  //res.sendStatus(200);
  pool.connect(function (err, db, done) {
    if (err) {
      console.log('Error connecting', err);
      res.sendStatus(500);
    } else {
      // We connected to the db!!!!! pool -1
      var queryText = 'INSERT INTO "fakebook_comments" ("comment", "image_id") VALUES ($1, $2);';
      db.query(queryText, [comment, imageId], function (err, result) {
        // We have received an error or result at this point
        done(); // pool +1
        if (err) {
          console.log('Error making query', err);
          res.sendStatus(500);
        } else {
          // Send back success!
          res.sendStatus(201);
        }
      }); // END QUERY
    }
  }); // END POOL
}); //END PUT ROUTE

// router.put('/showComments/:id', function(req, res){
//   // console.log(req.body.comment);
//   for (var i = 0; i < images.length; i++) {
//     if (images[i].id == req.body.id) {
//       images[i].showComments = !images[i].showComments;
//       console.log(images[i]);
//     }
//   }
//   res.sendStatus(201);
// }); //end PUT route for showComments

router.put('/showComments/:id', function(req,res){
  var imageId = req.params.id;
  var showComments = req.body.showComments;
  console.log(imageId, likes);
  //res.sendStatus(200);
  pool.connect(function (err, db, done) {
    if (err) {
      console.log('Error connecting', err);
      res.sendStatus(500);
    } else {
      // We connected to the db!!!!! pool -1
      var queryText = 'UPDATE "fakebook_images" SET "showComments" = $1 WHERE "image_id" = $2;';
      db.query(queryText, [!showComments, imageId], function (err, result) {
        // We have received an error or result at this point
        done(); // pool +1
        if (err) {
          console.log('Error making query', err);
          res.sendStatus(500);
        } else {
          // Send back success!
          res.sendStatus(201);
        }
      }); // END QUERY
    }
  }); // END POOL
}); //END PUT ROUTE

// router.put('/views/:id', function(req, res){
//   console.log(req.body.id);
//   for (var i = 0; i < images.length; i++) {
//     if (images[i].id == req.body.id) {
//       images[i].showPic = !images[i].showPic;
//       if (!images[i].showPic) {
//         images[i].views ++;
//       }
//       console.log(images[i]);
//     }
//   }
//   res.sendStatus(201);
// }); //end PUT route for views

router.put('/views/:id', function(req,res){
  var imageId = req.params.id;
  var views = req.body.views++;
  console.log(imageId, views);
  //res.sendStatus(200);
  pool.connect(function (err, db, done) {
    if (err) {
      console.log('Error connecting', err);
      res.sendStatus(500);
    } else {
      // We connected to the db!!!!! pool -1
      var queryText = 'UPDATE "fakebook_images" SET "views" = $1 WHERE "image_id" = $2;';
      db.query(queryText, [views, imageId], function (err, result) {
        // We have received an error or result at this point
        done(); // pool +1
        if (err) {
          console.log('Error making query', err);
          res.sendStatus(500);
        } else {
          // Send back success!
          res.sendStatus(201);
        }
      }); // END QUERY
    }
  }); // END POOL
}); //END PUT ROUTE

// router.get('/', function(req, res){
//   res.send(images);
// });


router.get('/', function(req, res) {
  pool.connect(function(err, db, done) {
    if(err) {
      console.log('Error connecting', err);
      res.sendStatus(500);
    } else {
      //we connected to DB
      var queryText = 'SELECT * FROM "fakebook_images" ORDER BY "image_id";';
      db.query(queryText, [], function(err, result){
        done();
        if(err) {
          console.log('Error making query', err);
          res.sendStatus(500);
        } else {
          res.send(result.rows);
        }
      });
    }
  });
}); //END GET ROUTE

//i'm realizing now we're going to have to put the images all the way back in the DB




module.exports = router;
