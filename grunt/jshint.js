module.exports = function (grunt, options) {

  return {

    options: {
      jshintrc: true
    },

    all: [
      'Gruntfile.js',
      'grunt/*.js',
      'app/src/*.js',
      'app/spec/*.js'
    ]

  };

};
