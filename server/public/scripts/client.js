
console.log('js');

var picsApp = angular.module('picsApp', []);

picsApp.controller('CommandCenter', function() {
  var cc = this;


  // var image1 = {
  //   path, description, boolean
  // };
  //
  // cc.images = [image1, ..];
  //
  // cc.imageClick
  //
  // cc.likeClick
  //
  // 


  cc.like1=0;
  cc.like2=0;
  cc.like3=0;

  cc.bool1=false;
  cc.bool2=false;
  cc.bool3=false;

  cc.liker1 = function() {
    console.log(cc.like1);
    cc.like1++;
  };
  cc.liker2 = function() {
    cc.like2++;
  };
  cc.liker3 = function() {
    cc.like3++;
  };

  cc.toggler1 = function() {
    console.log(cc.bool1);
    cc.bool1 = !cc.bool1;
  };
  cc.toggler2 = function() {
    cc.bool2 = !cc.bool2;
  };
  cc.toggler3 = function() {
    cc.bool3 = !cc.bool3;
  };

  cc.commenters1 = [];

  cc.commenter1 = function() {
    console.log(cc.comment1);
    cc.commenters1.push(cc.comment1);
    console.log(cc.commenters1);
  };

});
