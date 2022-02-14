//@ts-check
import { BasePage } from '../models/base.mjs';
import { InterestsPicker } from '../models/interests-picker/interests-picker.mjs';
import { CurrentEnrollment } from '../models/interests-picker/college-path/current-enrollment.mjs';

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
        this.currentEnrollment = new CurrentEnrollment(page);
        this.terminalMessage = '.option-picker__terminal-message';
        this.emailSubscription = '#emailOptIn';
        this.continueButton = '.form__submit__btn--submit';
    }

    async openPage() {
        await super.navigate('account/register/')
    }

    // Interest picker
    async selectPath (role) {
        for (let i = 0; i < role.length; i++) {
            await this.page.click(role[i]);
        }
    }

    async takeCollegeTransferPath() {
        await this.interests.selectCollegePath();
        this.collegeTransferPath();
    }

    // Intereset picker's start point for "No Essay" College Scholarship page
    async collegeTransferPath() {
        const consideration = await this.currentEnrollment.selectCollege();
        await consideration.selectTransferring();
    }

    async takeCollegeGraduatePath() {
        await this.interests.selectCollegePath();
        this.collegeGraduatePath();
    }

    // Intereset picker's start point for "No Essay" College Scholarship page
    async collegeGraduatePath() {
        const consideration = await this.currentEnrollment.selectCollege();
        await consideration.selectGraduateProgram();
    }

    async takeAdultCollegePath() {
        await this.interests.selectCollegePath();
        this.adultCollegePath();
    }

    // Intereset picker's start point for "No Essay" College Scholarship page
    async adultCollegePath() {
        const lookingFor = await this.currentEnrollment.selectNeither();
        const program = await lookingFor.selectCollegeForMyself();
        await program.selectCollege();
    }

    async takeCollegeStillInHighSchoolPath() {
        await this.interests.selectCollegePath();
        this.selectInHighSchool();
    }

    // Intereset picker's start point for "No Essay" College Scholarship page
    async selectInHighSchool() {
        await this.currentEnrollment.selectCollege();
    }

    async getTerminalMessage() {
        return await this.page.innerText(this.terminalMessage);
    }

    // Rest of the form
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