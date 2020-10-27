function solution(skill, skill_trees) {
  skill = skill.split('')

  const filteredTree = skill_trees.map(tree => {
    tree = tree.split('')
    return tree.filter(x => skill.includes(x)).join('')
  })

  return filteredTree.map(tree => {
    if (tree === '') {
      return true
    } else {
      return (skill.join('').includes(tree) && tree[0] === skill[0])
    }
  }).filter(x => x).length
}

console.log(solution("CBD", ["BACDE", "CBADF", "AECB", "BDA"]))