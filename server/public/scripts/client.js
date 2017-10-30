
console.log('js');

var picsApp = angular.module('picsApp', []);

picsApp.controller('CommandCenter', function($http) {
  var cc = this;
  getPics();

//added conditional for DB:
  cc.clickImage = function(pic) {
    console.log('in here', pic.showPic);
    if (pic.showPic) {
      pic.views ++;
    }
    pic.showPic = !pic.showPic;
    console.log('in here again', pic.showPic);
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
    if (pic.comment !== '') {
      $http.post('/images/comments/' + pic.id, pic).then(function (response) {
        console.log('w00t');
        getPics();
      }).catch(function (err) {
        console.log('whoops', err);
      });
    }
    console.log(pic.comments);
  };

  cc.showComments = function(pic) {
    // pic.showComments = !pic.showComments;
    $http.put('/images/showComments/' + pic.id, pic).then(function (response) {
      console.log('w00t');
      getPics();
    }).catch(function (err) {
      console.log('whoops', err);
    });
  };

  cc.images = [];

  function getPics() {
    $http.get('/images').then(function (response) {
      console.log('got pics!', response.data);

      cc.images = response.data;
      console.log(cc.images);
    }).catch(function (err) {
      console.log('whooooops');
    });
  }

});
