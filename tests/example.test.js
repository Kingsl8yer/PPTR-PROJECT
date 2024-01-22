const puppeteer = require("puppeteer");

describe("My First Puppeteer Test", () => {
  it("should launch the browser", async () => {
    const browser = await puppeteer.launch({
      headless: false,
      slowMo: 50, // slow down by 50ms
      devtools: false, // it will not open dev tools
    });
    const page = await browser.newPage();
    await page.goto("https://example.com/");
    const title = await page.title(); // get title of the page
    const url = await page.url(); // get url of the page
    console.log("Title: " + title);
    console.log("URL: " + url);
    await browser.close();
  });
});
