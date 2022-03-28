// require('@babel/polyfill');

// import { sequelize } from './db'
// import Store from './db/models/Store'
// const { run, quickAddJob } = require("graphile-worker");
// require('chromedriver');
// var webdriver = require('selenium-webdriver');
// const {Builder, By, Key, until} = require('selenium-webdriver');
// import job from './cron'
// const chrome = require('selenium-webdriver/chrome');
// import * as schedule from "node-schedule";
// const request = require('request')
// const proxy = require('selenium-webdriver/proxy');

// let options = new chrome.Options();
// options.setChromeBinaryPath(process.env.CHROME_BINARY_PATH);
// let serviceBuilder = new chrome.ServiceBuilder(process.env.CHROME_DRIVER_PATH);

// //Don't forget to add these for heroku
// // options.addArguments("--headless");
// // options.addArguments("--disable-gpu");
// // options.addArguments("--no-sandbox");
// // const proxy = 'fixie:SeN2772qjHvGkaR@velodrome.usefixie.com:80'
// const proxy_address = '169.197.83.75:25383:3t3mf:x4nbdt2h'

// options.addArguments(`--proxy-server=https://${proxy_address}`)


// let driver = new webdriver.Builder()
// 	.forBrowser('chrome')
// 	.setChromeOptions(options)
// 	.setChromeService(serviceBuilder)
// 	.build();

 

// async function main() {

 
// }
// // a sid: ACb63a2c5452d7cb241482a3fcb27e21c1
// // auth: 823fd52afe70888c39873c2286d0eff3

// // curl 'https://api.twilio.com/2010-04-01/Accounts/ACb63a2c5452d7cb241482a3fcb27e21c1/Messages.json' -X POST \
// // --data-urlencode 'To=+14016880688' \
// // --data-urlencode 'MessagingServiceSid=MGbabec57d878f8deb97ff98f31ea8188c' \
// // --data-urlencode 'Body=test' \
// // -u ACb63a2c5452d7cb241482a3fcb27e21c1:823fd52afe70888c39873c2286d0eff3

 

// function getRandomInt(max: number) {
// 	return Math.floor(Math.random() * max);
// }

 
// const url = 'https://www.google.com/'
//  // const base = 'http://127.0.0.1:8080'
 


// function delay(ms: number) {
//     return new Promise( resolve => setTimeout(resolve, ms) );
// }

 

// async function init() {
//   	try {
// 		await driver.get(url);
// 		const aboutBtn = await driver.findElement(By.xpath('/html/body/div[1]/div[1]/a[1]'))
// 		const text = await aboutBtn.getText()
// 		console.log(text)
 
//     } finally {
		
// 	}
// }

// main().then(async () => {
// 	await init()

//  	schedule.scheduleJob(`10 * * * * *`, async () => {
// 		//every 100 seconds

// 	});
// })
