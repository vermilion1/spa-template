'use strict';

module.exports = function () {

  return {

    dist: {
      files: [{
        expand: true,
        cwd: 'dist/stylesheets',
        src: '*.css',
        dest: 'dist/stylesheets'
      }]
    }

  };

};
