import { expect, Locator, Page } from "@playwright/test";

export class Util {

  private page: Page;
  private productsLabel = () => this.page.locator("css=a[href='/products']");

  constructor(page: Page) {
    this.page = page;
  }

  public async clickOnElem(elem: Locator, expectElem: Locator, maxAttempts: number = 3) {
    let attempts = 0;
    while (attempts < maxAttempts) {
        await elem.click();
        if(!await this.elemExist(expectElem)){
            attempts++;
        }else{
            break;
        }
    }
    if (attempts >= maxAttempts) {
      throw new Error(`Failed to click the elemen after ${maxAttempts} attempts.`);
    }
    
    // Handle the Google vignette popup
    if (this.page.url().includes("#google_vignette")) {
      await this.page.goBack();
      await elem.click();
    }

  }
    public async elemExist(elem: Locator){
        if(await elem.count()>0){
            return true;
        }
        return false;
    }

}