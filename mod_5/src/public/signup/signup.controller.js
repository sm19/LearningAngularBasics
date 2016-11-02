(function () {
"use strict";

angular.module('public')
.controller('SignUpController', SignUpController);

SignUpController.$inject = ['UserPrefService', 'MenuService'];
function SignUpController(UserPrefService, MenuService) {
  var $ctrl = this;
  $ctrl.user={};
  $ctrl.save=function () {
    $ctrl.response=false;
    $ctrl.menuError=false;
    MenuService.getMenuItem($ctrl.user.favourite).then(function (response) {
    //  console.log('item:', response);
      $ctrl.user.favouriteDetail=response;
      $ctrl.response =UserPrefService.save($ctrl.user);
    //  console.log('response',$ctrl.response);
    }).catch(function (data) {
      $ctrl.menuError=true;
    //  console.log(data);
      return;
    });

  }
}

})();
