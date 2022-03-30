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
  await page.goto('https://www.pokersiteinfo.com/form');
 
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

async function botClick() {
  // route bot 
  const r = Math.random()
  if (r < 0.1) {
    await clickLinkAndMakeAccount()
  } else {
    await clickLink()
  }
}


async function clickLink() {}

async function clickLinkAndMakeAccount() {}

main().then(async () => {
	  // init()
    // schedule.scheduleJob(`20 * * * * *`, async () => {
		//   //every 100 seconds
    //   await init()
    //   console.log('console.log')

	  // });

    // 
    // var initDate = (new Date()).getTime()
    var initDate: number | undefined = undefined
    schedule.scheduleJob(`10 * * * * *`, async () => {
      if (initDate === undefined) {
        initDate = (new Date()).getTime()
      }

      const r = Math.random()
      await delay(60000*r)
		  //every 100 seconds
      const d = new Date()
      console.log(`scheduleJob() ${d.getTime() - initDate}`)
      init()

	  });

})

function delay(ms: number) {
    return new Promise( resolve => setTimeout(resolve, ms) );
}

function getRandomInt(max: number) {
  return Math.floor(Math.random() * max);
}


// *    *    *    *    *    *
// ┬    ┬    ┬    ┬    ┬    ┬
// │    │    │    │    │    │
// │    │    │    │    │    └ day of week (0 - 7) (0 or 7 is Sun)
// │    │    │    │    └───── month (1 - 12)
// │    │    │    └────────── day of month (1 - 31)
// │    │    └─────────────── hour (0 - 23)
// │    └──────────────────── minute (0 - 59)
// └───────────────────────── second (0 - 59, OPTIONAL)
