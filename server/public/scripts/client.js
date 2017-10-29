
console.log('js');

var picsApp = angular.module('picsApp', []);

picsApp.controller('CommandCenter', function($http) {
  var cc = this;
  getPics();
  //
  // var image1 = {
  //   id: 1,
  //   path: "styles/images/dogyawn.jpg",
  //   description: "HELLO THERE",
  //   showPic: true,
  //   likes: 0,
  //   views: 0,
  //   comments: [],
  //   showComments: false
  // };
  //
  // var image2 = {
  //   id: 2,
  //   path: "styles/images/houseonwater.jpg",
  //   description: "HI",
  //   showPic: true,
  //   likes: 0,
  //   views: 0,
  //   comments: [],
  //   showComments: false
  // };
  //
  // var image3 = {
  //   id: 3,
  //   path: "styles/images/fieldperson.jpg",
  //   description: 'what up!!!',
  //   showPic: true,
  //   likes: 0,
  //   views: 0,
  //   comments: [],
  //   showComments: false
  // };
  //
  // cc.images = [image1, image2, image3];

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
