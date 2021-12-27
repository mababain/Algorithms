// Во входной строке записана последовательность чисел через пробел. Для каждого числа выведите слово YES (в отдельной строке), если это число ранее встречалось в последовательности или NO, если не встречалось.

// Формат ввода
// Вводится список чисел. Все числа списка находятся на одной строке.

// Формат вывода
// Выведите ответ на задачу.

// Пример
// Ввод
// 1 2 3 2 3 4
// Вывод:
// NO
// NO
// NO
// YES
// YES
// NO

function alg(data) {
  const arr = data.toString().trim().split(' ')
  const result = []
  const set = new Set()
  for (let i = 0; i < arr.length; i++) {
    set.has(arr[i]) ? result.push('YES') : result.push('NO')
    set.add(arr[i])
  }
  return result.join('\n')
}

const fs = require('fs')
const fileContent = fs.readFileSync('input.txt', 'utf8')

const result = alg(fileContent)

fs.writeFileSync('output.txt', result + '')
