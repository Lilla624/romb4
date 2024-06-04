//testappmocha.js
import puppeteer from 'puppeteer';
import assert from 'assert';

describe('Rombusz kerületszámítás', function() {
    let browser;
    let page;
    before(async function(){
        browser = await puppeteer.launch();
        page = await browser.newPage();
    });
    after(async function() {
        await browser.close();
    });
    it('30, 35 bemenetre 120', async function() {
        await page.goto('http://localhost:3000');
        await page.type('#side', '30');
        await page.type('#alpha', '35');
        await page.click('#calcButton');
        const actualStr = await page.$eval('#perimeter', elem => elem.value);
        const actual = Number(actualStr);
        const expected = 120;
        assert.strictEqual(actual, expected);
    });
    it('135, 40 bemenetre 540', async function() {
        await page.goto('http://localhost:3000');
        await page.type('#side', '135');
        await page.type('#alpha', '40');
        await page.click('#calcButton');
        const actualStr = await page.$eval('#perimeter', elem => elem.value);
        const actual = Number(actualStr);
        const expected = 540;
        assert.strictEqual(actual, expected);
    });

    it('A böngésző fül címének tesztje', async () => {
        await page.goto('http://localhost:3000');
        const actual = await page.title();
        const expected = 'Rombusz';
        assert.strictEqual(actual, expected);
    });
    it('Az oldal címe', async () => {
        await page.goto('http://localhost:3000');
        const actual = await page.$eval('h1', element => element.textContent);
        const expected = 'Rombusz kerület terület';
        assert.strictEqual(actual, expected);
    })
});