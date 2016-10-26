(function () {

  'use strict';

    angular.module('data')
    .component('items',{
      templateUrl: 'src/templates/itemsList.html',
      bindings: {
        menuitems:'<'
      }

    })
})();
