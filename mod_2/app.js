(function () {
  'use strict';
  angular.module('ShoppingListCheckOff',[])
  .controller('ToBuyController',ToBuyController)
  .controller('AlreadyBoughtController',AlreadyBoughtController)
  .service('ItemService',ShoppingListCheckOffService);

  ToBuyController.$inject=['ItemService'];
  function ToBuyController(ItemService) {
   var buyList= this;
   buyList.items = ItemService.getBuyList();
   buyList.bought=function (index) {
     ItemService.moveToBought(index);
   }
  }

  AlreadyBoughtController.$inject=['ItemService'];
  function AlreadyBoughtController(ItemService) {
    var boughtList = this;
    boughtList.items =   ItemService.getBoughtList();

  }

  function ShoppingListCheckOffService() {
    var service = this;

    var buyList = [{ name: "cookies", quantity: 10 },{ name: "drinks", quantity: 14 },{ name: "candies", quantity: 50 }
    ,{ name: "cake", quantity: 4 },{ name: "chips", quantity: 20 },{ name: "chocolates", quantity: 20 }];

    var boughtList = [];

    service.getBuyList=function () {
      return buyList;
    }

    service.getBoughtList=function () {
      return boughtList;
    }

    service.moveToBought=function (index) {
      boughtList.push(buyList[index]);
      buyList.splice(index,1);
    }

  }
})()
