const puppeteer = require("puppeteer");

describe("My First Puppeteer Test", () => {
  it("should launch the browser", async () => {
    const browser = await puppeteer.launch({
      headless: false,
    });
    const page = await browser.newPage();
    await page.goto("http://example.com/");
    await page.waitForSelector('h1') // wait for the page to load the element before continuing with the test code below
    await browser.close();
  });
});
