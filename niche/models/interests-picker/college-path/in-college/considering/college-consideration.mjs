export class CollegeConsideration {
    constructor(page) {
        this.page = page;
        // locators
        this.transfer = '#consideringTransfer';
        this.graduateProgram = '#consideringGrad';
        this.neither = '#consideringNeither';
    }

    async selectTransferring() {
        await this.page.click(this.transfer);
    }

    async selectGraduateProgram() {
        await this.page.click(this.graduateProgram);
    }

    async selectNeither() {
        await this.page.click(this.neither);
    }
}