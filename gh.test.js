let page;

describe("Github page tests", () => {
  beforeEach(async () => {
    page = await browser.newPage();
    await page.goto("https://github.com/team");
  });

  test("The h1 header content'", async () => {
    const firstLink = await page.$("header div div a");
    await firstLink.click();
    await page.waitForSelector("h1", { timeout: 60000 });
    const title2 = await page.title();
    expect(title2).toEqual("GitHub: Where the world builds software · GitHub");
  });
  afterEach(() => {
    page.close();

    test("The first link attribute", async () => {
      await page.waitForSelector("a", { timeout: 60000 });
      const actual = await page.$eval("a", (link) => link.getAttribute("href"));
      expect(actual).toEqual("#start-of-content");
    });

    test("The page contains Sign in button", async () => {
      const btnSelector = ".btn-large-mktg.btn-mktg";
      await page.waitForSelector(btnSelector, {
        visible: true,
        timeout: 60000,
      });
      const actual = await page.$eval(btnSelector, (link) => link.textContent);
      expect(actual).toContain("Sign up for free");
    });
  });
});
beforeEach(async () => {
  page = await browser.newPage();
  await page.goto("https://github.com");
});

afterEach(() => {
  page.close();
});

test("The h1 should contain 'enterprise'", async () => {
  const enterpriseLink = await page.$("header nav > ul > li:nth-child(3) > a");
  await enterpriseLink.click();

  await page.waitForNavigation({ timeout: 60000 });

  await page.waitForSelector("h1", { timeout: 60000 });
  const title3 = await page.title();
  expect(title3).toEqual(
    "Enterprise · A smarter way to work together · GitHub"
  );
});

test("The h1 should contain 'marketplace'", async () => {
  const marketplaceLink = await page.$(
    "header  nav > ul > li:nth-child(5) > a"
  );
  await marketplaceLink.click();

  await page.waitForNavigation({ timeout: 60000 });

  await page.waitForSelector("h1", { timeout: 60000 });
  const title3 = await page.title();
  expect(title3).toEqual(
    "GitHub Marketplace · to improve your workflow · GitHub"
  );
});

test("The h1 should contain 'contact'", async () => {
  const contactSales = await page.$(
    "main .btn-mktg.mr-2.mb-2.width-full.width-sm-auto.btn-muted-mktg"
  );
  await contactSales.click();

  await page.waitForNavigation({ timeout: 60000 });

  await page.waitForSelector("h3", { timeout: 60000 });
  const title3 = await page.title();
  expect(title3).toEqual(
    "Enterprise · A smarter way to work together · GitHub"
  );
}, 60000);
