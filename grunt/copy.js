module.exports = function (grunt, options) {

  return {

    prod: {
      files: [
        {
          cwd: 'app/js/build/modules',
          dest: 'dist/js',
          expand: true,
          src: '*'
        }
      ]
    }

  };

};
