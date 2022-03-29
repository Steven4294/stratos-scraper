require('@babel/polyfill');
const puppeteer = require('puppeteer');
const proxyChain = require('proxy-chain');
import * as schedule from "node-schedule";


async function main() { }

async function init() {
  const oldProxyUrl = 'http://3t3mf:x4nbdt2h@169.197.83.75:25383';
  const newProxyUrl = await proxyChain.anonymizeProxy(oldProxyUrl);

  const browser = await puppeteer.launch({
    headless: false,
    args: [`--proxy-server=${newProxyUrl}`, '--no-sandbox'],
  });

  const page = await browser.newPage();
  await page.goto('https://www.pokersiteinfo.com/landing');
 
   await page.type('#form', 'Test Name2')
   await page.waitFor(2000);
  //  await page.click('#submit')
 
  //  const xp = "/html/body/app-landing/button"
  // await page.waitForXPath(xp) // ✅
  // const linkEx = await page.$x(xp)
  // if (linkEx.length > 0) {
  //   console.log('clicking')
  //   await linkEx[0].click()
  // }
  // await page.waitFor(5000);
   // await page.focus('#submit')
  await page.focus('#submit')
  // await page.waitFor(500);

  await page.keyboard.type('\n');
  await page.waitFor(10000);

  await browser.close();
  await proxyChain.closeAnonymizedProxy(newProxyUrl, true);
}

main().then(async () => {
	  init()
    schedule.scheduleJob(`20 * * * * *`, async () => {
		  //every 100 seconds
      await init()
      console.log('console.log')

	  });

})
