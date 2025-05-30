exports.config = {
  user: process.env.BROWSERSTACK_USERNAME,
  key: process.env.BROWSERSTACK_ACCESS_KEY,

  services: ['browserstack'],

  specs: ['./test/compras.test.js'],
  maxInstances: 1,

  capabilities: [{
    platformName: 'iOS',
    'appium:platformVersion': '16',
    'appium:deviceName': 'iPhone 14',
    'appium:automationName': 'XCUITest',
    'appium:app': 'bs://263b978ede150f25f99039e7f9bfe18f6bd7b941',

    'bstack:options': {
      buildName: 'modulo-29-ios-tests',
      sessionName: 'compras.test.js',
      projectName: 'modulo-29',
      debug: true,
      video: true
    }
  }],

  logLevel: 'info',

  framework: 'mocha',
  reporters: ['spec'],

  mochaOpts: {
    timeout: 60000
  }
};
