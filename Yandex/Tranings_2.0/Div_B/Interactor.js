// Лена руководит разработкой тестирующей системы, в которой реализованы интерактивные задачи.
// До заверщения очередной стадии проекта осталось написать модуль, определяющий итоговый вердикт системы для интерактивной задачи. Итоговый вердикт определяется из кода завершения задачи, вердикта интерактора и вердикта чекера по следующим правилам:

// Вердикт чекера и вердикт интерактора — это целые числа от 0 до 7 включительно.
// Код завершения задачи — это целое число от -128 до 127 включительно.
// Если интерактор выдал вердикт 0, итоговый вердикт равен 3 в случае, если программа завершилась с ненулевым кодом, и вердикту чекера в противном случае.
// Если интерактор выдал вердикт 1, итоговый вердикт равен вердикту чекера.
// Если интерактор выдал вердикт 4, итоговый вердикт равен 3 в случае, если программа завершилась с ненулевым кодом, и 4 в противном случае.
// Если интерактор выдал вердикт 6, итоговый вердикт равен 0.
// Если интерактор выдал вердикт 7, итоговый вердикт равен 1.
// В остальных случаях итоговый вердикт равен вердикту интерактора.
// Ваша задача — реализовать этот модуль.

// Формат ввода:
// Входной файл состоит из трёх строк. В первой задано целое число  r  ( −128 ≤ r ≤ 127 ) — код завершения задачи, во второй — целое число  i  ( 0 ≤ i ≤ 7 ) — вердикт интерактора, в третьей — целое число  c  ( 0 ≤ c ≤ 7 ) — вердикт чекера.
// Формат вывода:
// Выведите одно целое число от 0 до 7 включительно — итоговый вердикт системы.

// Пример 1
// Ввод	Вывод: 0
// 0
// 0
// 0
// Пример 2
// Ввод	Вывод: 3
// -1
// 0
// 1
// Пример 3
// Ввод	Вывод: 6
// 42
// 1
// 6
// Пример 4
// Ввод	Вывод: 1
// 44
// 7
// 4
// Пример 5
// Ввод	Вывод: 3
// 1
// 4
// 0
// Пример 6
// Ввод	Вывод: 2
// -3
// 2
// 4

function finalVerdict(data) {
  const [r, i, c] = data
    .toString()
    .split('\n')
    .map((x) => +x)
  let v

  switch (i) {
    case 0:
      v = r !== 0 ? 3 : c
      break
    case 1:
      v = c
      break
    case 4:
      v = r !== 0 ? 3 : 4
      break
    case 6:
      v = 0
      break
    case 7:
      v = 1
      break
    default:
      v = i
      break
  }

  return v
}

process.stdin.on('data', (data) => {
  const result = finalVerdict(data)
  process.stdout.write(result + '')
  process.exit()
})
