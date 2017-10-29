
console.log('js');

var picsApp = angular.module('picsApp', []);

picsApp.controller('CommandCenter', function($http) {
  var cc = this;
  getPics();

  cc.clickImage = function(pic) {
    console.log('in here', pic.showPic);
    pic.showPic = !pic.showPic;
    if (!pic.showPic) {
      pic.views ++;
    }
  };

  cc.clickLike = function(pic) {
    console.log('in likes', pic.likes);
    pic.likes ++;
    console.log(pic.id);
  };

  cc.clickComment = function(pic) {
    pic.comments.push(cc.comment);
    console.log(pic.comments);
  };

  cc.showComments = function(pic) {
    pic.showComments = !pic.showComments;
  };

//
//   vc.addRecord = function(recordToAdd) {
//         $http.post('/records', recordToAdd).then(function (response) {
//             console.log('Success');
//             getRecords();
//         }).catch(function (error) {
//             console.log('Fail');
//         });
//     };

cc.images = [];

  function getPics() {
  $http.get('/images').then(function (response) {
    console.log('got pics!');
    cc.images = response.data;
    console.log(cc.images);
  }).catch(function (err) {
    console.log('whooooops');
  });
}



});

var x =1, y=2;

var arr = [x, y];


function changearr() {
  x = 3;
  return arr;
}
