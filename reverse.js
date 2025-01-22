//Write a program that takes any number of command line arguments, all strings, and reverses them before outputting them one at a time to the console.

// Do NOT use JavaScript's Array.prototype.reverse or Array.prototype.join functions to solve this problem.

function reverse () {
  const [,, ...args] = process.argv;

  let reversedWord = '';

  for (let word of args) {
    for (let i = word.length - 1; i >= 0; i--) {
      reversedWord += word[i];
    }
    console.log(reversedWord);
    reversedWord = '';
  }
}

reverse();