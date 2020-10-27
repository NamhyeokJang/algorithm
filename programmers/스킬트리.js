function solution(skill, skill_trees) {
  const rule = skill.split('')
  const toArr = skill_trees.map(tree => {
    tree = tree.split('')
    return tree.filter(x => rule.includes(x)).join('')
  })
  console.log(toArr)
  return toArr.map(tree => {
    if (tree === '') {
      return true
    } else {
      return (skill.includes(tree) && tree[0] === skill[0])
    }
  }).filter(x => x).length
}


console.log(solution("CBD", ["BACDE", "CBADF", "AECB", "BDA"]));
console.log(solution('DB', ['WEWQ', 'EWFS']))
