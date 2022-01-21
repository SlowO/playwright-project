export class BasePage {
    constructor(page) {
        this.page = page;
        this.baseUrl = 'https://www.niche.com/';
    }
    async navigate(path) {
        await this.page.goto(`https://www.niche.com/${path}`);
    }
}