function reverseString(string){
  let strArray = [...string];
  return (strArray.reverse().join(''));
}
module.exports = reverseString;