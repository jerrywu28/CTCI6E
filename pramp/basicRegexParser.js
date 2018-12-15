function isMatch(text, pattern) {
  let variance = 0;
  if (text === pattern) {
    return true;
  }
  for (let i = 0; i < Math.max(pattern.length, text.length); i++) {
    if (text[i + variance] === pattern[i]) {
      continue;
    } else if (text[i + variance] && pattern[i] === '.') {
      continue;
    } else if (pattern[i + 1] === '*') {
      let oldVariance = variance;
      for (let v = i; v < text.length; v++) {
        if (text[v] === pattern[i]) {
          variance += 1;
        } else {
          if (variance === oldVariance) {
            variance -= 1;
          }
          break;
        }
      }
      continue;
    } else {
      return false;
    }
  }
  return true;
}

console.log('aa', '.: ', isMatch('aa', '.'), 'when should return', false);
console.log('aaa', 'a.b: ', isMatch('aaa', 'a.b'), 'when should return', false)
console.log('aa', 'a: ', isMatch('aa', 'a'), 'when should return', false);
console.log('aa', 'aa: ', isMatch('aa', 'aa'), 'when should return', true);
console.log('abc', 'a.c: ', isMatch('abc', 'a.c'), 'when should return', true);
console.log('abbbbc', 'ab*: ', isMatch('abbbbc', 'ab*'), 'when should return', false);
console.log('acd', 'ab*c: ', isMatch('acd', 'ab*c.'), 'when should return', true);