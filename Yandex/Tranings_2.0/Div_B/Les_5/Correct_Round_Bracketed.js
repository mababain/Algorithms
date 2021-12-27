// Если из правильного арифметического выражения вычеркнуть всё, кроме круглых скобок, то получится правильная скобочная последовательность. Проверьте, является ли введённая строка правильной скобочной последовательностью.

// Формат ввода
// Вводится непустая строка, состоящая из открывающих и закрывающих круглых скобок. Длина строки не превосходит 100000

// Формат вывода
// Выведите YES если введённая строка является правильной скобочной последовательностью и NO иначе

// Пример 1
// Ввод
// (())()
// Вывод
// YES
// Пример 2
// Ввод
// (()))()
// Вывод
// NO

function alg(data) {
  let string = data.toString().trim()
  const stack = []
  for (let i = 0; i < string.length; i++) {
    if (string[i] === '(') stack.push('(')
    else if (string[i] === ')') {
      if (stack.length) stack.pop()
      else return 'NO'
    }
  }
  return stack.length === 0 ? 'YES' : 'NO'
}

const fs = require('fs')
const fileContent = fs.readFileSync('input.txt', 'utf8')

const result = alg(fileContent)

fs.writeFileSync('output.txt', result + '')
