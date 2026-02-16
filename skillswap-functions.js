function filterSkillsByCategory(skills,category) {
    return category.toLowerCase() === "all" ? skills : skills.filter(skill => skill.category.toLowerCase() === category.toLowerCase())
}

function calculateTotalCost(rate,hours) {
    return rate*hours
}

function matchSkillsToUser(needs,skills) {
    return null
}
module.exports = { filterSkillsByCategory, calculateTotalCost,matchSkillsToUser}
