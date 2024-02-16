import { test, expect } from '@playwright/test';
import { HandBookPage } from '../src/pages/HandBookPage';

let handbookPage: HandBookPage;

test.describe("Handbook page test", async () => {
    test.beforeEach(async ({page}) => {
        handbookPage = new HandBookPage(page);
        await handbookPage.openHandBookPage();
    })

    enum HANDBOOK_SIDEBAR_ITEMS {
        GET_STARTED = "Get Started",
        HANDBOOK = "Handbook",
        REFERENCE = "Reference",
        MODULES_REFERENCE = "Modules Reference",
        TUTORIALS = "Tutorials"
    }

    for(const item in HANDBOOK_SIDEBAR_ITEMS){
        const BUTTON_NAME = HANDBOOK_SIDEBAR_ITEMS[item as keyof typeof HANDBOOK_SIDEBAR_ITEMS];
        test(`Should open '${item}' sidebar dropdown by clicking button '${BUTTON_NAME}'`, async() => {;
            await handbookPage.clickSideNavigationButtonByText(BUTTON_NAME);
            expect(await handbookPage.getSidebarDropdownByText(BUTTON_NAME)).toHaveClass("open");
        })
    }
})
