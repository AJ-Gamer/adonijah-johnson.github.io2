////////////////////////////////////////////////////////////////////////////////
// min /////////////////////////////////////////////////////////////////////////
////////////////////////////////////////////////////////////////////////////////

function min(a, b) {
  if (a > b){return b}
  else if (a < b){return a}
  else {return 0}
  }
  
  ////////////////////////////////////////////////////////////////////////////////
  // isEven //////////////////////////////////////////////////////////////////////
  ////////////////////////////////////////////////////////////////////////////////
  
  function isEven(num) {
  if (num % 2 == 0){return true}
  else if (num % 1 == 0) {return false}
  }
  
  ////////////////////////////////////////////////////////////////////////////////
  // countChars //////////////////////////////////////////////////////////////////
  ////////////////////////////////////////////////////////////////////////////////
  
  function countChars(str, char) {
    if (typeof str !== 'string' || typeof char !== 'string' || char.length !== 1) {
      console.log('Provide a string and a single character.');
    }
    const count = new RegExp(char, 'g'); //g stands for global
    const matches = str.match(count);
  
    return matches ? matches.length : 0;
  }
  
  ////////////////////////////////////////////////////////////////////////////////
  // countBs /////////////////////////////////////////////////////////////////////
  ////////////////////////////////////////////////////////////////////////////////
  
  function countBs(str) {
    const regex = /B/g;
    const matches = str.match(regex);
    return matches ? matches.length : 0;
  }
  
////////////////////////////////////////////////////////////////////////////////
// DON'T REMOVE THIS CODE //////////////////////////////////////////////////////
////////////////////////////////////////////////////////////////////////////////

if ((typeof process !== 'undefined') &&
  (typeof process.versions.node !== 'undefined')) {
  module.exports = {
    min,
    isEven,
    countBs,
    countChars,
  };
};
