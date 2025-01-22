function pigLatin () {
  const [,, ...args] = process.argv;
  
  const pigLatin = args.map(word => word.slice(1) + word.charAt(0) + 'ay');
  return console.log(pigLatin.join(' '));

};

pigLatin();