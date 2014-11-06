module.exports = function (grunt, options) {

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
