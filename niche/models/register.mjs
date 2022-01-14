import Base from './base';
import InterestPicker from './interests-picker.mjs';

export class RegisterForm {
    constructor(page) {
        this.page = page;
        // locators
        this.firstName = '#first';
        this.lastName = '#last';
        this.birthday = '#birthdate';
        this.email = '#password';
        this.password = 'password';
        this.rememberMe = 'rememberMe';
        this.interests = InterestPicker();
        this.emailSubscription = 'emailOptIn';
    }

    async navigate(page) {
        await this.page.goto(`${Base.baseUrl + page}`)
    }
}