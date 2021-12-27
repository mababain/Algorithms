// В строкоремонтную мастерскую принесли строку, состоящую из строчных латинских букв. Заказчик хочет сделать из неё палиндром. В мастерской могут за 1 байтландский тугрик заменить произвольную букву в строке любой выбранной заказчиком буквой.
// Какую минимальную сумму придётся заплатить заказчику за ремонт строки?
// Напомним, что палиндромом называется строка, которая равна самой себе, прочитанной в обратном направлении.

// Формат ввода:
// Входные данные содержат непустую строку, состоящую из строчных латинских букв, которую принёс заказчик. Длина строки не превосходит
// 10^4.

// Формат вывода:
// Выведите одно целое число — минимальную сумму, которую заказчику придётся заплатить за превращение принесённой заказчиком строки в палиндром.

// Пример 1
// Ввод	Вывод: 0
// a
// Пример 2
// Ввод	Вывод: 1
// ab
// Пример 3
// Ввод	Вывод: 4
// cognitive

function alg(data) {
  const str = data.toString().trim()
  let start = 0
  let end = str.length - 1
  let count = 0
  while (start < end) {
    if (str[start] !== str[end]) count++
    start++
    end--
  }
  return count
}

process.stdin.on('data', (data) => {
  const result = alg(data)
  process.stdout.write(result + '')
  process.exit()
})
