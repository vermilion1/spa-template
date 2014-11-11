'use strict';

module.exports = function () {

  return {

    dist: {
      files: [{
        expand: true,
        cwd: 'dist/js',
        src: '*.js',
        dest: 'dist/js'
      }]
    }

  };

};
