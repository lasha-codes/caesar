const alphabetArray = [
  'A',
  'B',
  'C',
  'D',
  'E',
  'F',
  'G',
  'H',
  'I',
  'J',
  'K',
  'L',
  'M',
  'N',
  'O',
  'P',
  'Q',
  'R',
  'S',
  'T',
  'U',
  'V',
  'W',
  'X',
  'Y',
  'Z',
]

const keysInp = parseInt(prompt('Enter a number of keys'))
const stringInp = prompt('Enter a string')
const stringArr = []
const encodedStringArr = []

const algorithm = (key, string) => {
  for (const char of string) {
    stringArr.push(char.toUpperCase())
  }
  stringArr.forEach((char, idx) => {
    if (alphabetArray.includes(char)) {
      const letters = alphabetArray.find((let) => {
        return char === let
      })
      const letterIndex = alphabetArray.indexOf(letters)
      encodedStringArr.push(alphabetArray[letterIndex + key])
    }
  })
}
algorithm(keysInp, stringInp)

console.log(stringArr)
console.log(encodedStringArr.join(''))
