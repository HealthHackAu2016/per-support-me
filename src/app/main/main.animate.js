(function() {
  'use strict';

  angular
    .module('healthhack')
    .animation('.fade', function() {
      var SPEED = 300;
      return {
        enter: function(element, done) {
          element.css('display', 'none');
          setTimeout(function() {
            $(element).slideDown(SPEED, done);
          }, SPEED);
        },
        leave: function(element, done) {
          $(element).slideUp(SPEED, done);
        },
        move: function(element, done) {
          element.css('display', 'none');
          $(element).slideDown(SPEED, done);
        }
      }
    });
})();
