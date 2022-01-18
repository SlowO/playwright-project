import { CollegeConsideration } from './in-college/considering/college-consideration.mjs'
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
        return new CollegeConsideration();
    }

    async selectCollegePath() {
        await this.page.click(this.college);
        return new SearchingFor();
    }
}