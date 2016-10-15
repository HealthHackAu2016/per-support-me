(function() {
  'use strict';

  angular
    .module('healthhack')
    .run(runBlock);

  /** @ngInject */
  function runBlock($log) {
    $log.debug('runBlock end');
  }
})();
