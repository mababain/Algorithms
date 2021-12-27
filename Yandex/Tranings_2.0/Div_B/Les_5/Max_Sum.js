// В этой задаче вам требуется найти непустой отрезок массива с максимальной суммой.

// Формат ввода
// В первой строке входных данных записано единственное число n (1 ≤ n ≤ 3⋅10^5) -  размер массива.Во второй строке записано n целых чисел ai (−10^9 ≤ ai ≤ 10^9) - сам массив.

// Формат вывода
// Выведите одно число - максимальную сумму на отрезке в данном массиве.
// Пример 1
// Ввод
// 4
// 1 2 3 4
// Вывод
// 10
// Пример 2
// Ввод
// 4
// 5 4 -10 4
// Вывод
// 9

function alg(data) {
  let [_, nums] = data.toString().trim().split('\n')
  nums = nums.split(' ').map((el) => +el)
  let curr
  let max = (curr = nums[0])
  for (let i = 1; i < nums.length; i++) {
    if (curr < 0) curr = nums[i]
    else curr += nums[i]
    if (max < curr) max = curr
  }
  return max
}

const fs = require('fs')
const fileContent = fs.readFileSync('input.txt', 'utf8')

const result = alg(fileContent)

fs.writeFileSync('output.txt', result + '')
