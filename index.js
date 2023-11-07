const playwright = require("playwright");

async function sleep(time) {
  return new Promise((resolve) => {
    setTimeout(resolve, time);
  });
}

async function main() {
  const browser = await playwright.chromium.launch({ headless: false });
  const context = await browser.newContext();
  const page = await context.newPage();

  await page.goto("https://submission07.itch.io/sisyphus-ascends-idle");
  await sleep(1e10);
}

void main();
