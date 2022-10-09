# n00b Guide

This specific doc is written for those that have never used WebdriverIO or NodeJS before.

I'll go through how I installed the libraries etc. so you can use them in your own projects :)

##  Installing NodeJS

If you're a Mac user, you can simply install Node JS using Homebrew.
However, most people use NVM (Node Version Manager) which allows you to easily switch between Node versions.

If you're not interested in using NVM and just want to get up-and-running:

Open Terminal and execute the following command:
```
   brew install node
```

## Node Version Manager:

[Run the install script in your terminal, this should be a curl command.](https://github.com/nvm-sh/nvm#install--update-script)

Once installed, scroll up in Terminal as it may mention that you need to add NVM to your PATH via your .bash_profile or .zshrc files.


## A Little Bit About NodeJS:
A Node project consists of a `package.json` file. This file contains all your project-specific dependencies and `scripts`
To install all the project's dependencies you execute the below command in a Terminal:
``` 
   // This will also create/update the package-lock.json file
   npm install
```
You can see all the other available that the creator has made inside the `scripts` object.
These normally consist of commands that start a start a local server, run some tests etc.

You can create a blank Node project by simply typing:
```
   npm init
```

There are some 'standard' Node commands. If these exist in the `package.json`, they can be executed as is:
```
   npm start
   npm build
   npm test
```

Other 'custom' commands have be prefixed with `npm run`, like:
```
   npm run build:server
   npm run test:critical
```

## Async and Sync Mode.

This framework is using Async mode in WebdriverIO, the vast majority of people that use WDIO prefer to use Sync mode but that is no longer supported in April 2021.
That mode is also not compatible with NodeJS version 16+. This is something to be aware of when Googling for solutions in WDIO.

I have created the same project using sync mode.

### Example:
```
   it("adds to cart using Sync mode", () => {
      $(#add_to_cart").click();
   });  

   it("adds to cart using Async mode", async() => {
      await$(#add_to_cart").click()
   });
```
   
Personally, two of the biggest annoyances I have with Async mode are:
- The stacktrace isn't as good as Sync mode, but hopefully this will improve now that Sync mode is being dropped in the future.
- Using certain array methods such as `find()`, `map()` and `filter()` aren't really compatible with Async WDIO code, so using standard `for()` loops is inevitable.

For Example:
```
   // Sync Mode:
   it("finds the first search result that has the text ' red' in it and clicks it", () => {
      const products = $$(".search-results);
      const desiredProduct = products.find(product) => product.getText().includes("red"));
      desiredProduct.click();
   }); 

   // Async Mode:
   it("finds the first search result that has the text ' red' in it and clicks it", async () => {
      const products = await $$(".search-results);
      for(const product of products) {
         const  = await product.getText();
         if(productText.includes("red")) {
            await product.click();
            break;
         };
      };
   }); 
   
```


## A Little Bit About WebdriverIO
WDIO relies on a config file, normally named 'wdio.conf.js' but you can name this whatever you like.
This config file will hold the location of your tests, Base URL, test runner services, reporters, logging output, hooks and many other things.

You'll have to refer to this config file when executing these tests. I've simplified this creating an `npm test` command - see the `package.json` file see the `scripts` object.

One of the many cool things about WDIO, is that is handles running test in parallel 'out of the box'.
In your `wdio.config.js` file, there will be a `maxInstances` property. This is set to a numeric value and WDIO will attempt to that many `.spec.js` files in parallel. You can also set this per `capability` if you'd prefer to run x many tests in parallel for a particular browser (I believe Safari and IE 11 don't support parallel test execution). Bear in mind, this will run the parallel tests on your machine and you may encounter 'flaky' behaviour if your machine isn't powerful enough to handle that many browser instances.

One of the other things I love about WDIO is the ease of adding commands before or after your tests or suites run.
This means automation engineers can do the following by simply adding code to the relevant 'hooks' in the `wdio.conf.js` file.
[You can read more about WDIO Config file hooks here](https://webdriver.io/docs/options#hooks)

- Delete any existing logs, screenshots, videos or artifacts from previous test runs before your tests are ran
- Take a screenshot if a test assertion fails
- Build a more comprehensive HTML/Allure/MochAwesome Test report upon test completion
- Safely shutdown a Selenium Standalone server etc.
