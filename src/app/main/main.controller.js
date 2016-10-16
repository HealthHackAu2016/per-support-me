(function() {
  'use strict';

  angular
    .module('healthhack')
    .controller('MainController', MainController);

  /** @ngInject */
  function MainController($scope, storiesService) {
    var vm = this;
    
    vm.changeView = changeView;
    vm.inspectedStory;
    vm.inspectStory = inspectStory;
    vm.results = storiesService.getUserStories();
    vm.showUserStories = true;
    vm.saveProfile = {
      name: 'Save My Profile',
      isSelected: false
    };
    vm.saveProfileEventName = 'toggleSaveProfile';
    vm.search = '';
    vm.selectTagEventName = 'selectTag';
    vm.tagCategories = storiesService.getTagCategories();
    
    activate();

    function activate() {
      // simulate a constructor
    }
  
    /** Tag selection event handler. */
    $scope.$on(vm.selectTagEventName, function() {
      filterTags();
    });
    
    /** Save profile option event handler. */
    $scope.$on(vm.saveProfileEventName, function() {
      // TODO: Handle profile saving.
      console.info('Save Profile: ' + vm.saveProfile.isSelected);
    });
    
    /**
     * Get user stories or service provider stories.
     * @param {boolean} showUsers - show user stories if `true`; show service provider stories otherwise.
     */
    function changeView(showUsers) {
      vm.showUserStories = showUsers;
      
      vm.results = (showUsers) ?
        storiesService.getUserStories() : storiesService.getServiceStories();
    }
    
    function inspectStory(story) {
      if (vm.inspectedStory) {
        vm.inspectedStory.show = false;
      }
      story.show = true;
      vm.inspectedStory = story;
    }
  
    /** Filter stories based on selected tags. */
    function filterTags() {
  
      var selectedTagNames = _.chain(vm.tagCategories)
        .map(function(category) { return category.tags; })
        .flattenDeep()
        .filter(function(tag) { return tag.isSelected === true; })
        .map(function(tag) { return tag.name; })
        .value();
      
      // Show all stories
      // Perform filtering only if at least one `tag` is selected.
      vm.changeView(vm.showUserStories);
      
      if (selectedTagNames && selectedTagNames.length > 0) {
        vm.results = vm.results.filter(function(result) {
          return (result.tags.length >= selectedTagNames.length) && matchTags(selectedTagNames, result.tags);
        });
      }
      
      function matchTags(needle, haystack) {
        for(var i = 0; i < needle.length; i++) {
          if(haystack.indexOf(needle[i].toLowerCase()) === -1)
            return false;
        }
        return true;
      }
    }
  }
})();
