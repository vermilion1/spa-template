'use strict';

module.exports = function () {

  return {

    prod: {
      files: [
        {
          cwd: 'app/js/build/modules',
          dest: 'dist/js',
          expand: true,
          src: '*'
        },
        {
          cwd: 'app/images',
          dest: 'dist/images',
          expand: true,
          src: '**'
        }
      ]
    }

  };

};
