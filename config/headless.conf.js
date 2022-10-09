const parentConfig = require("./wdio.conf").config;

exports.config = {
    ...parentConfig,
    capabilities: [{
        browserName: "chrome",
        acceptInsecureCerts: true,
        "goog:chromeOptions": {
            "args": [
                "--headless",
                "--window-size=1920,1080"
            ]
        }
    }]
}
