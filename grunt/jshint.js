module.exports = function (grunt, options) {

  return {

    options: {
      jshintrc: true
    },

    all: [
      'Gruntfile.js',
      'grunt/*.js',
      'app/js/src/*.js',
      'app/js/tests/*.js'
    ]

  };

};
