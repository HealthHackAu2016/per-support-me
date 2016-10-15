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
    vm.inspectedStory;
    vm.inspectStory = inspectStory;

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

    function inspectStory(story) {
      if (vm.inspectedStory) {
        vm.inspectedStory.show = false;
      }
      story.show = true;
      vm.inspectedStory = story;
    }
  }
})();
