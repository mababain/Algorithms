// В новом учебном году на занятия в компьютерные классы Дворца Творчества Юных пришли учащиеся, которые были разбиты на N групп. В i-й группе оказалось Xi человек. Тут же перед директором встала серьезная проблема: как распределить группы по аудиториям. Во дворце имеется M ≥ N аудиторий, в j-й аудитории имеется Yj компьютеров. Для занятий необходимо, чтобы у каждого учащегося был компьютер и еще один компьютер был у преподавателя. Переносить компьютеры из одной аудитории в другую запрещается. Помогите директору!

// Напишите программу, которая найдет, какое максимальное количество групп удастся одновременно распределить по аудиториям, чтобы всем учащимся в каждой группе хватило компьютеров, и при этом остался бы еще хотя бы один для учителя.

// Формат ввода
// На первой строке входного файла расположены числа N и M (1 ≤ N ≤ M ≤ 1000). На второй строке расположено N чисел — X1, …, XN (1 ≤ Xi ≤ 1000 для всех 1 ≤ i ≤ N). На третьей строке расположено M чисел Y1, ..., YM (1 ≤ Yi ≤ 1000 для всех 1 ≤ i ≤ M).

// Формат вывода
// Выведите на первой строке число P - количество групп, которые удастся распределить по аудиториям. На второй строке выведите распределение групп по аудиториям – N чисел, i-е число должно соответствовать номеру аудитории, в которой должна заниматься i-я группа. (Нумерация как групп, так и аудиторий, начинается с 1). Если i-я группа осталась без аудитории, i-е число должно быть равно 0. Если допустимых распределений несколько, выведите любое из них.

// Пример 1
// Ввод
// 1 1
// 1
// 2
// Вывод
// 1
// 1
// Пример 2
// Ввод
// 1 1
// 1
// 1
// Вывод
// 0
// 0

function alg(data) {
  let [_, groupsLength, roomPlaces] = data.toString().trim().split('\n')
  groupsLength = groupsLength
    .trim()
    .split(' ')
    .map((el) => +el)
  roomPlaces = roomPlaces
    .trim()
    .split(' ')
    .map((el) => +el)
  const rooms = {}
  for (let i = 0; i < roomPlaces.length; i++) {
    const roomSize = roomPlaces[i]
    if (!rooms[roomSize]) rooms[roomSize] = []
    rooms[roomSize].push(i + 1)
  }
  roomPlaces = roomPlaces.sort((a, b) => a - b)
  console.log(groupsLength)
  let count = 0
  let resultArr = []
  for (let i = 0; i < groupsLength.length; i++) {
    let requiredRoomSize = null
    for (let j = 0; j < roomPlaces.length; j++) {
      if (!requiredRoomSize & (roomPlaces[j] > groupsLength[i])) {
        if (rooms[roomPlaces[j]]?.length) requiredRoomSize = roomPlaces[j]
      }
    }

    if (requiredRoomSize) {
      resultArr.push(rooms[requiredRoomSize].pop())
      count += 1
    } else {
      resultArr.push(0)
    }
  }
  return `${count}\n${resultArr.join(' ')}`
}

const fs = require('fs')
const fileContent = fs.readFileSync('input.txt', 'utf8')

const result = alg(fileContent)

fs.writeFileSync('output.txt', result + '')
