exports.config = {
  runner: 'local',
  path: '/wd/hub',
  specs: ['./test/login.test.js'],
  maxInstances: 1,
  capabilities: [{
    platformName: 'iOS',
    'appium:platformVersion': '16.0',
    'appium:deviceName': 'iPhone Simulator',
    'appium:automationName': 'XCUITest',
   'appium:app': '/Users/gabri/Library/Developer/Xcode/DerivedData/LojaEBAC-sim.app'

  }],
  logLevel: 'info',
  framework: 'mocha',
  reporters: ['spec'],
  mochaOpts: {
    timeout: 60000
  }
};
