import { CurrentEnrollment } from "./college-path/current-enrollment.mjs";

export class InterestsPicker {
    constructor(page) {
        this.page = page;
        // locators
        this.college = '#colleges';
        this.k12 = '#k12';
        this.live = '#local';
        this.work = '#workplace';
    }

    async selectCollegePath() {
        await this.page.click(this.college);
        return new CurrentEnrollment();
    }

    async selectK12() {
        await this.page.click(this.k12);
    }

    async selectPlaceToLive() {
        await this.page.click(this.live);
    }

    async selectWork() {
        await this.page.click(this.work);
    }
}