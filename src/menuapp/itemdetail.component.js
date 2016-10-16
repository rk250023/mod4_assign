(function () {
'use strict';

angular.module('menuapp')
.component('itemDetail', {
  templateUrl: 'src/menuapp/templates/itemDetail.template.html',
  bindings: {
   items: '<'
  }
});
})();
