import { test } from '../fixtures/base.page'
import { ConfigReader } from "../config-reader/config.reader";

test.describe("Verify Sign in to NODO system", () => {

  test.beforeEach(async ({ homePage, context }) => {
    context.clearCookies();
    await homePage.goto();
  });

  // test("Verify that home page is visible successfully", async ({ homePage }) => {
  //   await homePage.assertPageTitle();
  // });

  test('Verify sign in with email', async({homePage, signinPage, enterPwdPage})=>{
      await homePage.clickSignBtn()  
      await signinPage.clickOnEmailTab()
      await signinPage.inputTheValidEmail(ConfigReader.EMAIL)
      await signinPage.clickNextButton()
      await enterPwdPage.inputPassword(ConfigReader.PASSWORD)
      await enterPwdPage.clickNextBtn()
      await homePage.assertUserInfoExist()
      // await homePage.clickOnEmailTab()
  })
  
  
  test.afterEach(async ({ homePage }) => {
    await homePage.SignOut();
    // await homePage.close();
  });

});


