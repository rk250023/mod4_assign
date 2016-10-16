(function () {
'use strict';

angular.module('menuapp')
.component('categoryList', {
  templateUrl: 'src/menuapp/templates/categorylist.template.html',
  bindings: {
   catarry: '<'
  }
});
})();
