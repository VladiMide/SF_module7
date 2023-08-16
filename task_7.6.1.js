const word = prompt();
let newWord = word.toLowerCase().replace(/ /g,'');
let arrayReverseWord = [];
for (let i = newWord.length - 1; i >= 0; i--)
  {
    arrayReverseWord.push(newWord[i]);
  }
let reverseWord = ''
for (let i = 0; i < arrayReverseWord.length; i++)
  {
    reverseWord = reverseWord + arrayReverseWord[i];
  }
if (newWord === reverseWord)
{
  alert(`Слово ${word} является полиндромом`)
}
else
{
  alert(`Слово ${word} не является полиндромом`)
}
