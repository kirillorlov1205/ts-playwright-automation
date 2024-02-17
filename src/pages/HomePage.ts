import { Page } from "@playwright/test";
import { BasePage } from "./BasePage";
import { Header } from "../elements/Header";

export class HomePage extends BasePage {
    private homePageUrl: string = "https://www.typescriptlang.org/";
    private header = new Header(this.page);

    constructor(protected readonly page: Page) {
        super(page);
    }

    async openHomePage() {
        await this.openPage(this.homePageUrl);
    }

    getHeader() {
        return this.header;
    }
}
