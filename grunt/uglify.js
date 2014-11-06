module.exports = function (grunt, options) {

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
