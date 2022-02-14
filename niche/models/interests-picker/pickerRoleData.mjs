//@ts-check

import { InterestsPicker } from "./interests-picker.mjs";

const college = new InterestsPicker();

export const pickerRole = { 
    highschool: [college.college, '#colleges', '#currentlyEnrolledHighSchool'],
    k12: ['#k12']
};