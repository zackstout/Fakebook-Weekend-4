
console.log('js');

var picsApp = angular.module('picsApp', []);

picsApp.controller('CommandCenter', function($http) {
  var cc = this;
  getPics();

  cc.images = [];

  cc.comments = [];

  cc.clickImage = function(pic) {
    console.log('in here', pic);
    //added conditional for DB:
    //i am a bit confused why we need this stuff if DB is doing it...:
    if (pic.showPic) {
      pic.views ++;
    }
    pic.showPic = !pic.showPic;

    // console.log('in here again', pic.showPic);
    $http.put('/images/views/' + pic.id, pic).then(function (response) {
      console.log('w00t');
      getPics();
    }).catch(function (err) {
      console.log('whoops', err);
    });
  };

  cc.clickLike = function(pic) {
    console.log('in likes', pic.likes);
    pic.likes ++;

    $http.put('/images/likes/' + pic.id, pic).then(function (response) {
      console.log('w00t');
      getPics();
    }).catch(function (err) {
      console.log('whoops', err);
    });
  };






//going to need a ...POSt route?? NOTE: i changed it for DB!
  cc.clickComment = function(pic) {
    // console.log(pic);
    cc.comments = pic.comment;
    // pic.comments = [];
    // var x = pic.image_id;
    //
    // pic.comments.push(pic.comment);
    // console.log(pic.comments);

    if (pic.comment !== '') {
      $http.post('/images/comments/' + pic.image_id, pic).then(function (response) {
        // console.log(response);
        getPics();
        // getComments(pic);

      }).catch(function (err) {
        console.log('whoops', err);
      });
    }
  };

//why is this getting called when we click showComments???
  function getComments(pic) {
    console.log(pic);
    $http.get('/images/comments/' + pic.image_id).then(function (response) {
      console.log('got comments!', response.data);
      // pic.comments = response.comments;
    }).catch(function (err) {
      console.log('whooooops');
    });
    }

  cc.showComments = function(pic) {
    // pic.showComments = !pic.showComments;
    console.log(pic);
    $http.put('/images/showComments', pic).then(function (response) {
      console.log('w00t');
      // getPics();
    }).catch(function (err) {
      console.log('whoops', err);
    });
  };








//replicate this with getComments! emmas idea!


  function getPics() {
    $http.get('/images').then(function (response) {
      // console.log('got pics!', response.data);

      cc.images = response.data;
      console.log(cc.images);
    }).catch(function (err) {
      console.log('whooooops');
    });
  }

});
