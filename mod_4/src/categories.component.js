(function () {

  'use strict';
  
    angular.module('data')
    .component('categories',{
      templateUrl: 'src/templates/categoriesList.html',
      bindings: {
        categories:'<'
      }

    })
})();
