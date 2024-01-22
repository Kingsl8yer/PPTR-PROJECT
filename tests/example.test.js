const puppeteer = require("puppeteer");

describe("My First Puppeteer Test", () => {
  it("should launch the browser", async () => {
    const browser = await puppeteer.launch({
      headless: false,
        slowMo: 50, // slow down by 50ms
        devtools: false // it will not open dev tools
    });
    const page = await browser.newPage();
    await page.goto("https://devexpress.github.io/testcafe/example");
    await page.type("#developer-name", "Mike", { delay: 0 }); // delay 0ms
    await page.waitForTimeout(3000);
    await browser.close();
  });
});
