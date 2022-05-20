 
import * as schedule from "node-schedule";
import fetch from "node-fetch";
import * as puppeteer from "puppeteer"
import proxyChain from "proxy-chain";

var headless = false
async function main() { }

async function init() {
  const oldProxyUrl = 'http://3t3mf:x4nbdt2h@169.197.83.75:25383';
  const newProxyUrl = await proxyChain.anonymizeProxy(oldProxyUrl);

  const browser = await puppeteer.launch({
    headless: headless,
    args: [`--proxy-server=${newProxyUrl}`, '--no-sandbox'],
  });

  const page = await browser.newPage();
  await page.goto('https://www.pokersiteinfo.com/form');
 
  await page.type('#form', ' ')
  await page.waitFor(2000);

  await page.focus('#submit')


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
    //await clickLink()
  }
}


async function clickLink(page: any, browser: any, newProxyUrl: any) {
  console.log(`clickLinkAndMakeAccount()`)

  await page.goto('https://www.pokersiteinfo.com/bovada');
 
  const xp = `/html/body/app-bovada/div/main/article/div/div[15]/p/a`
  await page.waitForXPath(xp) // ✅
  const linkEx = await page.$x(xp)
  if (linkEx.length > 0) {
    await linkEx[0].click()
  }
}

async function makeAccount(page: any, browser: any, newProxyUrl: any) {
  await page.type('#form', 'Johnny')
  await page.waitFor(2000);
  await page.focus('#submit')

  await page.keyboard.type('\n');
  await page.waitFor(10000);

  await browser.close();
  // await proxyChain.closeAnonymizedProxy(newProxyUrl, true);
}

async function clickLinkAndMakeAccount() {
  // const oldProxyUrl = 'http://3t3mf:x4nbdt2h@169.197.83.75:25383';
  // const newProxyUrl = await proxyChain.anonymizeProxy(oldProxyUrl);

  // const browser = await puppeteer.launch({
  //   headless: headless,
  //   args: [`--proxy-server=${newProxyUrl}`, '--no-sandbox'],
  // });

  // const page = await browser.newPage();

  // await clickLink(page, browser, newProxyUrl)
  // await makeAccount(page, browser, newProxyUrl)

  /* * * */
}


async function sendDiscordMessage(message: string) {
  return new Promise <{}> (async (resolve, reject) => {
      const url = `https://api.stratosnetwork.com/shared/sendDiscordMessage`
  
       const body = {
          message: message,
      }

      
      const response = await fetch(url, {
        method: 'POST', 
        body: JSON.stringify(body),
        headers: {'Content-Type': 'application/json'}
      });
      resolve({})
 
  })
}

main().then(async () => {
	  // init()
    // schedule.scheduleJob(`20 * * * * *`, async () => {
		//   //every 100 seconds
    //   await init()
    //   console.log('console.log')

	  // });

    // 
    // var initDate = (new Date()).getTime()

    const s1 = `0 * 10 * * *`
    const s2 = `0 * 11 * * *`
    const s3 = `0 * 12 * * *`
    const s4 = `0 * 13 * * *`
    const s5 = `0 * 14 * * *`
    const s6 = `0 * 15 * * *`
    const s7 = `0 * 16 * * *`
    const s8 = `0 * 17* * *`
    const s9 = `0 * 18 * * *`
    const s10 = `0 * 19 * * *`
    const s11 = `0 * 20 * * *`
    const s12 = `0 * 21 * * *`
    const s13 = `0 * 22 * * *`
    const s14 = `0 * 23 * * *`
    const s15 = `0 * 24 * * *`
    const s16 = `0 * 0 * * *`
    const s17 = `0 * 1 * * *`
    const s18 = `0 * 2 * * *`
    const s19 = `0 * 3 * * *`
    const s20 = `0 * 4 * * *`
    const s21 = `0 * 5 * * *`
    const s22 = `0 * 6 * * *`
    const s23 = `0 * 7 * * *`
    const s24 = `0 * 8 * * *`
    const s25 = `0 * 9 * * *`


    const arr = [s1, s2, s3, s4, s5, s6, s7, s8, s9, s10, s11, s12, s13, s14, s15, s16, s17, s18, s19, s20, s21, s22, s23, s24, s25];
    arr.map(x => {
      schedule.scheduleJob(x, async () => {
        runCheck(x)
      });
    })
   

})

async function runCheck(x: string) {
  const r = Math.random()
  if (r < 0.3) { return }
  const M = 45 // number of minutes 
  await delay(100*60*M*r)
  const d = new Date()
  sendDiscordMessage(x)

  return 
  init()
}

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
