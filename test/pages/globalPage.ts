class GlobalPage {
    get rodoBtn(){
        return $("#rodo-ok")
    }

    async closeRodo(){
        const button:WebdriverIO.Element = await this.rodoBtn;
        await button.click();
    }

    async openPage(pageUrl:string, expectedPageUrl:string){
        await browser.url(pageUrl);
        await expect(browser).toHaveUrl(expectedPageUrl);
    }
}

export default new GlobalPage();