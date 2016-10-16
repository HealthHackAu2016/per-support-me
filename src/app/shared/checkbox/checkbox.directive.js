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
        eventName: '=',
        obj: '='
      },
      templateUrl: 'app/shared/checkbox/checkbox.directive.html'
    };
  }
  
  function link($scope) {
    $scope.onSelect = function() {
      $scope.obj.isSelected = !$scope.obj.isSelected;
      
      $scope.$emit($scope.eventName);
    };
  }
})();
