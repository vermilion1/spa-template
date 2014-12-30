var configFile = require('./config');

module.exports.config = {

  seleniumServerJar: configFile.protractor.seleniumServerJar,
  chromeDriver: configFile.protractor.chromeDriver,
  specs: configFile.protractor.specs,

  capabilities: {
    'browserName': 'chrome'
  },

  jasmineNodeOpts: {
    showColors: true
  }

};
