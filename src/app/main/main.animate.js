(function() {
  'use strict';

  angular
    .module('healthhack')
    .animation('.slide', function() {
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
    })
    .animation('.fade', function() {
      var SPEED = 300;
      return {
        enter: function(element, done) {
          element.css('display', 'none');
          setTimeout(function() {
            $(element).fadeIn(SPEED, done);
          }, SPEED);
        },
        leave: function(element, done) {
          $(element).fadeOut(SPEED, done);
        },
        move: function(element, done) {
          element.css('display', 'none');
          $(element).fadeIn(SPEED, done);
        }
      }
    });
})();
