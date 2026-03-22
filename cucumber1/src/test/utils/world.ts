import { setWorldConstructor } from "@cucumber/cucumber";
import {Page,Browser} from '@playwright/test';
import { login } from "../pages/login";
export class customworld{
    page!:Page
    browser!:Browser
    loginpage!:login
    
    
    
}
setWorldConstructor(customworld);