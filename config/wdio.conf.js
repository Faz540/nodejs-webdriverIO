const actions = require("../utils/actions");

exports.config = {
    baseUrl: "http://automationpractice.com",
    specs: [
        "./tests/*.spec.js"
    ],
    maxInstances: 10,
    capabilities: [{
        browserName: "chrome",
        acceptInsecureCerts: true,
        "goog:chromeOptions": {
            "args": [
                // "--headless",
                "--window-size=1920,1080"
            ]
        }
    }],
    // Level of logging verbosity: trace | debug | info | warn | error | silent
    logLevel: "error",
    // Default timeout for all waitFor* commands.
    waitforTimeout: 10000,
    services: ["chromedriver"],
    framework: "mocha",
    reporters: ["spec"],
    mochaOpts: {
        ui: "bdd",
        timeout: 60000
    },
    // WDIO Hooks:
    onPrepare: async () => {
        await actions.cleanUpDirectory("screenshots");
    },
    before: async () => {
        await browser.url("/index.php");
    },
    afterTest: async (test, { error, result, duration, passed, retries }) => {
        // If a test fails or errors, take a screenshot.
        // Test Failure = Chai assertion failure
        // Test Error = Trying to interact with an element that doesn't exist etc.
        if (passed === false) { await actions.takeScreenshotOfFailure(test); }
    },
}
