(function () {
  'use strict';

  angular.module('NarrowItDownApp', [])
  .controller('NarrowItDownController', NarrowItDownController)
  .service('MenuSearchService', MenuSearchService)
  .directive('foundItems',FoundItemsDirective);

function FoundItemsDirective() {
var ddo={
  templateUrl : 'foundItems.html',
  scope:{
    found : '<',
    onRemove :'&'
  },
  controller:FoundItemsDirectiveController,
  controllerAs:'directiveCtrl',
  bindToController:true
 }
 
 return  ddo;
}

function FoundItemsDirectiveController() {
}

  MenuSearchService.$inject=['$http'];
  function MenuSearchService($http) {
    var service = this;

    service.getMatchedMenuItems = function (searchTerm) {
      var response =getMenuItems().then(function (response) {

        var arr =[];
          var items = response.data.menu_items;
          for (var i = 0; i < items.length; i++) {

            if(items[i].description.includes(searchTerm))
               arr.push(items[i]);
          }
          service.searchResult = arr;
          return arr;
      });
      return response;
    }

    function getMenuItems() {
      var response =$http({
        url:"https://davids-restaurant.herokuapp.com/menu_items.json",
        method:"GET"
      });
      return response;
    }

  };

  NarrowItDownController.$inject=['MenuSearchService'];
  function NarrowItDownController(MenuSearchService) {
      var controller = this;
      controller.searchText = '';
      controller.narrowDown = function () {
        if(!controller.searchText){
         controller.found=[];
         return;
       }
         var promise =MenuSearchService.getMatchedMenuItems(controller.searchText);
         promise.then(function (response) {
           controller.found= response;
         });

      }

      controller.removeItem = function (index) {
        controller.found.splice(index,1);
      }
  }
})()
