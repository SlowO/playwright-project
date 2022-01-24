import { CollegeConsideration } from './in-college/college-consideration.mjs'
import { SearchingFor } from './neither/searching-for.mjs'

export class CurrentEnrollment {
    constructor(page) {
        this.page = page;
        // locators
        this.highSchool = '#currentlyEnrolledHighSchool';
        this.college = '#currentlyEnrolledCollege';
        this.neither = '#notCurrentlyEnrolled';
    }

    async selectInHighSchool() {
        await this.page.click(this.highSchool);
    }

    async selectCollege() {
        await this.page.click(this.college);
        return new CollegeConsideration(this.page);
    }

    async selectNeither() {
        await this.page.click(this.neither);
        return new SearchingFor(this.page);
    }
}