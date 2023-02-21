class ProductPage{
    get addToCartBtn(){
        return $("a#addToBasket_vwdtnp_w");
    }

    get productPrice(){
        return $("ins#cena_w");
    }

    get productTitle(){
        return $("div.title-group > h1 > span[itemprop='name']");
    }

    async addToCartBtIsVisible(){
        const button:WebdriverIO.Element = await this.addToCartBtn;
        await button.isDisplayed();
    }

    async clickOnAddToCartBtn(){
        const button:WebdriverIO.Element = await this.addToCartBtn;
        await button.isDisplayed();
        await button.scrollIntoView();
        await button.click();
    }

    async getProductPrice():Promise<string>{
        const price:WebdriverIO.Element = await this.productPrice;
        await price.waitForDisplayed();
        return await price.getText();
    }

    async getProductTitle():Promise<string>{
        const title:WebdriverIO.Element = await this.productTitle;
        await title.isDisplayed();
        return await title.getText();
    }

    async productTitleIsVisible(){
        const title:WebdriverIO.Element = await this.productTitle;
        await title.isDisplayed();
    }
}

export default new ProductPage();