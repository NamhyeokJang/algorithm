function solution(record) {
  let users = record.map(rec => {
    const recSplit = rec.split(' ')
    return {
      uid: recSplit[1],
      name: recSplit[2]
    }
  })

  return users
}


console.log(solution(["Enter uid1234 Muzi", "Enter uid4567 Prodo", "Leave uid1234", "Enter uid1234 Prodo", "Change uid4567 Ryan"]))