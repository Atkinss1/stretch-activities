// Make password.js take in a single string as a command line argument and print out an obfuscated version of that password, using the rules defined below.

// The rules for obfuscating a password are as follows:

/**
 * Every "a" in the string should be replaced with a "4".
Every "e" in the string should be replaced with a "3".
Every "o" (oh) in the string should be replaced with a "0" (zero).
Every "l" (el) in the string should be replaced with a "1" (one).
 */

// Expected output:

// $ node password.js password
// p4ssw0rd

const input = process.argv[2];

if (!input) {
  console.error('Please provide a password as a command line argument');
  process.exit();
}

function password (password) {
    let obfuscated = '';
    for (const char of password) {
      switch (char) {
        case 'a':
          obfuscated += '4';
          break;
        case 'e':
          obfuscated += '3';
          break;
        case 'o':
          obfuscated += '0';
          break;
        case 'l':
          obfuscated += '1';
          break;
        default:
          obfuscated += char;
      }
    }
    return obfuscated;
};

console.log(password(input));