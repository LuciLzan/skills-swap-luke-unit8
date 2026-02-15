const { filterSkillsByCategory } = require("../skillswap-functions.js");


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

