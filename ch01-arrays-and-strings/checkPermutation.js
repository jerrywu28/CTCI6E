//Given two strings, write a function that checks to see if one string is a permutation of the other

const checkPermutation = (string1, string2) => {
  let countChars = {};
  string1.split('').forEach(char => {
    if (countChars[char]) {
      countChars[char] += 1;
    } else {
      countChars[char] = 1;
    }
  })
  for (let i = 0; i < string2.length; i++) {
    let char = string2[i];
    if (countChars[char]) {
      if (countChars[char] === 0) {
        return false;
      }
      countChars[char] -= 1;
    } else {
      return false;
    }
  }
  return true;
}

console.log(checkPermutation('dagot', 'daggot'));