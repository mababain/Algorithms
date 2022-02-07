// На числовой прямой окрасили N отрезков. Известны координаты левого и правого концов каждого отрезка (Li и Ri). Найти длину окрашенной части числовой прямой.

// Формат ввода
// В первой строке находится число N, в следующих N строках - пары Li и Ri. Li и Ri - целые, -109 ≤ Li ≤ Ri ≤ 109, 1 ≤ N ≤ 15 000

// Формат вывода
// Вывести одно число - длину окрашенной части прямой.

// Пример 1
// Ввод
// 1
// 10 20
// Вывод
// 10
// Пример 2
// Ввод
// 1
// 10 10
// Вывод
// 0
// Пример 3
// Ввод
// 2

// 10 20
// 20 40
// Вывод
// 30

function alg(data) {
  let [_, ...arr] = data.toString().trim().split('\n')
  const sortedArr = splitAndSortArr(arr)
  let count = 0
  let depth = 0
  for (let i = 0; i < sortedArr.length; i++) {
    if (depth > 0) count += sortedArr[i][0] - sortedArr[i - 1][0]
    if (sortedArr[i][1] === 1) depth += 1
    else depth -= 1
  }
  return count
}

function splitAndSortArr(arr) {
  const sortedArr = []
  for (let i = 0; i < arr.length; i++) {
    const [inp, out] = arr[i].split(' ').map(Number)
    sortedArr.push([inp, 1])
    sortedArr.push([out, 0])
  }
  return sortedArr.sort((a, b) => a[0] - b[0])
}
const fs = require('fs')
const fileContent = fs.readFileSync('input.txt', 'utf8')

const result = alg(fileContent)

fs.writeFileSync('output.txt', result + '')
