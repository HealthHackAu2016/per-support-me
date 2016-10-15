(function() {
  'use strict';

  angular
    .module('healthhack')
    .controller('MainController', MainController);

  /** @ngInject */
  function MainController() {
    var vm = this;

    vm.doSomething = doSomething;
    
    vm.results = [
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

    activate();

    function activate() {
      // simulate a constructor
    }

    function doSomething() {
      // code...
    }
  }
})();
