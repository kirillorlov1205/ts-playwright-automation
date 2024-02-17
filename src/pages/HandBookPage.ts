import { Page } from "@playwright/test";
import { FEEDBACK_TYPES } from "../support/types";
import { HomePage } from "./HomePage";

export class HandBookPage extends HomePage {
    private handbookPageUrl = "https://www.typescriptlang.org/docs/handbook/intro.html";

    constructor(protected readonly page: Page) {
        super(page);
    }

    async openHandBookPage() {
        await this.openPage(this.handbookPageUrl);
    }

    async clickSideNavigationButtonByText(text: string) {
        let navigation_button = this.page.locator(`//nav[@id="sidebar"]//button[text()="${text}"]`);
        await navigation_button.click();
    }

    async getSidebarDropdownByText(text: string) {
        return this.page.locator(`//nav[@id="sidebar"]//button[text()="${text}"]//ancestor::li`);
    }

    async leaveFeedbackById(id: FEEDBACK_TYPES) {
        await this.page.locator(`//button[@id="${id}"]`).click();
    }

    async getSuccessfulFeedbackMessage() {
        return this.page.locator(`//div[@id='like-dislike-subnav']/h5`);
    }
}
