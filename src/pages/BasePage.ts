import { Page, expect } from "@playwright/test";

export abstract class BasePage{
    constructor(protected readonly page: Page){}

    public async getPageTitle(){
        return await this.page.title();
    }

    public async openPage(url: string){
        await this.page.goto(url)
    }

    public async waitForTitleToBe(title: string | RegExp){
        await expect(this.page).toHaveTitle(title);
    }  
}