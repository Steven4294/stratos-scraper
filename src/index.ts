require('@babel/polyfill');
const puppeteer = require('puppeteer');
const proxyChain = require('proxy-chain');

(async() => {
	
  const oldProxyUrl = 'http://3t3mf:x4nbdt2h@169.197.83.75:25383';
  const newProxyUrl = await proxyChain.anonymizeProxy(oldProxyUrl);

  const browser = await puppeteer.launch({
    args: [`--proxy-server=${newProxyUrl}`],
  });

  const page = await browser.newPage();
  await page.goto('https://httpbin.org/ip');
  const element = await page.$('pre');
  const text = await page.evaluate((element: { textContent: any; }) => element.textContent, element);
  await page.screenshot({ path: 'screenshots/1.png'})
  console.log('origin')
  console.log(text);
  await browser.close();

  await proxyChain.closeAnonymizedProxy(newProxyUrl, true);
})();

async function main() {

 
}


const url = 'https://www.google.com/'
 // const base = 'http://127.0.0.1:8080'
 


async function init() {
  	try {
		// await driver.get(url);
		// const aboutBtn = await driver.findElement(By.xpath('/html/body/div[1]/div[1]/a[1]'))
		// const text = await aboutBtn.getText()
		// console.log(text)
 
    } finally {
		
	}
}

main().then(async () => {
	await init()


})
