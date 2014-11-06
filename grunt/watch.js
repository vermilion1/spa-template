module.exports = function (grunt, options) {

  return {

    js: {
      files: ['<%= jshint.all %>'],
      tasks: ['js'],
      options: {
        interrupt: true
      }
    },

    index: {
      files: ['app/index.html'],
      tasks: ['preprocess:dev']
    },

    less: {
      files: ['app/less/**/*.less'],
      tasks: ['less']
    },

    livereload: {
      files: ['dist/index.html', 'dist/stylesheets/*.css'],
      options: {
        livereload: true
      }
    }

  };

};
