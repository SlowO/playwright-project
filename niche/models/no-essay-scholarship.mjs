//@ts-check
import { BasePage } from './base.mjs';
import { Register } from './register.mjs';

export class NoEssayScholarship extends Register {
    constructor(page) {
        super(page);
    }

    async navigate() {
        await BasePage.prototype.navigate('colleges/scholarships/no-essay-scholarship/');
    }
}