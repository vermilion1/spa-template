module.exports = function (grunt, options) {

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
