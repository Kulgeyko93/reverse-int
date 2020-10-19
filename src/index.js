module.exports = function reverse (n) {
  let result = [...`${n}`].reverse();
  if ( result[result.length -1] === '-') {
    result.pop();
  }
  return Number(result.join(''))

}
