const {Builder, By} = require('selenium-webdriver');
const chromedriver = require('chromedriver');

(async function example() {
    let driver = await new Builder().forBrowser('chrome').build();
    await driver.get('https://commerceos.staging.devpayever.com/registration/fashion');
    driver.manage().setTimeouts({implicit: (10000)});
    
    //await  driver.findElement(By.xpath('//input[@formcontrolname="firstName"]')).click();
    await driver.wait(until.elementLocated(By.xpath('//input[@formcontrolname="firstName"]')),10000).sendKeys("webElement");
   // await  driver.findElement(By.xpath('//input[@formcontrolname="firstName"]')).clear();
    //await  driver.findElement(By.xpath('//input[@formcontrolname="firstName"]')).sendKeys("webElement");

    // Get attribute of current active element"
   // let attr = await driver.switchTo().activeElement().getAttribute("title");
   // console.log(`${attr}`)
})();