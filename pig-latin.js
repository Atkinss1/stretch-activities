function pigLatin () {
  const [,, ...args] = process.argv;
  let results = '';
  for (let word of args) {
    word = word.slice(1) + word.charAt(0) + 'ay';
    results += word;
  }
  console.log(results);
}

pigLatin();