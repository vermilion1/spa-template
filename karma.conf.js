var config = require('./config');

module.exports = function(conf) {
  conf.set({
    browsers: ['PhantomJS'],
    frameworks: ['mocha', 'chai', 'sinon'],
    reporters: 'dots',
    plugins: [
      'karma-mocha',
      'karma-chai',
      'karma-sinon',
      'karma-phantomjs-launcher'
    ],
    files: config.test.files
  });
};
