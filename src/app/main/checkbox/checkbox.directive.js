(function() {
  'use strict';
  
  angular
    .module('healthhack')
    .directive('hhCheckbox', checkbox);
  
  function checkbox() {
    return {
      restrict: 'E',
      link: link,
      scope: {
        tag: '='
      },
      templateUrl: 'app/main/checkbox/checkbox.directive.html'
    };
  }
  
  function link(scope, element, attrs) {
    scope.onSelect = function() {
      scope.tag.isSelected = !scope.tag.isSelected;
      
      scope.$emit('selectTag');
    };
  }
})();
