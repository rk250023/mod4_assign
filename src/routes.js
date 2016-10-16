(function () {
'use strict';

angular.module('menuapp')
.config(RoutesConfig);

RoutesConfig.$inject = ['$stateProvider', '$urlRouterProvider'];
function RoutesConfig($stateProvider, $urlRouterProvider) {

  // Redirect to home page if no other URL matches
  $urlRouterProvider.otherwise('/');

  // *** Set up UI states ***
  $stateProvider

  // Home page
  .state('home', {
    url: '/',
    templateUrl: 'src/menuapp/templates/home.template.html'
  })

  // Premade list page
  .state('categoryList', {
    url: '/category-list',
    templateUrl: 'src/menuapp/templates/categorylistst.template.html',
    controller: 'CategorieslistController as Clist',
    resolve: {
      categories: ['MenuDataService', function (MenuDataService) {
        return MenuDataService.getAllCategories();
         }]
    }
  })
  // Item detail
    .state('categoryList.itemDetail', {
      url: '/item-detail/{shortName}',
      templateUrl: 'src/menuapp/templates/itemdetailst.template.html',
      controller: 'ItemDetailController as list1',
     
      resolve: {
        catitems: ['$stateParams','MenuDataService', function ($stateParams,MenuDataService) {
             console.log("Test rslv",$stateParams.shortName);
          return MenuDataService.getItemsForCategory($stateParams.shortName);
      }]
    }
     });


}

})();
