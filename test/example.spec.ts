import { Builder, By, WebDriver } from "selenium-webdriver";

describe("djasl", async function() {
    let driver;

    beforeAll(async function () {
        driver = await new Builder().forBrowser('chrome').build();
    })

    it("kdac", async function() {
        await driver.get('www.google.com');
        await driver.manage().setTimeouts({implicit: 500});
        let textBox = await driver.findElement(By.name('my-text'));
        let submitButton = await driver.findElement(By.css('button'));
        await textBox.sendKeys('Selenium');
        await submitButton.click();
        expect(textBox).toContain('blabla');
    })

    afterAll(async function() {
        await driver.quit();
    });
})