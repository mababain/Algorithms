// Дан текст. Выведите все слова, встречающиеся в тексте, по одному на каждую строку. Слова должны быть отсортированы по убыванию их количества появления в тексте, а при одинаковой частоте появления — в лексикографическом порядке. Указание. После того, как вы создадите словарь всех слов, вам захочется отсортировать его по частоте встречаемости слова. Желаемого можно добиться, если создать список, элементами которого будут кортежи из двух элементов: частота встречаемости слова и само слово. Например, [(2, 'hi'), (1, 'what'), (3, 'is')]. Тогда стандартная сортировка будет сортировать список кортежей, при этом кортежи сравниваются по первому элементу, а если они равны — то по второму. Это почти то, что требуется в задаче.

// Формат ввода
// Вводится текст.

// Формат вывода
// Выведите ответ на задачу.

// Пример 1
// Ввод
// hi
// hi
// what is your name
// my name is bond
// james bond
// my name is damme
// van damme
// claude van damme
// jean claude van damme
// Вывод
// damme
// is
// name
// van
// bond
// claude
// hi
// my
// james
// jean
// what
// your
// Пример 2
// Ввод
// oh you touch my tralala
// mmm my ding ding dong
// Вывод
// ding
// my
// dong
// mmm
// oh
// touch
// tralala
// you
// Пример 3
// Ввод
// ai ai ai ai ai ai ai ai ai ai
// Вывод
// ai

function alg(data) {
  const lines = data.toString().trim().split('\n').join(' ')
  const words = lines.split(' ')
  const wordsSum = new Map()
  for (const word of words) {
    wordsSum.set(word, (wordsSum.get(word) || 0) + 1)
  }
  return [...wordsSum]
    .sort(([a, countA], [b, countB]) => countB - countA || a.localeCompare(b))
    .map(([word]) => word)
    .join('\n')
}

const fs = require('fs')
const fileContent = fs.readFileSync('input.txt', 'utf8')

const result = alg(fileContent)

console.log(result)
