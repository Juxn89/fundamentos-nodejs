const puppeteer = require('puppeteer')

(async () => {
    console.log('Launching browser!');
    // const browser = await puppeteer.launch();
    const browser = await puppeteer.launch({ headless: false });
    const page = await browser.newPage();
    await page.goto('https://es.wikipedia.org/wiki/Node.js');

    const title = await page.evaluate(() => {
        const H1_tag = document.querySelector('h1');
        console.log(H1_tag.innerHTML);

        return H1_tag.innerHTML;
    });

    console.log(title);

    console.log('Closing browser!');
    // browser.close();

    console.log('Browser closed!');
})()