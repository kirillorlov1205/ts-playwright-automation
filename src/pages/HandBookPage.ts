import { Page } from "@playwright/test";
import { HomePage } from "./HomePage";

export class HandBookPage extends HomePage{

    private HAND_BOOK_PAGE_URL = "https://www.typescriptlang.org/docs/handbook/intro.html"

    constructor(protected readonly page: Page){
            super(page);
        }

    async openHandBookPage(){
        await this.openPage(this.HAND_BOOK_PAGE_URL);
    }

    async clickSideNavigationButtonByText(text: string){
        let navigation_button = this.page.locator(`//button[text()='${text}']`);
        await navigation_button.click();
    }

    async getSidebarDropdownByText(text: string){
        return this.page.locator(`//button[text()='${text}']//ancestor::li`)
    }
}