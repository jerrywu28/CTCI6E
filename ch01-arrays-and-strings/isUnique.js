//Using additional data structures:

const isUnique1 = (string) => {
  //Declare empty object which will be used to store string frequency data
  let countCharacters = {}

  //Create keys for each string (if they do not exist in object) and set frequency to 1. Add 1 if key exists already.
  string.split('').forEach(character => {
    if (!countCharacters.hasOwnProperty(character)) {
      countCharacters[character] = 1;
    } else {
      countCharacters[character] += 1;
    }
  })
  
  //Filters array of countCharacter's values to see if greater than 1. If so, not all characters are unique (return false).
  if (Object.values(countCharacters).filter(frequency => frequency > 1).length !== 0) {
    return false;
  }
  return true;
};

//Without additional data structures:

const isUnique2 = (string) => {
  for (let i = 0; i < string.length; i++) {
    for (let j = i + 1; j < string.length; j++) {
      if (string[i] === string[j]) {
        return false;
      }
    }
  }
  return true;
}

console.log(isUnique1('cat'));
console.log(isUnique2('catt'));

module.exports = isUnique;