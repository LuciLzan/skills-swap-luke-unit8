function filterSkillsByCategory(skills,category) {
    return category.toLowerCase() === "all" ? skills : skills.filter(skill => skill.category.toLowerCase() === category.toLowerCase())
}

function calculateTotalCost(rate,hours) {
    return rate*hours
}


module.exports = { filterSkillsByCategory, calculateTotalCost}
