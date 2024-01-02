
////////////////////////////////////////////////////////////////////////////////
// triangles ///////////////////////////////////////////////////////////////////
////////////////////////////////////////////////////////////////////////////////

function triangles(n) {
  if (typeof n !== 'number' || n <= 0) {
    console.error('Input is not a positive number.');
    return;
  }
  for (let i = 1; i <= n; i++) {
    let triLevel = '';
    for (let j = 1; j <= i; j++) {
      triLevel += '#';
    }
    console.log(triLevel);
  }
}
////////////////////////////////////////////////////////////////////////////////
// fizzBuzz ////////////////////////////////////////////////////////////////////
////////////////////////////////////////////////////////////////////////////////

function fizzBuzz(start, end) {
  for (var i = start; i <= end; i++){
    if (i % 15 == 0){
      console.log('fizzbuzz')
    }
    else if (i % 3 == 0){
      console.log('fizz')
      }
    else if (i % 5 == 0){
      console.log('buzz')
    }
    else {console.log(i)}
    }
  }

////////////////////////////////////////////////////////////////////////////////
// drawChessboard //////////////////////////////////////////////////////////////
////////////////////////////////////////////////////////////////////////////////

function drawChessboard(size) {
  let nextLetter = ' ';
  let string = '';
  for (let n = 1; n <= (size * size); n++) {
    string += nextLetter;
    if (n % size == 0) {
      string += '\n';
        if (size % 2 == 1) {
          nextLetter = (nextLetter == ' ')? '#': ' ';
        }
    } else {
      nextLetter = (nextLetter == ' ')? '#': ' ';
    }
  }
  console.log(string);
}

////////////////////////////////////////////////////////////////////////////////
// DON'T REMOVE THIS CODE //////////////////////////////////////////////////////
////////////////////////////////////////////////////////////////////////////////

if ((typeof process !== 'undefined') &&
  (typeof process.versions.node !== 'undefined')) {
  module.exports = {
    triangles,
    fizzBuzz,
    drawChessboard,
  };
}
