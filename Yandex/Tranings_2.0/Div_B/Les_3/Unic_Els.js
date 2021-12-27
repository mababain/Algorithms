// Дан список. Выведите те его элементы, которые встречаются в списке только один раз. Элементы нужно выводить в том порядке, в котором они встречаются в списке.

// Формат ввода
// Вводится список чисел. Все числа списка находятся на одной строке.

// Формат вывода
// Выведите ответ на задачу.

// Пример 1
// Ввод
// 1 2 2 3 3 3
// Вывод
// 1
// Пример 2
// Ввод
// 4 3 5 2 5 1 3 5
// Вывод
// 4 2 1

function alg(data) {
  const arr = data.toString().trim().split(' ')
  const set = new Set()
  const resSet = new Set()
  for (let i = 0; i < arr.length; i++) {
    if (!set.has(arr[i])) resSet.add(arr[i])
    if (set.has(arr[i])) resSet.delete(arr[i])
    set.add(arr[i])
  }
  return [...resSet].join(' ')
}

const fs = require('fs')
const fileContent = fs.readFileSync('input.txt', 'utf8')

const result = alg(fileContent)

fs.writeFileSync('output.txt', result + '')
