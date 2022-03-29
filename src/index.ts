require('@babel/polyfill');
const puppeteer = require('puppeteer');
const proxyChain = require('proxy-chain');
import * as schedule from "node-schedule";


async function main() { }

async function init() {
  const oldProxyUrl = 'http://3t3mf:x4nbdt2h@169.197.83.75:25383';
  const newProxyUrl = await proxyChain.anonymizeProxy(oldProxyUrl);

  const browser = await puppeteer.launch({
    headless: true,
    args: [`--proxy-server=${newProxyUrl}`, '--no-sandbox'],
  });

  const page = await browser.newPage();
  // await page.goto('https://www.pokersiteinfo.com/landing');
  await page.goto('http://localhost:4200/landing');
  // const element = await page.$('pre');
  const element = await page.$('#title')
   await page.type('#form', 'Test Name')
  const text = await page.evaluate((element: { textContent: any; }) => element.textContent, element);
  // // await page.screenshot({ path: 'screenshots/1.png'})
  console.log(text)
  // console.log('origin')
  // console.log(text);
  await page.waitFor(500);

  await page.focus('#submit')
  await page.focus('#submit')

await page.keyboard.type('\n');

await page.waitFor(500);


  await browser.close();
  await proxyChain.closeAnonymizedProxy(newProxyUrl, true);
}

main().then(async () => {
	  init()
    schedule.scheduleJob(`10 * * * * *`, async () => {
		  //every 100 seconds
      await init()
      console.log('console.log')

	  });

})
