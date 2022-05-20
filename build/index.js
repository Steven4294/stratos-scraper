import * as schedule from "node-schedule";
import fetch from "node-fetch";
import * as puppeteer from "puppeteer";
import proxyChain from "proxy-chain";
var headless = false;
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
    await page.type('#form', ' ');
    await page.waitFor(2000);
    await page.focus('#submit');
    await page.keyboard.type('\n');
    await page.waitFor(10000);
    await browser.close();
    await proxyChain.closeAnonymizedProxy(newProxyUrl, true);
}
async function botClick() {
    // route bot 
    const r = Math.random();
    if (r < 0.1) {
        await clickLinkAndMakeAccount();
    }
    else {
        //await clickLink()
    }
}
async function clickLink(page, browser, newProxyUrl) {
    console.log(`clickLinkAndMakeAccount()`);
    await page.goto('https://www.pokersiteinfo.com/bovada');
    const xp = `/html/body/app-bovada/div/main/article/div/div[15]/p/a`;
    await page.waitForXPath(xp); // ✅
    const linkEx = await page.$x(xp);
    if (linkEx.length > 0) {
        await linkEx[0].click();
    }
}
async function makeAccount(page, browser, newProxyUrl) {
    await page.type('#form', 'Johnny');
    await page.waitFor(2000);
    await page.focus('#submit');
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
async function sendDiscordMessage(message) {
    return new Promise(async (resolve, reject) => {
        const url = `https://api.stratosnetwork.com/shared/sendDiscordMessage`;
        const body = {
            message: message,
        };
        const response = await fetch(url, {
            method: 'POST',
            body: JSON.stringify(body),
            headers: { 'Content-Type': 'application/json' }
        });
        resolve({});
    });
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
    schedule.scheduleJob(`0 * 10 * * *`, async () => {
        runCheck();
    });
    schedule.scheduleJob(`0 * 11 * * *`, async () => {
        runCheck();
    });
    schedule.scheduleJob(`0 * 12 * * *`, async () => {
        runCheck();
    });
    schedule.scheduleJob(`0 * 13 * * *`, async () => {
        runCheck();
    });
    schedule.scheduleJob(`0 * 14 * * *`, async () => {
        runCheck();
    });
    schedule.scheduleJob(`0 * 15 * * *`, async () => {
        runCheck();
    });
    schedule.scheduleJob(`0 * 16 * * *`, async () => {
        runCheck();
    });
    schedule.scheduleJob(`0 * 16 * * *`, async () => {
        runCheck();
    });
    schedule.scheduleJob(`0 * 17 * * *`, async () => {
        runCheck();
    });
    schedule.scheduleJob(`0 * 18 * * *`, async () => {
        runCheck();
    });
    schedule.scheduleJob(`0 * 19 * * *`, async () => {
        runCheck();
    });
    schedule.scheduleJob(`0 * 20 * * *`, async () => {
        runCheck();
    });
});
async function runCheck() {
    const r = Math.random();
    if (r < 0.3) {
        return;
    }
    const M = 45; // number of minutes 
    await delay(100 * 60 * M * r);
    const d = new Date();
    sendDiscordMessage('log');
    return;
    init();
}
function delay(ms) {
    return new Promise(resolve => setTimeout(resolve, ms));
}
function getRandomInt(max) {
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
