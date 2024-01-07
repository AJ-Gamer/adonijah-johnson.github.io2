////////////////////////////////////////////////////////////////////////////////
// range ///////////////////////////////////////////////////////////////////////
////////////////////////////////////////////////////////////////////////////////

function range(start, end, step = 1) {
  let integers = []
  if (step === -1){
    return []
  }
  if (start === end){
    return []
  }
  else if (start > end){
    for (let i = start; i >= end; i += step){
      integers.push(i)
    }
  }
  else if (start < end){
    for (let i = start; i <= end; i += step){
      integers.push(i)
    }
  }
  return integers
}

////////////////////////////////////////////////////////////////////////////////
// sum /////////////////////////////////////////////////////////////////////////
////////////////////////////////////////////////////////////////////////////////

function sum(arr) {
if (arr.length === 0 || arr[0] === 0){
  return 0
}
else {return arr.reduce((accumulator, currentValue) => accumulator + currentValue, 0);
}}

////////////////////////////////////////////////////////////////////////////////
// reverseArray ////////////////////////////////////////////////////////////////
////////////////////////////////////////////////////////////////////////////////

function reverseArray(arr) {
return arr.slice().reverse();
}

////////////////////////////////////////////////////////////////////////////////
// reverseArrayInPlace /////////////////////////////////////////////////////////
////////////////////////////////////////////////////////////////////////////////

function reverseArrayInPlace(arr) {
arr.reverse()
}

////////////////////////////////////////////////////////////////////////////////
// arrayToList /////////////////////////////////////////////////////////////////
////////////////////////////////////////////////////////////////////////////////

function arrayToList(array) {
  let list = null;
  for (let i = array.length - 1; i >= 0; i--) {
    list = {
        value: array[i],
        rest: list
    };
  }
  return list;
}

////////////////////////////////////////////////////////////////////////////////
// listToArray /////////////////////////////////////////////////////////////////
////////////////////////////////////////////////////////////////////////////////

function listToArray(list) {
  let result = [];
  if (typeof list === 'undefined' || list.value === undefined || list.rest === undefined) {
    return result;
  } else {
    result.push(list.value);
    while (list.hasOwnProperty('rest') && list.rest !== null) {
      list = list.rest;
      if (list.hasOwnProperty('value')) {
      	result.push(list.value);
      }
    }
  }
  return result;
}



////////////////////////////////////////////////////////////////////////////////
// prepend /////////////////////////////////////////////////////////////////////
////////////////////////////////////////////////////////////////////////////////

function prepend(element, list) {
  return {
    value: element,
    rest: list
  };
}

////////////////////////////////////////////////////////////////////////////////
// nth /////////////////////////////////////////////////////////////////////////
////////////////////////////////////////////////////////////////////////////////

function nth(list, number) {
  return listToArray(list)[number];
}

////////////////////////////////////////////////////////////////////////////////
// deepEqual ///////////////////////////////////////////////////////////////////
////////////////////////////////////////////////////////////////////////////////

function deepEqual(value1, value2) {
  if (typeof value1 !== typeof value2) {
    return false;
  }
  if (value1 === value2) {
    return true;
  }
  if (typeof value1 === 'object' && value1 !== null && value2 !== null) {
    const keys1 = Object.keys(value1);
    const keys2 = Object.keys(value2);
    if (keys1.length !== keys2.length) {
      return false;
    }
    for (const key of keys1) {
      if (!deepEqual(value1[key], value2[key])) {
        return false;
      }
    }
    return true;
  }
  return false;
}

////////////////////////////////////////////////////////////////////////////////
// DON'T REMOVE THIS CODE //////////////////////////////////////////////////////
////////////////////////////////////////////////////////////////////////////////

if ((typeof process !== 'undefined') &&
  (typeof process.versions.node !== 'undefined')) {
  module.exports = {
    range,
    sum,
    reverseArray,
    reverseArrayInPlace,
    arrayToList,
    listToArray,
    prepend,
    nth,
    deepEqual,
  };
};
