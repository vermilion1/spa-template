'use strict';

module.exports = function () {

  return {

    prod: {
      options: {
        removeComments: true,
        collapseWhitespace: true,
        minifyJS: true,
        minifyCSS: true
      },
      files: {
        'dist/index.html': 'dist/index.html'
      }
    }

  };

};
