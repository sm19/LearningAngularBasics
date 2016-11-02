(function () {
"use strict";

angular.module('public')
.controller('UserInfoController', UserInfoController);

UserInfoController.$inject = ['user'];
function UserInfoController(user) {
  //console.log('in UserInfoController setting loggedin to false');
  var $ctrl = this;
    $ctrl.loggedIn=false;
  //  console.log('user in UserInfoController', user);
    if( user !== null){
    //  console.log('in UserInfoController setting loggedin to TRUE');
      $ctrl.userInfo=user;
      $ctrl.loggedIn=true;
    }
  }

})();
