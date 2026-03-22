import { Before,After,setDefaultTimeout } from "@cucumber/cucumber";
import{chromium } from '@playwright/test';
import { customworld } from "../utils/world";
import { login } from "../pages/login";
setDefaultTimeout(60*1000);
Before(async function(this:customworld){
    this.browser=await chromium.launch({headless:false})
    let context=await this.browser.newContext()
    this.page=await context.newPage()
    this.loginpage=new login(this.page)
})
After(async function(this:customworld){
    await this.browser.close()

})
