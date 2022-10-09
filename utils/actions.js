const fs = require("fs-extra");

async function cleanUpDirectory(directoryName) {
   await fs.ensureDir(`./${directoryName}`);
   const directory = await fs.readdir(`./${directoryName}`);
   const filesToDelete = directory.filter((file) => {
      // add all files apart from the "ignore.me" file
      return file !== "ignore.me";
   });
   filesToDelete.forEach((file) => {
      fs.removeSync(`./${directoryName}/${file}`);
   });
};

async function takeScreenshotOfFailure(test) {
   const specialCharacters = /[:<>|*?@]/g;
   const describeBlockName = `${test.parent}`.replace(specialCharacters, "");
   const nameOfTest = `${test.title}`.replace(specialCharacters, "-")
   fs.ensureDirSync(`./screenshots/${describeBlockName}`);
   return await browser.saveScreenshot(`./screenshots/${describeBlockName}/${nameOfTest}.png`);
};


module.exports = {
   cleanUpDirectory,
   takeScreenshotOfFailure
}

