function alg(data) {
  let [M, ...arr] = data.toString().trim().split('\n')
  arr.pop()
  const sortedArr
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
