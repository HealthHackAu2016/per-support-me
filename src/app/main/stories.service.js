(function() {
  'use strict';
  
  angular
    .module('healthhack')
    .factory('storiesService', storiesService);
  
  function storiesService() {
    var service = {
      getUserStories: getUserStories,
      getServiceStories: getServiceStories
    };
    
    return service;
    
    function getUserStories() {
      return [
        {
          displayUrl: 'http://cdn2-www.dogtime.com/assets/uploads/gallery/30-impossibly-cute-puppies/impossibly-cute-puppy-8.jpg',
          title: 'Bar',
          text: 'blah'
        }, {
          displayUrl: 'http://cdn2-www.dogtime.com/assets/uploads/gallery/30-impossibly-cute-puppies/impossibly-cute-puppy-8.jpg',
          title: 'Bar',
          text: 'blah'
        },      {
          displayUrl: 'http://cdn2-www.dogtime.com/assets/uploads/gallery/30-impossibly-cute-puppies/impossibly-cute-puppy-8.jpg',
          title: 'Bar',
          text: 'blah'
        }, {
          displayUrl: 'http://cdn2-www.dogtime.com/assets/uploads/gallery/30-impossibly-cute-puppies/impossibly-cute-puppy-8.jpg',
          title: 'Bar',
          text: 'blah'
        },      {
          displayUrl: 'http://cdn2-www.dogtime.com/assets/uploads/gallery/30-impossibly-cute-puppies/impossibly-cute-puppy-8.jpg',
          title: 'Bar',
          text: 'blah'
        }, {
          displayUrl: 'http://cdn2-www.dogtime.com/assets/uploads/gallery/30-impossibly-cute-puppies/impossibly-cute-puppy-8.jpg',
          title: 'Bar',
          text: 'blah'
        },      {
          displayUrl: 'http://cdn2-www.dogtime.com/assets/uploads/gallery/30-impossibly-cute-puppies/impossibly-cute-puppy-8.jpg',
          title: 'Bar',
          text: 'blah'
        }, {
          displayUrl: 'http://cdn2-www.dogtime.com/assets/uploads/gallery/30-impossibly-cute-puppies/impossibly-cute-puppy-8.jpg',
          title: 'Bar',
          text: 'blah'
        }
      ];
    }
    
    function getServiceStories() {
      return [
        {
          displayUrl: 'https://s.graphiq.com/sites/default/files/stories/t2/tiny_cat_12573_8950.jpg',
          title: 'Kitty Cat',
          text: 'blah'
        }, {
          displayUrl: 'https://s.graphiq.com/sites/default/files/stories/t2/tiny_cat_12573_8950.jpg',
          title: 'Kitty Cat',
          text: 'blah'
        },      {
          displayUrl: 'https://s.graphiq.com/sites/default/files/stories/t2/tiny_cat_12573_8950.jpg',
          title: 'Kitty Cat',
          text: 'blah'
        }, {
          displayUrl: 'https://s.graphiq.com/sites/default/files/stories/t2/tiny_cat_12573_8950.jpg',
          title: 'Kitty Cat',
          text: 'blah'
        },      {
          displayUrl: 'https://s.graphiq.com/sites/default/files/stories/t2/tiny_cat_12573_8950.jpg',
          title: 'Kitty Cat',
          text: 'blah'
        }, {
          displayUrl: 'https://s.graphiq.com/sites/default/files/stories/t2/tiny_cat_12573_8950.jpg',
          title: 'Kitty Cat',
          text: 'blah'
        },      {
          displayUrl: 'https://s.graphiq.com/sites/default/files/stories/t2/tiny_cat_12573_8950.jpg',
          title: 'Kitty Cat',
          text: 'blah'
        }, {
          displayUrl: 'https://s.graphiq.com/sites/default/files/stories/t2/tiny_cat_12573_8950.jpg',
          title: 'Kitty Cat',
          text: 'blah'
        }
      ];
    }
    
    
  }
})();
