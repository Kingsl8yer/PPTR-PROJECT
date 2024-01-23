import puppeteer from "puppeteer";
import { expect } from "chai";

describe("My First Puppeteer Test", () => {
  it("should launch the browser", async () => {
    const browser = await puppeteer.launch({
      headless: true,
      slowMo: 50, // slow down by 50ms
      devtools: false, // it will not open dev tools
    });
    const page = await browser.newPage();
    await page.goto("https://example.com/");
    const title = await page.title(); // get title of the page
    const url = await page.url(); // get url of the page
    const text = await page.$eval("h1", (element) => element.textContent); // get text of the page by using selector h1
    const count = await page.$$eval("p", (element) => element.length); // get count of the p tags
    expect(title).to.be.a("string", "Example Domain");
    expect(url).to.include("example.com");
    expect(text).to.be.a("string", "Example Domain");
    expect(count).to.equal(2);
    await browser.close();
  });
});
