import { Locator, Page, expect } from '@playwright/test'
import { Util } from '../helper/util';

export class SignInPage  {
    private page: Page
    private util: Util
    private COUNTRY_CODE=()=> this.page.locator('[class="vti__country-code"]');
    private PHONE_TAB=()=> this.page.locator('[class="flex align-items-center justify-content-center gap-8 tab-item-wp"]');
    private PHONE_NUMBER=()=> this.page.getByPlaceholder('Enter your phone number');
    private NEXT=()=> this.page.locator('[class="ant-btn-news-red main-btn-next w-full ant-btn"]');
    private CONNECT_WALLET=()=> this.page.locator('[class="ant-btn ant-btn-news-black  w-full btn-connect-web3"]')
    private CONNECT_GMAIL=()=> this.page.locator('[class="ant-btn ant-btn-news-outline w-full fs-d-16 custom-height flex align-items-center justify-content-center gap-8 open-google-button"]')
    ELEM: Locator
    EXPECTELEM: Locator
  
    constructor(page: Page) {
      this.page = page
      this.util = new Util(this.page)
    }

    public async clickPhoneTab(){
        await this.PHONE_TAB().click();
    };

    public async clickOnEmailTab(){
        this.ELEM = await this.page.locator('div[role="tab"][aria-selected="false"]');
        this.EXPECTELEM = await this.page.getByPlaceholder('Enter your email');
        this.util.clickOnElem(this.ELEM, this.EXPECTELEM, 3)
        // await this.ELEM.click();
    }

    public async inputTheValidEmail(email:string){
        this.ELEM = await this.page.getByPlaceholder('Enter your email');
        await this.ELEM.fill(email)
    }

    public async clickNextButton(){
        await this.NEXT().click()
    }
    
    public async clickCountryCode(){
        await this.COUNTRY_CODE().click()
    }

    async SelectCountryCode(){
        
    }

    async inputPhoneNumber(){

    }


}