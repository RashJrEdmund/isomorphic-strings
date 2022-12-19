const firstWord = document.querySelector('.word1')
const secondWord = document.querySelector('.word2')
const display = document.querySelector('.display')
const checkBtn = document.querySelector('.btn')

checkBtn.addEventListener('click', () => {
  if((firstWord.innerHTML === '')||(secondWord.innerHTML === '')) {
    alert ('input a word to be compared with another')
  } else {
    if(firstWord.innerHTML.length !== secondWord.innerHTML.length) {
      
    }
  }
})