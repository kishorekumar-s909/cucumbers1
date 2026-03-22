

import { Given, When, Then } from '@cucumber/cucumber'
import { customworld } from '../utils/world';
import {expect } from '@playwright/test';





 Given('I goto login page {string}', async function (this:customworld,url:string) {
    await this.page.goto(url)

 });


When('I enter username {string} and Password {string}', async function (this:customworld,username:string,password:string) {
  await this.loginpage.login(username,password)

});


When('I Click login button', async function (this:customworld) {
    await this.loginpage.clickloiginbutton()


});






 Then('I Validate home page title {string}', async function (this:customworld ,tittle:string) {
 let data= await this.loginpage.title()
   expect(data).toContain(tittle)
    

 });


