'use strict';

module.exports = function () {

  return {

    options: {
      jshintrc: true
    },

    all: [
      'Gruntfile.js',
      'grunt/*.js',
      'app/js/src/**/*.js',
      'app/js/tests/**/*.js'
    ]

  };

};
