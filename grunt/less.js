module.exports = function (grunt, options) {

  return {

    all: {
      files: {
        'dist/stylesheets/style.css': 'app/less/style.less',
        'dist/stylesheets/loading.css': 'app/less/loading.less'
      }
    }

  };

};
