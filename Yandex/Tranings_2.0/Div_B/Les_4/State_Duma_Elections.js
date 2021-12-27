// Статья 83 закона “О выборах депутатов Государственной Думы Федерального Собрания Российской Федерации” определяет следующий алгоритм пропорционального распределения мест в парламенте.

// Необходимо распределить 450 мест между партиями, участвовавших в выборах. Сначала подсчитывается сумма голосов избирателей, поданных за каждую партию и подсчитывается сумма голосов, поданных за все партии. Эта сумма делится на 450, получается величина, называемая “первое избирательное частное” (смысл первого избирательного частного - это количество голосов избирателей, которое необходимо набрать для получения одного места в парламенте).

// Далее каждая партия получает столько мест в парламенте, чему равна целая часть от деления числа голосов за данную партию на первое избирательное частное.

// Если после первого раунда распределения мест сумма количества мест, отданных партиям, меньше 450, то оставшиеся места передаются по одному партиям, в порядке убывания дробной части частного от деления числа голосов за данную партию на первое избирательное частное. Если же для двух партий эти дробные части равны, то преимущество отдается той партии, которая получила большее число голосов.

// Формат ввода
// На вход программе подается список партий, участвовавших в выборах. Каждая строка входного файла содержит название партии (строка, возможно, содержащая пробелы), затем, через пробел, количество голосов, полученных данной партией – число, не превосходящее 108.

// Формат вывода
// Программа должна вывести названия всех партий и количество голосов в парламенте, полученных данной партией. Названия необходимо выводить в том же порядке, в котором они шли во входных данных.

// Пример 1
// Ввод
// Party One 100000
// Party Two 200000
// Party Three 400000
// Вывод
// Party One 64
// Party Two 129
// Party Three 257
// Пример 2
// Ввод
// Party number one 100
// Partytwo 100
// Вывод
// Party number one 225
// Partytwo 225
// Пример 3
// Ввод
// Party number one 449
// Partytwo 1
// Вывод
// Party number one 449
// Partytwo 1

function alg(data) {
  const lines = data.toString().trim().split('\n')
  const parties = {}
  let countVotes = 0
  for (let line of lines) {
    const votes = +line.slice(line.lastIndexOf(' '))
    const name = line.slice(0, line.lastIndexOf(' '))
    countVotes += votes
    parties[name] = [votes]
  }
  const votesForSeat = countVotes / 450
  let countSeatsAreTaken = 0
  for (const name of Object.keys(parties)) {
    const countPlaces = parties[name][0] / votesForSeat
    countSeatsAreTaken += Math.floor(countPlaces)
    const value = parties[name]
    value[1] = countPlaces
    parties[name] = value
  }
  let freeSeats = 450 - countSeatsAreTaken
  if (freeSeats) {
    const sortedArr = Object.keys(parties).sort((nameA, nameB) => {
      if (parties[nameA][1] % 1 < parties[nameB][1] % 1) return 1
      else if (parties[nameA][1] % 1 === parties[nameB][1] % 1) {
        return parties[nameB][0] - parties[nameA][0]
      } else if (parties[nameA][1] % 1 > parties[nameB][1] % 1) return -1
    })
    let i = 0
    while (freeSeats) {
      const value = parties[sortedArr[i]]
      value[1] += 1
      parties[sortedArr[i]] = value
      i += 1
      freeSeats -= 1
    }
  }
  return Object.keys(parties)
    .map((party) => `${party} ${Math.floor(parties[party][1])}`)
    .join('\n')
}

const fs = require('fs')
const fileContent = fs.readFileSync('input.txt', 'utf8')

const result = alg(fileContent)

fs.writeFileSync('output.txt', result + '')
