const firstWord = document.querySelector('.word1')
const secondWord = document.querySelector('.word2')
const display = document.querySelector('.display')
const checkBtn = document.querySelector('.btn')

const checkIsomorphism = () => {
  const map = new Map()
  const set = new Set()
  let string1 = firstWord.value
  let string2 = secondWord.value
  string1 = string1.toLocaleLowerCase()
  string2 = string2.toLocaleLowerCase()
  if (string1.length !== string2.length) {
    return 'strings are not of the length'
  }

  for (let i = 0; i < string1.length; i++) {
    const char1 = string1.charAt(i)
    const char2 = string2.charAt(i)
    if (map.has(char1)) {
      if (map.get(char1) !== char2) {
        return 'The strigs are not isomorphic'
      }
    } else {
      if(set.has(char2)){
        return `its not isomorphic`
      }
      map.set(char1, char2)
      set.add(char2)
    }
    }
    return 'The strings are isomorphic'
  } 


checkBtn.addEventListener('click', () => {
  if((firstWord.value === '')||(secondWord.value === '')) {
    alert ('input a word to be compared with another')
  } else {
    if(firstWord.length !== secondWord.length) {
      alert ('words are not of the same length. Not isomorphic')
    } else {
      display.innerHTML = checkIsomorphism()
    }
  }
})
