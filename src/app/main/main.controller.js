(function() {
  'use strict';

  angular
    .module('healthhack')
    .controller('MainController', MainController);

  /** @ngInject */
  function MainController(storiesService) {
    var vm = this;

    vm.changeView = changeView;
    vm.search = '';
    vm.results = storiesService.getUserStories();
    vm.showUserStories = true;

    activate();

    function activate() {
      // simulate a constructor
    }

    function changeView(showUsers) {
      vm.showUserStories = showUsers;
      
      if (showUsers) {
        vm.results = storiesService.getUserStories();
      } else {
        vm.results = storiesService.getServiceStories();
      }
    }
  }
})();
