var configFile = require('./config');

module.exports.config = {

  seleniumServerJar: configFile.protractor.seleniumServerJar,
  specs: configFile.protractor.specs,

  capabilities: {
    'browserName': 'chrome'
  },

  jasmineNodeOpts: {
    showColors: true
  }

};
