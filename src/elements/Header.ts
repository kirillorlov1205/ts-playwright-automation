import { Page } from "@playwright/test";

export class Header {
    constructor(protected readonly page: Page) {}

    async clickTopMenuItemByInnerText(text: string) {
        await this.page.locator(`//div[@id='top-menu']//a[contains(text(),'${text}')]`).click();
    }

    async searchForText(text: string){
        await this.page.locator("//input[@id='search-box-top']").fill(text);
    }

    async getSearchSuggestionsModalPage(){
        return this.page.locator("//div[contains(@class,'ds-suggestion')]");
    }
}
