(function() {
  'use strict';
  
  angular
    .module('healthhack')
    .directive('hhTags', tags);
  
  function tags() {
    return {
      restrict: 'E',
      link: link,
      scope: {
        eventName: '=',
        tagCategories: '='
      },
      templateUrl: 'app/main/tags/tags.directive.html'
    };
  }
  
  function link($scope) {
    $scope.isExpanded = {};
    
    var keys = $scope.tagCategories.map(function(category) {
      return category.categoryName.toLowerCase();
    });
    
    keys.forEach(function(key) {
      $scope.isExpanded[key] = false;
    });
    
    $scope.toggleTags = function(categoryName) {
      $scope.isExpanded[categoryName] = !$scope.isExpanded[categoryName];
    }
  }
})();
