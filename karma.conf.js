var configFile = require('./config');

module.exports = function(config) {
  config.set({
    browsers: ['Chrome'],
    frameworks: ['mocha', 'chai', 'sinon', 'browserify'],
    files: configFile.karma.files,
    reporters: 'dots',
    preprocessors: configFile.karma.preprocessors,
    browserify: {
      transform: ['hbsfy', 'es6ify'],
      extensions: ['.hbs', '.js']
    }
  });
};
