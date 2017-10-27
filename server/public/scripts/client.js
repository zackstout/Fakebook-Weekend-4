
console.log('js');

var picsApp = angular.module('picsApp', []);

picsApp.controller('CommandCenter', function() {
  var cc = this;
  cc.like1=0;
  cc.like2=0;
  cc.like3=0;
  cc.like4=0;
  cc.like5=0;
  cc.like6=0;

  cc.bool1=false;

  // var likes = [cc.like1, cc.like2, cc.like3, cc.like4, cc.like5, cc.like6];

  // cc.liker = function(num) {
  //   var count = "like" + num;
  //   console.log(num, count, cc.count);
  //   cc.count++;
  // };

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

});
