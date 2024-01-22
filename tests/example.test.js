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
    await page.waitForSelector("h1"); // waits until the "h1" selector is rendered
    await page.goto("https://dev.to/");
    await page.waitForSelector("#topbar"); // waits until the "#topbar" selector is rendered (# means its an id)
    await page.goBack(); // goes back to example.com
    await page.waitForSelector("h1");
    await page.goForward(); // goes forward to dev.to
    await page.waitForSelector("#topbar");
    await browser.close();
  });
});
