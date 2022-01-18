export class CollegeForMyself {
    constructor(page) {
        this.page = page;
        // locators
        this.college = '#lookingForMyselfCollege';
        this.grad = '#lookingForMyselfGrad';
    }

    async selectCollege() {
        await this.page.click(this.college);
    }

    async selectGraduateSchool() {
        await this.page.click(this.grad);
    }
}