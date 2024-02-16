import { Page } from "@playwright/test";
import { BasePage } from "./BasePage";

export class HomePage extends BasePage{

    private HOME_PAGE_URL: string = "https://www.typescriptlang.org/";
    
    constructor(protected readonly page: Page){
            super(page);
        }

    async openHomePage(){
        await this.openPage(this.HOME_PAGE_URL);
    }
}