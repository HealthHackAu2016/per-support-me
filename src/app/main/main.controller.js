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
    vm.getServices = getServices;
    vm.location = 

    activate();

    function activate() {
      // simulate a constructor
    }
    function getServices() {


      navigator.geolocation.getCurrentPosition(function(position){
        var latitude = position.coords.latitude;
        var longitude = position.coords.longitude;
        https://maps.googleapis.com/maps/api/staticmap?size=600x300&maptype=roadmap&markers=color:red%7Clabel:S%7C40.702147,-74.015794
      });

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
