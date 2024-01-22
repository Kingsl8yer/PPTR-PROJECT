const puppeteer = require("puppeteer");

describe("My First Puppeteer Test", () => {
  it("should launch the browser", async () => {
    const browser = await puppeteer.launch({
      headless: false,
        slowMo: 50, // slow down by 50ms
        devtools: false // it will not open dev tools
    });
    const page = await browser.newPage();
    await page.goto("http://example.com/");
    await page.waitForTimeout(3000); // wait for 3 seconds
    await page.waitForSelector('h1') // wait for the page to load the element before continuing with the test code below
    await browser.close();
  });
});
