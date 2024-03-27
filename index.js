const tutorials = [
  'what does the this keyword mean?',
  'What is the Constructor OO pattern?',
  'implementing Blockchain Web API',
  'The Test Driven Development Workflow',
  'What is NaN and how Can we Check for it',
  'What is the difference between stopPropagation and preventDefault?',
  'Immutable State and Pure Functions',
  'what is the difference between == and ===?',
  'what is the difference between event capturing and bubbling?',
  'what is JSONP?'
];

//takes an array of strings(tutorials) and returns a new array where each string has its first letter of each word uppercased.
//various methods have been used to achieve this.
// split method has been used to split the string into an array of words
// map method has been used to iterate over each word in the array
//charAt method has been used to get the first letter of each word
//toUpperCase method has been used to uppercase the first letter of each word
//slice method has been used to get the rest of the word
//join method has been used to join the first letter of each word with the rest of the word
const titleCased = () => {
  return tutorials.map(tutorial => {
    const words = tutorial.split(' ');
    return words.map(word => word.charAt(0).toUpperCase() + word.slice(1)).join(' ');
  });
}

