import globalPage from "../../pages/globalPage";
import searchBarPage from "../../pages/components/searchBarPage";
import searchResaultPage from "../../pages/searchResaultPage";
import { helionHomeUrl, notFoundUrl, searchPageUrl } from "../../config/pagesUrl";
import { incorectSearchPhrase, notFoundMessage, searchPhrase, searchResultTitle } from "../../config/data";

describe("E2E - Searchbar",async () => {
    before(() => {
        globalPage.closeRodo();
    })

    it("Should open home page, verify URL and visible search bar",async () => {
        await globalPage.openPage(helionHomeUrl, helionHomeUrl);
        await searchBarPage.searchBarIsVisible();
    })

    it("Should click and search icon and verify URL", async () => {
        await searchBarPage.clickOnSearchIcon();
        await expect(browser).toHaveUrl(helionHomeUrl);
    })

    it("Should type search value and verify visible popup", async () => {
        await searchBarPage.typeSearchPhrase(searchPhrase);
        await searchBarPage.suggestPopupIsVisible();
    })

    it("Should click on see all books button", async () => {
        await searchBarPage.clickOnSeeAllBooksBtn();
        await expect(browser).toHaveUrl(searchPageUrl);
    })

    it("Should verify visible correctly title and number of books", async () => {
        const title:string = await searchResaultPage.getPageTitle();
        const numberOfBooks:number =await searchResaultPage.getNumberOfBooks();
        await expect(title).toContain(searchResultTitle);
        await expect(numberOfBooks).toEqual(20);
    })

    it("Should clear search bar", async () => {
        await searchBarPage.clearSearchBar();
        await expect(await searchBarPage.getInputValue()).toContain("");
    })

    it("Should search incorect book name and verify alert",async () => {
        await searchBarPage.typeSearchPhrase(incorectSearchPhrase);
        await searchBarPage.clickOnSearchIcon();
        await expect(await searchBarPage.getNotFoundAlert()).toContain(notFoundMessage);
    })

    it("Should clear input value and click on search icon",async () => {
        await searchBarPage.clearSearchBar();
        await searchBarPage.clickOnSearchIcon();
        await expect(browser).toHaveUrl(notFoundUrl);
        await expect(await searchBarPage.getInputValue()).toContain(incorectSearchPhrase);
    })
})