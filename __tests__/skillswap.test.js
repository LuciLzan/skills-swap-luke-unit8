const { filterSkillsByCategory } = require("../skillswap-functions.js");

const {calculateTotalCost} = require("../skillswap-functions");


const skills = [
    { title: 'Python Tutoring', category: 'Programming', price: 20 },
    { title: 'Guitar Lessons', category: 'Music', price: 15 },
    { title: 'Resume Review', category: 'Career', price: 0 },
    { title: 'Web Development', category: 'Programming', price: 25 }
];

describe('Filter skills tests by category tests', () => {
    test("Test with category 'Programming'", () => {
        let res = filterSkillsByCategory(skills, 'Programming');
        expect(res).toEqual([
            { title: 'Python Tutoring', category: 'Programming', price: 20 },
            { title: 'Web Development', category: 'Programming', price: 25 }
        ])
    })

    test("Test with category 'All'", () => {
        let res = filterSkillsByCategory(skills, 'All');
        expect(res).toEqual(    [
            { title: 'Python Tutoring', category: 'Programming', price: 20 },
            { title: 'Guitar Lessons', category: 'Music', price: 15 },
            { title: 'Resume Review', category: 'Career', price: 0 },
            { title: 'Web Development', category: 'Programming', price: 25 }
        ])
    })



    test("Test with category 'Cooking' (Non existent)", () => {
        let res = filterSkillsByCategory(skills, 'Cooking');
        expect(res).toEqual(    [])
    })

})

describe('Calculate cost tests', () => {

    test("Test normal conditions", () => {
        expect(calculateTotalCost(20, 2)).toEqual(40)
    })
    test("Test with zero cost", () => {
        expect(calculateTotalCost(0, 3)).toEqual(0)
    })
    test("Test with fractional component", () => {
        expect(calculateTotalCost(25, 1.5)).toEqual(37.5)
    })
    test("Test with zero hours", () => {
        expect(calculateTotalCost(20, 0)).toEqual(0)
    })

})

