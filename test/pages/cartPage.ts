class CartPage {
    get checkbox(){
        return $("form#formularz tr th.checkbox");
    }

    get deleteSelectedLabel(){
        return $("div#usun a");
    }

    get deletedAlertMessage(){
        return $("div.infobox > p");
    }

    get successAlert(){
        return $("div.successbox > p");
    }

    get totalPrice(){
        return $("h3#cart-edit-summary");
    }
    
    async acceptDeleteAlert(){
        await  browser.acceptAlert();
    }

    async clickOnCheckbox(){
        const checkbox:WebdriverIO.Element = await this.checkbox;
        await checkbox.waitForDisplayed();
        await checkbox.scrollIntoView(false);
        await checkbox.click();
    }

    async clickOnDeleteSelectedLabel(){
        const label:WebdriverIO.Element = await this.deleteSelectedLabel;
        await label.waitForDisplayed();
        await label.scrollIntoView(false);
        await label.click();
    }

    async getDeletedAlertMessageValue():Promise<string>{
        const alert:WebdriverIO.Element = await this.deletedAlertMessage;
        await alert.waitForDisplayed();
        return await alert.getText();
    }

    async getSuccessAlertValue():Promise<string>{
        const alert:WebdriverIO.Element = await this.successAlert;
        await alert.waitForDisplayed();
        return await alert.getText();
    }

    async getTotalPrice():Promise<string>{
        const price:WebdriverIO.Element = await this.totalPrice;
        await price.waitForDisplayed();
        return await price.getText();
    }
}

export default new CartPage();