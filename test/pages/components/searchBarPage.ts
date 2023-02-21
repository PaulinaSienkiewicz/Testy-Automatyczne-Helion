class SearchBarPage {

    get notFoundAlert(){
        return $("div.not-found")
    }

    get searchIcon(){
        return $("//button[contains (text(),'Szukaj')]");
    }
    
    get searchInput(){
        return $("#inputSearch");
    }

    get seeAllBooksBtn(){
        return $("li.wszystkie > p > a");
    }

    get suggestPopup(){
        return $("form#szukanie div.suggest-list");
    }

    async clearSearchBar(){
        const input:WebdriverIO.Element = await this.searchInput;
        await input.waitForDisplayed();
        await input.clearValue();
    }

    async clickOnSearchIcon(){
        const icon:WebdriverIO.Element = await this.searchIcon;
        await icon.waitForDisplayed();
        await icon.click();
    }

    async clickOnSeeAllBooksBtn(){
        const button:WebdriverIO.Element = await this.seeAllBooksBtn;
        await button.waitForDisplayed();
        await button.scrollIntoView(false);
        await button.click();
    }

    async getInputValue():Promise<string>{
        const input:WebdriverIO.Element = await this.searchInput;
        await input.waitForDisplayed();
        return await input.getValue();
    }
    
    async getNotFoundAlert():Promise<string>{
        const alert:WebdriverIO.Element = await this.notFoundAlert;
        await alert.waitForDisplayed();
        return await alert.getText();
    }

    async searchBarIsVisible(){
        const input:WebdriverIO.Element = await this.searchInput;
        await input.waitForDisplayed();
    }

    async suggestPopupIsVisible(){
        const popup:WebdriverIO.Element = await this.suggestPopup;
        await popup.waitForDisplayed();
    }

    async typeSearchPhrase(value){
        const input:WebdriverIO.Element = await this.searchInput;
        await input.waitForDisplayed();
        await input.setValue(value);
        await browser.pause(1000);
        await browser.keys(['Control', 'a']);
    }
}

export default new SearchBarPage();