// В этой задаче вам нужно будет много раз отвечать на запрос «Найдите сумму чисел на отрезке в массиве».
// Формат ввода
// В первой строке записано два целых числа n и q (1 ≤ n,q ≤ 3⋅10^5) - размер массива и количество запросов.Во второй строке записаны n целых чисел ai (1 ≤ ai ≤ 10^9) - сам массив.Далее в q строках описаны запросы к массиву. Каждый запрос описывается двумя числами l, r (1 ≤ l ≤ r ≤ n) - левой и правой границей отрезка, на котором нужно найти сумму.
// Формат вывода
// Для каждого запроса в отдельной строке выведите единственное число - сумму на соответствующем отрезке.
// Пример
// Ввод
// 4 10
// 1 2 3 4
// 1 1
// 1 2
// 1 3
// 1 4
// 2 2
// 2 3
// 2 4
// 3 3
// 3 4
// 4 4
// Вывод
// 1
// 3
// 6
// 10
// 2
// 5
// 9
// 3
// 7
// 4

function alg(data) {
  const lines = data.toString().trim().split('\n')
  const nums = lines[1].split(' ')
  const prefixSum = [0]
  for (let i = 1; i < nums.length + 1; i++) {
    prefixSum[i] = +prefixSum[i - 1] + +nums[i - 1]
  }
  const result = []
  for (let i = 2; i < lines.length; i++) {
    const [start, end] = lines[i].split(' ')
    result.push(prefixSum[end] - prefixSum[start - 1])
  }
  return result.join('\n')
}

const fs = require('fs')
const fileContent = fs.readFileSync('input.txt', 'utf8')

const result = alg(fileContent)

fs.writeFileSync('output.txt', result + '')
