module.exports = function (grunt, options) {

  return {

    options: {
      context: {
        title: options.package.title,
        description: options.package.description
      }
    },

    index: {
      src: 'app/index.html',
      dest: 'dist/index.html'
    }

  };

};
