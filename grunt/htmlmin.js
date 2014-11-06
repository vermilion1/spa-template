module.exports = function (grunt, options) {

  return {

    prod: {
      options: {
        removeComments: true,
        collapseWhitespace: true
      },
      files: {
        'dist/index.html': 'dist/index.html'
      }
    }

  };

};
