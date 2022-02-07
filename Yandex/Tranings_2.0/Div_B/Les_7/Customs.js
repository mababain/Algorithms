function alg(data) {
  let [_, ...arr] = data.toString().trim().split('\n')
  const sortedArr = splitAndSortArr(arr)
  let maxDepth = 0
  let depth = 0
  for (let i = 0; i < sortedArr.length; i++) {
    if (sortedArr[i][1] === 1) depth += 1
    else depth -= 1
    if (maxDepth < depth) maxDepth = depth
  }
  return maxDepth
}

function splitAndSortArr(arr) {
  const sortedArr = []
  for (let i = 0; i < arr.length; i++) {
    const [inp, time] = arr[i].split(' ').map(Number)
    sortedArr.push([inp, 1])
    sortedArr.push([inp + time, 0])
  }
  return sortedArr.sort((a, b) => a[0] - b[0] || a[1] - b[1])
}
const fs = require('fs')
const fileContent = fs.readFileSync('input.txt', 'utf8')

const result = alg(fileContent)

fs.writeFileSync('output.txt', result + '')
