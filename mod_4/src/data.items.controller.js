(function () {
  'use strict';

  angular.module('data')
  .controller('ItemListController',ItemListController);

  ItemListController.$inject=['items'];
  function ItemListController(items) {
    console.log(items.data);
    var controller = this;
    controller.items=items.data.menu_items;
  }


})();
