function filterSkillsByCategory(skills,category) {
    return category === "All" ? skills : skills.filter(skill => skill.category === category)
}


module.exports = { filterSkillsByCategory }
