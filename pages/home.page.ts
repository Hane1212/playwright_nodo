import { Locator, Page, expect } from '@playwright/test'
import { ConfigReader } from "../config-reader/config.reader";
import { Util } from '../helper/util';

export class HomePage {
    private page: Page
    private SIGNIN = () => this.page.locator('[class="btn-sign-up ant-btn ant-btn-landing-2"]')
    private USERACCT = () => this.page.locator('[class="user-avatar-container"]');
    private SIGNOUT = () => this.page.getByText(' Sign Out')
    private configReader: ConfigReader;
    ELEM: Locator
  
    constructor(page: Page) {
        this.page = page
        this.configReader = ConfigReader.getEnvVars();
  }
  
  
    public async goto() {
        await this.page.goto(ConfigReader.APP_URL);
    }
    
    public async close(){
        await this.page.close();    
    }

    public async clickSignBtn() {
        await this.SIGNIN().waitFor({state: "visible"})
        await this.SIGNIN().click();
    }

    // -----------ASSERTION-------------
   public async assertPageTitle(){
        await expect(this.page).toHaveTitle('NODO - Web3 African News & Discovery');
    }

    public async assertUserInfoExist(){
        // this.ELEM = await this.page.locator('[class="user-avatar-container"]');
        await expect(this.USERACCT()).toBeVisible({ timeout: 100000 });
    }
  
    public async SignOut(){
        await this.USERACCT().click()
        await this.SIGNOUT().click()
    }

  }

