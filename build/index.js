"use strict";
var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    Object.defineProperty(o, k2, { enumerable: true, get: function() { return m[k]; } });
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {
    Object.defineProperty(o, "default", { enumerable: true, value: v });
}) : function(o, v) {
    o["default"] = v;
});
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (k !== "default" && Object.prototype.hasOwnProperty.call(mod, k)) __createBinding(result, mod, k);
    __setModuleDefault(result, mod);
    return result;
};
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
Object.defineProperty(exports, "__esModule", { value: true });
require('@babel/polyfill');
const { run, quickAddJob } = require("graphile-worker");
require('chromedriver');
var webdriver = require('selenium-webdriver');
const { Builder, By, Key, until } = require('selenium-webdriver');
const chrome = require('selenium-webdriver/chrome');
const schedule = __importStar(require("node-schedule"));
const request = require('request');
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
function main() {
    return __awaiter(this, void 0, void 0, function* () {
    });
}
function getRandomInt(max) {
    return Math.floor(Math.random() * max);
}
const arr = ['JohnA1', 'JohnC1', 'JohnT1', 'JohnE1', 'JohnF1', 'JohnG2'];
const n = getRandomInt(5);
const username = arr[n];
console.log(username);
const password = 'pw';
const url = 'https://kingsclubpkr.com/';
const base = 'https://api.getwhalewatcher.com';
// const base = 'http://127.0.0.1:8080'
const post_url = `${base}/message`;
function delay(ms) {
    return new Promise(resolve => setTimeout(resolve, ms));
}
function scrapeKings(initial) {
    return __awaiter(this, void 0, void 0, function* () {
        if (initial === true) {
            const closeButton = yield driver.findElement(By.xpath('/html/body/div[6]/div[3]/span'));
            // await delay(2000)
            closeButton.click();
            yield delay(300);
        }
        const results = yield getTables_v2();
        // await getTables()
        var options = {
            'method': 'POST',
            'url': post_url,
            'headers': {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({
                "type": "Kingsclub",
                "players": results
            })
        };
        request(options);
    });
}
function loadKings() {
    return __awaiter(this, void 0, void 0, function* () {
        try {
            yield driver.get(url);
            yield delay(3500);
            // /html/body/div[18]/div[1]/div/input[1]
            yield driver.findElement(By.xpath('/html/body/div[18]/div[1]/div/input[1]')).sendKeys(username);
            yield driver.findElement(By.xpath('/html/body/div[18]/div[1]/div/input[2]')).sendKeys(password, Key.RETURN);
            yield delay(500);
            // /html/body/div[20]/div[1]/div/span[2]
            const playButton = yield driver.findElement(By.xpath('/html/body/div[20]/div[1]/div/span[2]'));
            yield delay(500);
            playButton.click();
            // await driver.findElement(By.name('q')).sendKeys('webdriver', Key.RETURN);
            // await driver.wait(until.titleIs('webdriver - Google Search'), 1000);
        }
        finally {
        }
    });
}
function getTables_v2() {
    return __awaiter(this, void 0, void 0, function* () {
        var results = [];
        const r1 = yield getTable(1, true);
        const r2 = yield getTable(2);
        const r3 = yield getTable(3);
        const r4 = yield getTable(4);
        const r5 = yield getTable(5);
        const r6 = yield getTable(6);
        const r7 = yield getTable(7);
        const r8 = yield getTable(8);
        const r9 = yield getTable(8);
        const r10 = yield getTable(8);
        const arrs = [r1, r2, r3, r4, r5, r6, r7, r8, r9, r10];
        arrs.map(elem => {
            results = results.concat(elem);
        });
        console.log(`~~~~~~~~`);
        console.log(results);
        return new Promise((resolve, reject) => {
            resolve(results);
        });
    });
}
function getTable(index, isFirst = false) {
    return __awaiter(this, void 0, void 0, function* () {
        var stakes = '';
        var tableName = '';
        try {
            // /html/body/div[13]/div[7]/div[1]/div[1]/div[2]/div/div[1]
            yield driver.findElement(By.xpath(`/html/body/div[13]/div[7]/div[1]/div[1]/div[2]/div/div[${index}]/div[1]`)).click();
            yield delay(300);
            yield driver.findElement(By.xpath(`/html/body/div[13]/div[7]/div[1]/div[1]/div[2]/div/div[${index}]/div[1]`)).click();
            if (isFirst) {
                yield delay(1200);
            }
            else {
                yield delay(1000);
            }
            // /html/body/div[13]/div[7]/div[1]/div[1]/div[2]/div/div[4]/div[2]
            const stakesElem = driver.findElement(By.xpath(`html/body/div[13]/div[7]/div[1]/div[1]/div[2]/div/div[${index}]/div[2]`));
            stakes = yield stakesElem.getText();
            const tableElem = driver.findElement(By.xpath(`/html/body/div[13]/div[7]/div[1]/div[1]/div[2]/div/div[${index}]/div[1]`));
            tableName = yield tableElem.getText();
            yield driver.findElement(By.xpath(`/html/body/div[13]/div[7]/div[1]/div[1]/div[2]/div/div[${index}]/div[1]`)).click();
            yield delay(300);
        }
        finally { }
        return getScreennames(stakes, tableName);
    });
}
function getScreennames(stakes, tableName) {
    return new Promise((resolve, reject) => {
        const results = [];
        // for each seat in details
        const x1 = '/html/body/div[13]/div[7]/div[2]/div[2]/div/div[1]/div[1]/span[1]';
        const x2 = '/html/body/div[13]/div[7]/div[2]/div[2]/div/div[1]/div[2]/span[1]';
        const x3 = '/html/body/div[13]/div[7]/div[2]/div[2]/div/div[1]/div[3]/span[1]';
        const x4 = '/html/body/div[13]/div[7]/div[2]/div[2]/div/div[1]/div[4]/span[1]';
        const x5 = '/html/body/div[13]/div[7]/div[2]/div[2]/div/div[1]/div[5]/span[1]';
        const x6 = '/html/body/div[13]/div[7]/div[2]/div[2]/div/div[1]/div[6]/span[1]';
        const x7 = '/html/body/div[13]/div[7]/div[2]/div[2]/div/div[1]/div[7]/span[1]';
        const arr = [x1, x2, x3, x4, x5, x6, x7];
        arr.map((xpath) => __awaiter(this, void 0, void 0, function* () {
            try {
                const elem = yield driver.findElement(By.xpath(xpath));
                const text = yield elem.getText();
                yield delay(300);
                results.push({
                    name: text,
                    stakes: stakes,
                    table: tableName,
                });
            }
            catch (_a) {
                resolve(results);
            }
        }));
        resolve(results);
    });
}
main().catch((err) => {
    console.error(err);
    process.exit(1);
}).then(() => __awaiter(void 0, void 0, void 0, function* () {
    yield loadKings();
    var initial = true;
    schedule.scheduleJob(`${n * 10} * * * * *`, () => __awaiter(void 0, void 0, void 0, function* () {
        //every 40 seconds
        console.log(initial);
        yield scrapeKings(initial);
        initial = false;
    }));
}));
