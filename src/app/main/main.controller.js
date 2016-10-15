(function() {
  'use strict';

  angular
    .module('healthhack')
    .controller('MainController', MainController);

  /** @ngInject */
  function MainController(storiesService) {
    var vm = this;

    vm.changeView = changeView;
    vm.onSelectAgeGroup = onSelectAgeGroup;
    vm.search = '';
    vm.results = storiesService.getUserStories();
    vm.showUserStories = true;
    vm.ageGroups = {
      ageGroup1: true,  // Default selection
      ageGroup2: false,
      ageGroup3: false
    };
    
    activate();

    function activate() {
      // simulate a constructor
    }
    
    function changeView(showUsers) {
      vm.showUserStories = showUsers;
      
      vm.results = (showUsers) ?
        storiesService.getUserStories() : storiesService.getServiceStories();
    }
  
    /**
     * Select age group event handler.
     * @param {string} selectedAgeGroup - Key of selected age group.
     */
    function onSelectAgeGroup(selectedAgeGroup) {
      // Loop through each object, `true` only of key matches `selectedAgeGroup`.
      for (var key in vm.ageGroups) {
        if (vm.ageGroups.hasOwnProperty(key)) {
          vm.ageGroups[key] = (key === selectedAgeGroup);
        }
      }
    }
  }
})();
