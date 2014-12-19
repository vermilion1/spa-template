var configFile = require('./config');

module.exports = function(config) {
  config.set({
    browsers: ['Chrome'],
    frameworks: ['mocha', 'chai', 'sinon', 'browserify'],
    files: configFile.test.files,
    reporters: 'dots',
    preprocessors: configFile.test.preprocessors,
    browserify: {
      transform: ['hbsfy', 'es6ify'],
      extensions: ['.hbs', '.js']
    }
  });
};
