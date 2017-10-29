
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
//
//
var styleHigh = {
  height: '450px',
  width: 'auto',
  'margin':'8px',
  'padding':'8px'
};

var styleWide = {
  height: '300px',
  width: 'auto',
  'margin':'8px',
  'padding':'8px'
};

var styleHighBox = {
  width: 'auto',
  height: '600px',
  'border-radius': '12px',
  'background-color': 'rgba(231, 116, 113, 0.4)',
  'margin': '10px',
  'padding': '10px'
};

var styleWideBox = {
  height: '500px',
  width: 'auto',
  'border-radius': '12px',
  'background-color': 'rgba(231, 116, 113, 0.4)',
  'margin-bottom': '10px',
  'padding': '10px',
  'align-content':'center'
};

var style2 = {
  width: '350px',
  height: '350px',
  'background-color': 'rgba(231, 116, 113, 0.4)'

};


var image0 = {
  id: 0,
  path: "styles/images/doogle.jpg",
  description: "Ready to take on the philosophy scene with tiny doogle",
  showPic: true,
  likes: 0,
  views: 0,
  comment: '',
  comments: [],
  showComments: false,
  style: styleWide,
  style2: style2,
  styleHolder: styleWideBox
};

var image1 = {
  id: 1,
  path: "styles/images/bball.jpg",
  description: "Shooting hoops in the desert",
  showPic: true,
  likes: 0,
  views: 0,
  comment: '',
  comments: [],
  showComments: false,
  style: styleWide,
  style2: style2,
  styleHolder: styleWideBox
};

var image2 = {
  id: 2,
  path: "styles/images/calf.jpg",
  description: 'Get that milk bb',
  showPic: true,
  likes: 0,
  views: 0,
  comment: '',
  comments: [],
  showComments: false,
  style: styleHigh,
  style2: style2,
  styleHolder: styleHighBox
};

var image3 = {
  id: 3,
  path: "styles/images/homies.jpg",
  description: "Casual at the lake",
  showPic: true,
  likes: 0,
  views: 0,
  comment: '',
  comments: [],
  showComments: false,
  style: styleWide,
  style2: style2,
  styleHolder: styleWideBox
};

var image4 = {
  id: 4,
  path: "styles/images/shorts.jpg",
  description: "Brotherly love at Renn Fayre",
  showPic: true,
  likes: 0,
  views: 0,
  comment: '',
  comments: [],
  showComments: false,
  style: styleHigh,
  style2: style2,
  styleHolder: styleHighBox
};

var image5 = {
  id: 5,
  path: "styles/images/reflection.jpg",
  description: "Sometimes I need to lie down",
  showPic: true,
  likes: 0,
  views: 0,
  comment: '',
  comments: [],
  showComments: false,
  style: styleWide,
  style2: style2,
  styleHolder: styleWideBox
};

var image6 = {
  id: 6,
  path: "styles/images/theweeds.jpg",
  description: "Chilling at the reservoir",
  showPic: true,
  likes: 0,
  views: 0,
  comment: '',
  comments: [],
  showComments: false,
  style: styleWide,
  style2: style2,
  styleHolder: styleWideBox
};

var image7 = {
  id: 7,
  path: "styles/images/winter.jpg",
  description: "Winter in the desert",
  showPic: true,
  likes: 0,
  views: 0,
  comment: '',
  comments: [],
  showComments: false,
  style: styleWide,
  style2: style2,
  styleHolder: styleWideBox
};

var image8 = {
  id: 8,
  path: "styles/images/silo.jpg",
  description: "In the dairy silo",
  showPic: true,
  likes: 0,
  views: 0,
  comment: '',
  comments: [],
  showComments: false,
  style: styleHigh,
  style2: style2,
  styleHolder: styleHighBox
};

var image9 = {
  id: 9,
  path: "styles/images/sbsb.jpg",
  description: "Student body meeting",
  showPic: true,
  likes: 0,
  views: 0,
  comment: '',
  comments: [],
  showComments: false,
  style: styleWide,
  style2: style2,
  styleHolder: styleWideBox
};

var image10 = {
  id: 10,
  path: "styles/images/vanity.jpg",
  description: "The sea taught me vanity",
  showPic: true,
  likes: 0,
  views: 0,
  comment: '',
  comments: [],
  showComments: false,
  style: styleWide,
  style2: style2,
  styleHolder: styleWideBox
};

var image11 = {
  id: 11,
  path: "styles/images/gold.jpg",
  description: "Back in the day",
  showPic: true,
  likes: 0,
  views: 0,
  comment: '',
  comments: [],
  showComments: false,
  style: styleWide,
  style2: style2,
  styleHolder: styleWideBox
};

var image12 = {
  id: 12,
  path: "styles/images/mononoke.jpg",
  description: "No remarks necessary",
  showPic: true,
  likes: 0,
  views: 0,
  comment: '',
  comments: [],
  showComments: false,
  style: styleWide,
  style2: style2,
  styleHolder: styleWideBox
};

var image13 = {
  id: 13,
  path: "styles/images/goose.jpg",
  description: "Beach with the goose",
  showPic: true,
  likes: 0,
  views: 0,
  comment: '',
  comments: [],
  showComments: false,
  style: styleWide,
  style2: style2,
  styleHolder: styleWideBox
};

var images = [image0, image1, image2, image3, image4, image5, image6, image7, image8, image9, image10, image11, image12, image13];

//
router.put('/likes/:id', function(req, res){
  console.log(req.body.id);
  for (var i = 0; i < images.length; i++) {
    if (images[i].id == req.body.id) {
      images[i].likes ++;
      console.log(images[i]);
    }
  }
  res.sendStatus(201);
});

router.put('/comments/:id', function(req, res){
  // console.log(req.body.comment);
  for (var i = 0; i < images.length; i++) {
    if (images[i].id == req.body.id) {
      images[i].comments.push(req.body.comment);
      console.log(images[i]);
    }
  }
  res.sendStatus(201);
});

router.put('/views/:id', function(req, res){
  console.log(req.body.id);
  for (var i = 0; i < images.length; i++) {
    if (images[i].id == req.body.id) {
      images[i].showPic = !images[i].showPic;
      if (!images[i].showPic) {
        images[i].views ++;
      }
      console.log(images[i]);
    }
  }
  res.sendStatus(201);
});

router.get('/', function(req, res){
  res.send(images);
});


//i'm realizing now we're going to have to put the images all the way back in the DB
router.put('/:id', function(req,res){
  var imageId = req.params.id;
  console.log(editId);
  //res.sendStatus(200);
  pool.connect(function (errorConnectingToDb, db, done) {
    if (errorConnectingToDb) {
      console.log('Error connecting', errorConnectingToDb);
      res.sendStatus(500);
    } else {
      // We connected to the db!!!!! pool -1
      var queryText = 'UPDATE "hotel_pets" SET "name" = $1, "breed" = $2, "color" = $3 WHERE "id" = $4;';
      db.query(queryText, [req.body.petNameIn, req.body.petBreedIn, req.body.petColorIn, editId], function (errorMakingQuery, result) {
        // We have received an error or result at this point
        done(); // pool +1
        if (errorMakingQuery) {
          console.log('Error making query', errorMakingQuery);
          res.sendStatus(500);
        } else {
          // Send back success!
          res.sendStatus(201);
        }
      }); // END QUERY
    }
  }); // END POOL
}); //END PUT ROUTE



module.exports = router;
