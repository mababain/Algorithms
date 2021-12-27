// Как известно, в США президент выбирается не прямым голосованием, а путем двухуровневого голосования. Сначала проводятся выборы в каждом штате и определяется победитель выборов в данном штате. Затем проводятся государственные выборы: на этих выборах каждый штат имеет определенное число голосов — число выборщиков от этого штата. На практике, все выборщики от штата голосуют в соответствии с результами голосования внутри штата, то есть на заключительной стадии выборов в голосовании участвуют штаты, имеющие различное число голосов. Вам известно за кого проголосовал каждый штат и сколько голосов было отдано данным штатом. Подведите итоги выборов: для каждого из участника голосования определите число отданных за него голосов.

// Формат ввода
// Каждая строка входного файла содержит фамилию кандидата, за которого отдают голоса выборщики этого штата, затем через пробел идет количество выборщиков, отдавших голоса за этого кандидата.

// Формат вывода
// Выведите фамилии всех кандидатов в лексикографическом порядке, затем, через пробел, количество отданных за них голосов.

// Пример 1
// Ввод
// McCain 10
// McCain 5
// Obama 9
// Obama 8
// McCain 1
// Вывод
// McCain 16
// Obama 17
// Пример 2
// Ввод
// ivanov 100
// ivanov 500
// ivanov 300
// petr 70
// tourist 1
// tourist 2
// Вывод
// ivanov 900
// petr 70
// tourist 3
// Пример 3
// Ввод
// bur 1
// Вывод
// bur 1

function alg(data) {
  const arr = data.toString().trim().split('\n')
  const dict = new Map()
  for (let i = 0; i < arr.length; i++) {
    let [key, value] = arr[i].split(' ')
    dict.set(key, (dict.get(key) || 0) + +value)
  }
  const candidates = [...dict.keys()]

  return candidates
    .sort()
    .map((el) => `${el} ${dict.get(el)}`)
    .join('\n')
}

const fs = require('fs')
const fileContent = fs.readFileSync('input.txt', 'utf8')

const result = alg(fileContent)

fs.writeFileSync('output.txt', result + '')
