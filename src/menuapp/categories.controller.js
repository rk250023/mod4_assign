(function () {
'use strict';

angular.module('menuapp')
.controller('CategorieslistController', CategorieslistController);


CategorieslistController.$inject = ['MenuDataService','categories'];
function CategorieslistController(MenuDataService,categories) {
  var Clist = this;
  Clist.catarry = categories;

}

})();
