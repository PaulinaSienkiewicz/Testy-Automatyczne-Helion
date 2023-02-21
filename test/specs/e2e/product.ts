import { deletedProductMessage, searchPhrase } from "../../config/data";
import { cartUrl, helionHomeUrl, searchProductUrl } from "../../config/pagesUrl";
import cartPage from "../../pages/cartPage";
import searchBarPage from "../../pages/components/searchBarPage";
import globalPage from "../../pages/globalPage";
import productPage from "../../pages/productPage";
import searchResaultPage from "../../pages/searchResaultPage";

describe ("E2E - Products",async () => {
    let productTitle:string;
    let price:string;
    let alertMessage:string;

    before(() => {
        browser.url(helionHomeUrl);
        globalPage.closeRodo();
    })

    it("Should type search phrase and click search icon",async () => {
        await searchBarPage.typeSearchPhrase(searchPhrase);
        await searchBarPage.clickOnSearchIcon();
        await expect(browser).toHaveUrl(searchProductUrl);
    })

    it("Should click on first book",async () => {
        await searchResaultPage.clickOnFirstBookItem();
        await productPage.productTitleIsVisible();
        await productPage.addToCartBtIsVisible();
        productTitle = await productPage.getProductTitle();
        price = await productPage.getProductPrice();
    })

    it("Should click on add to cart button",async () => {
        await productPage.clickOnAddToCartBtn();
        await expect(browser).toHaveUrlContaining(cartUrl);
        await expect(await cartPage.getSuccessAlertValue()).toContain(productTitle);
        await expect(await cartPage.getTotalPrice()).toContain(price);
    })

    it("Should delete product from cart",async () => {
        await cartPage.clickOnCheckbox();
        await cartPage.clickOnDeleteSelectedLabel();
        alertMessage = await browser.getAlertText();
        await expect(alertMessage).toContain(alertMessage);
        await cartPage.acceptDeleteAlert();
        await expect (await cartPage.getDeletedAlertMessageValue()).toContain(deletedProductMessage);
    })
    
})