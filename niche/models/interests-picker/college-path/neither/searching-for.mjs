import { CollegeForMyself } from './college-for-myself/college-for-myself.mjs'
import {} from '@playwright/test';

export class SearchingFor {
    constructor(page) {
        this.page = page;
        // locators
        this.knowWhereGoing = '#notLooking';
        this.collegeForMyself = '#lookingForMyself';
        this.collegeForChild = '#lookingForMyChild';
        this.none = '#lookingForNeither';
    }

    async selectKnowWhere() {
        await this.page.click(this.knowWhereGoing);
    }

    async selectCollegeForMyself() {
        await this.page.click(this.collegeForMyself);
        return new CollegeForMyself(this.page);
    }

    async selectCollegeForChile() {
        await this.page.click(this.collegeForChild);
    }

    async selectNoneOfThese() {
        await this.page.click(this.none);
    }
}