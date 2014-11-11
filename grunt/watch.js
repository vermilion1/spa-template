'use strict';

module.exports = function () {

  return {

    js: {
      files: ['<%= jshint.all %>'],
      tasks: ['jshint', 'browserify'],
      options: {
        interrupt: true
      }
    },

    index: {
      files: ['app/index.html'],
      tasks: ['preprocess:dev'],
      options: {
        interrupt: true
      }
    },

    less: {
      files: ['app/less/**/*.less'],
      tasks: ['less'],
      options: {
        interrupt: true
      }
    },

    livereload: {
      files: ['dist/index.html', 'dist/stylesheets/*.css'],
      options: {
        interrupt: true,
        livereload: true
      }
    }

  };

};
