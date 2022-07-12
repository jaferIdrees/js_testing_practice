function stringLength(string) { 
  if (string.length<1 || string.length>10) throw new Error("Invalid string length");
  return string.length; 
}
// console.log(stringLength('hellohelllllo'));
module.exports = stringLength;