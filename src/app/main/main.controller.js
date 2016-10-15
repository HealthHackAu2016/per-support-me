(function() {
  'use strict';

  angular
    .module('healthhack')
    .controller('MainController', MainController);

  /** @ngInject */
  function MainController($timeout, webDevTec, toastr) {
    var vm = this;

    vm.doSomething = doSomething;

    activate();

    function activate() {
      // simulate a constructor
    }

    function doSomething() {
      // code...
    }
  }
})();
