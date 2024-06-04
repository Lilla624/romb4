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
    
    if(actual == 120) {
        console.log('Ok')
    }else {
        console.log('Hiba! 30, 35-re nem 120-t kapunk kerületnek')
    }
    // console.log('Eredmény:', actual)
    await browser.close()
})()