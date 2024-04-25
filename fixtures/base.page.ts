import { test as base } from "@playwright/test";
import { EnterPasswordPage } from "../pages/enter.password.page";
import { SignInPage } from "../pages/sign.in.page";
import { HomePage } from "../pages/home.page";


export const test = base.extend<{ 
    enterPwdPage: EnterPasswordPage, 
    signinPage: SignInPage, 
    homePage: HomePage, }>({
    signinPage: async ({ page }, use) => {
        await use(new SignInPage(page));
    },
    homePage: async ({ page }, use) => {
        await use(new HomePage(page));
    },
    enterPwdPage: async ({ page }, use) => {
        await use(new EnterPasswordPage(page));
    }
});