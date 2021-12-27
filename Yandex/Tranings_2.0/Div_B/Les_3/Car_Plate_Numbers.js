// Неизвестный водитель совершил ДТП и скрылся с места происшествия. Полиция опрашивает свидетелей. Каждый из них говорит, что запомнил какие-то буквы и цифры номера. Но при этом свидетели не помнят порядок этих цифр и букв. Полиция хочет проверить несколько подозреваемых автомобилей. Будем говорить, что номер согласуется с показанием свидетеля, если все символы, которые назвал свидетель, присутствуют в этом номере (не важно, сколько раз).
// Формат ввода
// Сначала задано число M ≤ 100  - количество свидетелей. Далее идет M строк, каждая из которых описывает показания очередного свидетеля. Эти строки непустые и состоят из не более чем 20 символов. Каждый символ в строке - либо цифра, либо заглавная латинская буква, причём символы могут повторяться.
// Затем идёт число N ≤ 1000 - количество номеров. Следующие строки представляют из себя номера подозреваемых машин и имеют такой же формат, как и показания свидетелей.
// Формат вывода
// Выпишите номера автомобилей, согласующиеся с максимальным количеством свидетелей. Если таких номеров несколько, то выведите их в том же порядке, в котором они были заданы на входе.
// Пример 1
// Ввод
// 3
// ABC
// A37
// BCDA
// 2
// A317BD
// B137AC
// Вывод
// B137AC
// Пример 2
// Ввод
// 2
// 1ABC
// 3A4B
// 3
// A143BC
// C143AB
// AAABC1
// Вывод
// A143BC
// C143AB

function alg(data) {
  const arr = data.toString().trim().split('\n')
  let witnessNumbers = []
  const witnessCount = +arr[0]
  const suspectsCount = +arr[witnessCount + 1]
  for (let i = 1; i < witnessCount + 1; i++) {
    witnessNumbers.push(arr[i])
  }
  witnessNumbers = witnessNumbers.map((el) => el.split(''))
  let result = []
  let resultMax = 0
  for (let i = witnessCount + 2; i <= witnessCount + suspectsCount + 1; i++) {
    const set = new Set(arr[i].split(''))
    let count = 0
    for (let j = 0; j < witnessNumbers.length; j++) {
      let match = true
      for (let k = 0; k < witnessNumbers[j].length; k++) {
        if (!set.has(witnessNumbers[j][k])) match = false
      }
      if (match) count++
    }
    console.log(count)
    if (count === resultMax) result.push(arr[i])
    if (count > resultMax) {
      result = [arr[i]]
      resultMax = count
    }
  }
  return result.join('\n')
}

const fs = require('fs')
const fileContent = fs.readFileSync('input.txt', 'utf8')

const result = alg(fileContent)

fs.writeFileSync('output.txt', result + '')
