const puppeteer = require("puppeteer");

describe("My First Puppeteer Test", () => {
  it("should launch the browser", async () => {
    const browser = await puppeteer.launch({
      headless: false,
      slowMo: 50, // slow down by 50ms
      devtools: false, // it will not open dev tools
    });
    const page = await browser.newPage();
    await page.goto("https://devexpress.github.io/testcafe/example");
    await page.type("#developer-name", "Mike", { delay: 0 }); // delay 0ms
    await page.click("#tried-test-cafe", { clickCount: 1 }); // click once
    await page.select("#preferred-interface", "JavaScript API"); // select by value attribute value of JavaScript API
    await page.type("#comments", "Here is some comment", { delay: 0 }); 
    await page.click("#submit-button");
    await page.waitForSelector(".result-content"); // wait for selector to load on the page before closing the browser
    await page.waitForTimeout(3000);
    await browser.close();
  });
});
