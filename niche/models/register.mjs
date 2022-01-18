//@ts-check
import { Base } from '../models/base.mjs';
import { InterestsPicker } from '../models/interests-picker/interests-picker.mjs';

export class Register {
    constructor(page) {
        this.page = page;
        // locators
        this.firstName = '#first';
        this.lastName = '#last';
        this.birthdate = '#birthdate';
        this.email = '#email';
        this.password = '#password';
        this.rememberMe = '#rememberMe';
        this.interests = new InterestsPicker();
        this.emailSubscription = '#emailOptIn';
        this.continueButton = '.form__submit__btn--submit'
    }

    async navigate(page) {
        const basePage = new Base();
        await this.page.goto(basePage.baseUrl + page)
    }

    async enterName(name) {
        await this.page.fill(this.firstName, name);
    }

    async enterLastName(lastName) {
        await this.page.fill(this.lastName, lastName);
    }

    async enterBirthdate(birthdate) {
        await this.page.fill(this.lastName, birthdate);
    }

    async enterEmail(email) {
        await this.page.fill(this.email, email);
    }

    async enterPassword(password) {
        await this.page.fill(this.password, password);
    }

    async checkRememberMe() {
        //await page.isChecked(this.rememberMe)).toBeTruthy()
        await this.page.check(this.rememberMe);
    }

    async unCheckRememberMe() {
        await this.page.uncheck(this.rememberMe);
    }

    async checkEmailSubscription() {
        //await page.isChecked(this.emailSubscription)).toBeTruthy()
        await this.page.check(this.emailSubscription);
    }

    async unCheckEmailSubscription() {
        await this.page.uncheck(this.emailSubscription);
    }

    async clickContinue() {
        await this.page.click(this.continueButton);
    }
    
    /**
     * Fillout the register form without unchecking the checkboxes
     * @param {*} name 
     * @param {*} lastName 
     * @param {string} birthdate - Valid format 00/00/0000.
     * @param {*} email 
     * @param {*} password 
     * @param {*} interestPath
     */
    async fillOutRegisterForm(name, lastName, birthdate, email, password, interestPath) {
        this.enterName(name);
        this.enterLastName(lastName);
        this.enterBirthdate(birthdate);
        this.enterEmail(email);
        this.enterPassword(password);
        this.clickContinue();
    }
}