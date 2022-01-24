//@ts-check
import { BasePage } from './base.mjs';
import { Register } from './register.mjs';

export class NoEssayScholarship extends Register {
    constructor(page) {
        super(page);
    }

    async navigate() {
        await new BasePage(this.page).navigate('colleges/scholarships/no-essay-scholarship/');
    }
}