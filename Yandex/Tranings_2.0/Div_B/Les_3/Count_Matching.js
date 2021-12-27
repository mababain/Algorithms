// Даны два списка чисел, которые могут содержать до 100000 чисел каждый. Посчитайте, сколько чисел содержится одновременно как в первом списке, так и во втором. Примечание. Эту задачу на Питоне можно решить в одну строчку.

// Формат ввода:
// Вводятся два списка чисел. Все числа каждого списка находятся на отдельной строке.

// Формат вывода:
// Выведите ответ на задачу.

// Пример 1
// Ввод	Вывод: 2
// 1 3 2
// 4 3 2
// Пример 2
// Ввод	Вывод: 2
// 1 2 6 4 5 7
// 10 2 3 4 8
// Пример 3
// Ввод	Вывод: 5
// 1 7 3 8 10 2 5
// 6 5 2 8 4 3 7

function count(data) {
  let [arr1, arr2] = data.toString().trim().split('\n')
  arr1 = arr1.split(' ')
  arr2 = arr2.split(' ')
  const set = new Set()
  for (let i = 0; i < arr1.length; i++) {
    set.add(arr1[i])
  }
  let counter = 0
  for (let i = 0; i < arr2.length; i++) {
    if (set.has(arr2[i])) counter++
  }
  return counter
}

const fs = require('fs')
const fileContent = fs.readFileSync('input.txt', 'utf8')

const result = count(fileContent)

fs.writeFileSync('output.txt', result + '')
