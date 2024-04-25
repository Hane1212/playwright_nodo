import { test as setup, expect } from '@playwright/test';

const authFile = 'playwright/.auth/user.json';

setup('authenticate', async ({ page }) => {
    const navigationPromise = page.waitForNavigation({
        waitUntil: "domcontentloaded",
    });
  // Perform authentication steps. Replace these actions with your own.
  await page.goto('https://accounts.google.com/signin/v2/identifier?hl=en&flowName=GlifWebSignIn&flowEntry=ServiceLogin');
  await navigationPromise;
    await page.waitForSelector('input[type="email"]');
    await page.type('input[type="email"]', "youremail");
    await page.click("#identifierNext");
    await page.waitForSelector('input[type="password"]', {state: "visible"});
    await page.type('input[type="password"]', "yourpassword");
    await page.waitForSelector("#passwordNext", {state: "visible"});
    await page.click("#passwordNext");
    await navigationPromise;
});