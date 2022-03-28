require('@babel/polyfill');

import { sequelize } from './db'
import Store from './db/models/Store'
const { run, quickAddJob } = require("graphile-worker");
require('chromedriver');
var webdriver = require('selenium-webdriver');
const {Builder, By, Key, until} = require('selenium-webdriver');
import job from './cron'
const chrome = require('selenium-webdriver/chrome');
import * as schedule from "node-schedule";
const request = require('request')
const proxy = require('selenium-webdriver/proxy');

let options = new chrome.Options();
options.setChromeBinaryPath(process.env.CHROME_BINARY_PATH);
let serviceBuilder = new chrome.ServiceBuilder(process.env.CHROME_DRIVER_PATH);

//Don't forget to add these for heroku
// options.addArguments("--headless");
// options.addArguments("--disable-gpu");
// options.addArguments("--no-sandbox");
// const proxy = 'fixie:SeN2772qjHvGkaR@velodrome.usefixie.com:80'
// options.addArguments(`--proxy-server=https://${proxy}`)


let driver = new webdriver.Builder()
	.forBrowser('chrome')
	.setChromeOptions(options)
	.setChromeService(serviceBuilder)
	.build();

 

async function main() {

 
}
// a sid: ACb63a2c5452d7cb241482a3fcb27e21c1
// auth: 823fd52afe70888c39873c2286d0eff3

// curl 'https://api.twilio.com/2010-04-01/Accounts/ACb63a2c5452d7cb241482a3fcb27e21c1/Messages.json' -X POST \
// --data-urlencode 'To=+14016880688' \
// --data-urlencode 'MessagingServiceSid=MGbabec57d878f8deb97ff98f31ea8188c' \
// --data-urlencode 'Body=test' \
// -u ACb63a2c5452d7cb241482a3fcb27e21c1:823fd52afe70888c39873c2286d0eff3

interface WhaleWatcherPlayer {
	name: String
    table: String
    stakes: String
}


function getRandomInt(max: number) {
	return Math.floor(Math.random() * max);
}

const arr = ['JohnA1', 'JohnC1', 'JohnT1', 'JohnE1', 'JohnF1', 'JohnG2']

const n = getRandomInt(5)
const username = arr[n]
console.log(username)
const password = 'pw'
const url = 'https://kingsclubpkr.com/'
const base = 'https://api.getwhalewatcher.com'
// const base = 'http://127.0.0.1:8080'
const post_url = `${base}/message`


function delay(ms: number) {
    return new Promise( resolve => setTimeout(resolve, ms) );
}

async function scrapeKings(initial: boolean) {
	if (initial === true) {
		const closeButton = await driver.findElement(By.xpath('/html/body/div[6]/div[3]/span'))
		// await delay(2000)
		closeButton.click()
		 await delay(300)
	}

	const results = await getTables_v2()
	// await getTables()
 
	var options = {
		'method': 'POST',
		'url': post_url,
		'headers': {
		  'Content-Type': 'application/json'
		},
		body: JSON.stringify({
			"type":"Kingsclub",
		"players": results})  
	};
	request(options);
}

async function loadKings() {
  try {


	await driver.get(url);
	 

	await delay(3500)
// /html/body/div[18]/div[1]/div/input[1]
	await driver.findElement(By.xpath('/html/body/div[18]/div[1]/div/input[1]')).sendKeys(username)
	await driver.findElement(By.xpath('/html/body/div[18]/div[1]/div/input[2]')).sendKeys(password, Key.RETURN)
	await delay(500)
	// /html/body/div[20]/div[1]/div/span[2]
	const playButton = await driver.findElement(By.xpath('/html/body/div[20]/div[1]/div/span[2]'))
	await delay(500)
	playButton.click()

	  
    // await driver.findElement(By.name('q')).sendKeys('webdriver', Key.RETURN);
    // await driver.wait(until.titleIs('webdriver - Google Search'), 1000);
    } finally {
		
	}
}

async function getTables_v2() {

	var results: WhaleWatcherPlayer[] = []
	const r1 = await getTable(1, true)
	const r2 = await getTable(2)
	const r3 = await getTable(3)
	const r4 = await getTable(4)
	const r5 = await getTable(5)
	const r6 = await getTable(6)
	const r7 = await getTable(7)
	const r8 = await getTable(8)
	const r9 = await getTable(8)
	const r10 = await getTable(8)

	const arrs = [r1, r2, r3, r4, r5, r6, r7, r8, r9, r10]
	arrs.map(elem => {
		results = results.concat(elem)
	})
	console.log(`~~~~~~~~`)
	console.log(results)
	return new Promise<WhaleWatcherPlayer[]>((resolve, reject) => {
		resolve(results)
	})
}

async function getTable(index: number, isFirst = false): Promise<WhaleWatcherPlayer[]> {
	var stakes = ''
	var tableName = ''
	try {
		// /html/body/div[13]/div[7]/div[1]/div[1]/div[2]/div/div[1]
		await driver.findElement(By.xpath(`/html/body/div[13]/div[7]/div[1]/div[1]/div[2]/div/div[${index}]/div[1]`)).click()
		await delay(300)
		await driver.findElement(By.xpath(`/html/body/div[13]/div[7]/div[1]/div[1]/div[2]/div/div[${index}]/div[1]`)).click()
		if (isFirst) {
			await delay(1200)
		} else { await delay(1000) }
										// /html/body/div[13]/div[7]/div[1]/div[1]/div[2]/div/div[4]/div[2]

		const stakesElem = driver.findElement(By.xpath(`html/body/div[13]/div[7]/div[1]/div[1]/div[2]/div/div[${index}]/div[2]`))
		stakes = await stakesElem.getText()

		const tableElem = driver.findElement(By.xpath(`/html/body/div[13]/div[7]/div[1]/div[1]/div[2]/div/div[${index}]/div[1]`))
		tableName = await tableElem.getText()

 		await driver.findElement(By.xpath(`/html/body/div[13]/div[7]/div[1]/div[1]/div[2]/div/div[${index}]/div[1]`)).click()
		await delay(300)
	} finally { }

	return getScreennames(stakes, tableName)
}

function getScreennames(stakes: string, tableName: string): Promise<WhaleWatcherPlayer[]> {
	return new Promise<WhaleWatcherPlayer[]>((resolve, reject) => {
		const results: WhaleWatcherPlayer[] = []

		// for each seat in details
		const x1 = '/html/body/div[13]/div[7]/div[2]/div[2]/div/div[1]/div[1]/span[1]'
		const x2 = '/html/body/div[13]/div[7]/div[2]/div[2]/div/div[1]/div[2]/span[1]'
		const x3 = '/html/body/div[13]/div[7]/div[2]/div[2]/div/div[1]/div[3]/span[1]'
		const x4 = '/html/body/div[13]/div[7]/div[2]/div[2]/div/div[1]/div[4]/span[1]'
		const x5 = '/html/body/div[13]/div[7]/div[2]/div[2]/div/div[1]/div[5]/span[1]'
		const x6 = '/html/body/div[13]/div[7]/div[2]/div[2]/div/div[1]/div[6]/span[1]'
		const x7 = '/html/body/div[13]/div[7]/div[2]/div[2]/div/div[1]/div[7]/span[1]'
		const arr = [x1, x2 , x3, x4, x5, x6, x7]

		arr.map(async xpath => {
			try {
				const elem = await driver.findElement(By.xpath(xpath))
				const text = await elem.getText()
				await delay(300)
				results.push({
					name: text,
					stakes: stakes,
					table: tableName,
				})
			} catch {
				resolve(results)
			}
		})
		resolve(results)
	});
}

main().catch((err) => {
	console.error(err);
    process.exit(1);
}).then(async () => {
	await loadKings()

	var initial = true
	schedule.scheduleJob(`${n*10} * * * * *`, async () => {
		//every 40 seconds
		console.log(initial)
		await scrapeKings(initial)
		initial = false
	});
})
