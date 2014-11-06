module.exports = function (grunt, options) {

  return {

    options: {
      context: {
        title: options.package.title,
        description: options.package.description
      }
    },

    dev: {
      src: 'app/index.html',
      dest: 'dist/index.html',
      options: {
        context: {
          dev: true
        }
      }
    },

    prod: {
      src: 'app/index.html',
      dest: 'dist/index.html'
    }

  };

};
