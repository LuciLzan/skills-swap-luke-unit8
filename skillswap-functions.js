function filterSkillsByCategory(skills,category) {
    return category.toLowerCase() === "all" ? skills : skills.filter(skill => skill.category.toLowerCase() === category.toLowerCase())
}


module.exports = { filterSkillsByCategory }
