(function () {
  'use strict';
  angular.module("LunchCheck",[])
  .controller("LunchCheckController", LunchCheckController);
  LunchCheckController.$inject = ['$scope'];

  function LunchCheckController($scope) {
    $scope.lunchMenu="";
    $scope.lunchMenuResult="";
    $scope.checkLunch = function(){
    if (!$scope.lunchMenu) {
      $scope.lunchMenuResult="Please enter data first";
      return;
    }
    var items = $scope.lunchMenu.split(",");
    if(items.length >3){
      $scope.lunchMenuResult="Too much";
      return;
    }
   $scope.lunchMenuResult="Enjoy!";
   return;
  };
}

})();
