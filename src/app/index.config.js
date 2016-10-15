(function() {
  'use strict';

  angular
    .module('healthhack')
    .config(config);

  /** @ngInject */
  function config($logProvider) {
    // Enable log
    $logProvider.debugEnabled(true);
  }
})();
