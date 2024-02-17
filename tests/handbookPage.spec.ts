import { test, expect } from "@playwright/test";
import { HandBookPage } from "../src/pages/HandBookPage";
import { FEEDBACK_TYPES, HANDBOOK_SIDEBAR_ITEMS } from "../src/support/types";

let handbookPage: HandBookPage;

test.describe("Handbook page test", async () => {
    test.beforeEach(async ({ page }) => {
        handbookPage = new HandBookPage(page);
        await handbookPage.openHandBookPage();
    });

    test("Should open 'Handbook' sidebar dropdown by default'", async () => {
        expect(await handbookPage.getSidebarDropdownByText("Handbook")).toHaveClass("open highlighted");
    });

    for (const item in HANDBOOK_SIDEBAR_ITEMS) {
        const BUTTON_NAME = HANDBOOK_SIDEBAR_ITEMS[item as keyof typeof HANDBOOK_SIDEBAR_ITEMS];
        
        test(`Should open '${item}' sidebar dropdown by clicking button '${BUTTON_NAME}'`, async () => {
            await handbookPage.clickSideNavigationButtonByText(BUTTON_NAME);
            expect(await handbookPage.getSidebarDropdownByText(BUTTON_NAME)).toHaveClass("open");
        });
    }

    for (const item in FEEDBACK_TYPES) {
        const FEEDBACK_TYPE = FEEDBACK_TYPES[item as keyof typeof FEEDBACK_TYPES];
        const SUCCESSFUL_FEEDBACK_MESSAGE = "Thanks for the feedback";

        test(`Should add feedback '${FEEDBACK_TYPE}' to the page'`, async () => {
            await handbookPage.leaveFeedbackById(FEEDBACK_TYPE);
            expect(await handbookPage.getSuccessfulFeedbackMessage()).toHaveText(SUCCESSFUL_FEEDBACK_MESSAGE);
        });
    }
});
