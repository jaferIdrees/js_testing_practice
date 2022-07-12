const calculator = {
add: (a,b) => {
  if (String(a).match(/^0$|^-?[1-9]\d*(\.\d+)?$/) === null || String(b).match(/^0$|^-?[1-9]\d*(\.\d+)?$/) === null) throw new Error('you need to pass numerical values only')
  return a + b;
},

subtract: (a,b)=> {
  if (String(a).match(/^0$|^-?[1-9]\d*(\.\d+)?$/) === null || String(b).match(/^0$|^-?[1-9]\d*(\.\d+)?$/) === null) throw new Error('you need to pass numerical values only')
  return a - b;
},

multiply: (a,b) => {
  if (String(a).match(/^0$|^-?[1-9]\d*(\.\d+)?$/) === null || String(b).match(/^0$|^-?[1-9]\d*(\.\d+)?$/) === null) throw new Error('you need to pass numerical values only')
  return a * b;
},

devide: (a,b) =>{
  if (String(a).match(/^0$|^-?[1-9]\d*(\.\d+)?$/) === null || String(b).match(/^0$|^-?[1-9]\d*(\.\d+)?$/) === null) throw new Error('you need to pass numerical values only')
  return a / b;
}
}
module.exports = {
  add: calculator.add,
  subtract: calculator.subtract,
  multiply: calculator.multiply,
  devide: calculator.devide,
}