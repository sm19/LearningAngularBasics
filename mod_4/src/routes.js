(function () {

'use strict';

angular.module('MenuApp')
  .config(RoutesConfig);

RoutesConfig.$inject=['$stateProvider', '$urlRouterProvider'];

function RoutesConfig($stateProvider, $urlRouterProvider) {

  $urlRouterProvider.otherwise('/');

  // *** Set up UI states ***
  $stateProvider

  // Home page
  .state('home', {
    url: '/',
    templateUrl: 'src/templates/home.template.html'
  })

  .state('categories', {
    url: '/categories',
    templateUrl: 'src/templates/categoriesListMain.html',
    controller :'CategoriesController as CategoriesController',
    resolve: {
      items: ['MenuDataService',function (MenuDataService) {
        return MenuDataService.getAllCategories();
      }]
    }
  })

  .state('items', {
    url: '/items/{short_name}',
    templateUrl: 'src/templates/itemsListMain.html',
    controller :'ItemListController as ItemListController',
    resolve: {
      items: ['$stateParams','MenuDataService',function ($stateParams,MenuDataService) {
        console.log($stateParams.short_name);
        return MenuDataService.getItemsForCategory($stateParams.short_name);
      }]
    }
  });

}
})();
