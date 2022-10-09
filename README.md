# nodejs-webdriverIO

## Framework Checklist:
```
[/] Ability to Install Dependencies through Terminal
[/] Ability to Run All tests (or specific tests) through Terminal
[/] Can run specific tests that are 'tagged'
[/] Uses Page Object Model
[?] Can run tests via a Headless Browser
[/] Run tests in parallel
[/] Takes a screenshot upon test failures
[x] Dockerize the Project
[x] Outputs an HTML report
[x] GitHub Action integration
```

## Install Project Dependencies:
```
	npm install
```

## Run All Tests:
```
	npm test
```

## Run Critical Tests:
You add the below Mocha Option to the WDIO Config file too., so you can omit it from the below command.
```
	npm test -- --mochaOpts.grep=@critical
```


## Run A Specific Test File:
```
	npm test -- --spec=./tests/header.spec.js
```

## Run The Tests Headlessy:
```
	npm run test:headless
```


