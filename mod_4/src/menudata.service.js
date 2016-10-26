(function () {
  'use strict';

  angular.module('data')
  .service('MenuDataService',MenuDataService);

  MenuDataService.$inject = ['$http'];
  function MenuDataService($http) {
  var service = this;

  service.getAllCategories = function () {
      return $http({
        url: "https://davids-restaurant.herokuapp.com/categories.json",
        method :"GET"
      })
  };

  service.getItemsForCategory= function (categoryShortName) {
    var urlComplete =  'https://davids-restaurant.herokuapp.com/menu_items.json?category='.concat(categoryShortName);

    return $http({
      url: urlComplete,
      method: "GET"
    })
  }

  }
})();
