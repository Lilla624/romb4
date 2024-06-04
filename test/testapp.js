//testapp.js
import puppeteer from "puppeteer"

(async () => {
    console.log('működik')
    const browser = await puppeteer.launch({headless: true})
    const page = await browser.newPage()
    await page.goto('http://localhost:3000')
    await page.type('#side', '30')    
    await page.type('#alpha', '35')
    await page.click('#calcButton')
    const actual = await page.$eval('#perimeter', elem => elem.value)
    console.log('Eredmény:', actual)
    await browser.close()
})()