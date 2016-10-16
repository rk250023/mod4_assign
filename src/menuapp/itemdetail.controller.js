(function () {
'use strict';

angular.module('menuapp')
.controller('ItemDetailController', ItemDetailController);


ItemDetailController.$inject = ['MenuDataService','catitems'];
function ItemDetailController(MenuDataService,catitems) {
  var list1 = this;
 list1.items = catitems.data.menu_items; 
}

})();
