//@ts-check
import { BasePage } from '../models/base.mjs';
import { InterestsPicker } from '../models/interests-picker/interests-picker.mjs';

export class Register extends BasePage {
    constructor(page) {
        super(page);
        // locators
        this.firstName = '#first';
        this.lastName = '#last';
        this.birthdate = '#birthdate';
        this.email = '#email';
        this.password = '#password';
        this.rememberMe = '#rememberMe';
        this.interests = new InterestsPicker(page);
        this.terminalMessage = "//*[@class= 'option-picker__terminal-message']//strong";
        this.emailSubscription = '#emailOptIn';
        this.continueButton = '.form__submit__btn--submit';
    }

    // Interest picker
    async takeCollegeTransferPath() {
        const current = await this.interests.selectCollegePath();
        const consideration = await current.selectCollege();
        await consideration.selectTransferring();
    }

    async takeCollegeGraduatePath() {
        const current = await this.interests.selectCollegePath();
        const consideration = current.selectCollege();
        await (await consideration).selectGraduateProgram();
    }

    async takeAdultCollegePath() {
        const current = await this.interests.selectCollegePath();
        const lookingFor = current.selectNeither();
        const program = (await lookingFor).selectCollegeForMyself();
        await (await program).selectCollege();
    }

    async getTerminalMessage() {
        return await this.page.innerText(this.terminalMessage);
    }

    // Rest of the form
    async navigate() {
        await super.navigate('account/register/')
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