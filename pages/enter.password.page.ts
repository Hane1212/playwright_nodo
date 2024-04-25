import { Locator, Page, expect } from '@playwright/test'

export class EnterPasswordPage  {
    readonly page: Page
    readonly NEXT=()=> this.page.getByText('Next');
    ELEM: Locator
  
    constructor(page: Page) {
        this.page = page
        // this.connectWallet = page.locator('xpath=//*[contains(@class, "open-connect-modal")]')
    }
  
//   this.ELEM = await this.page.locator('xpath=//div[@class="productinfo text-center" and .//a[@data-product-id="'+pID+'"]]/p');
    public async inputPassword(pwd:string){
        this.ELEM = await this.page.getByPlaceholder('Enter your password');
        await this.ELEM.fill(pwd)
    }

    async clickNextBtn(){
        await this.NEXT().click();
    }
     
  }
