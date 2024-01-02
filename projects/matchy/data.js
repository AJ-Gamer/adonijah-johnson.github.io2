/**
 * Part 1
 *
 * In this file, we're going to practice
 * creating and accessing data structues.
 *
 * See the README for detailed instructions,
 * and read every instruction carefully.
 */

//////////////////////////////////////////////////////////////////////
// Step 1 - Object Creation //////////////////////////////////////////
//////////////////////////////////////////////////////////////////////
var animal = {};
animal.species = "Dog";
animal['name'] = "Cerburus";
animal.noises = [];
console.log(animal);
//////////////////////////////////////////////////////////////////////
// Step 2 - Array Creation ///////////////////////////////////////////
//////////////////////////////////////////////////////////////////////
var noises = [];
noises[0] = 'bark';
noises.push('growl');
noises.unshift('howl');
noises.push('sniff');
console.log(noises.length);
console.log(noises[noises.length - 1]);
console.log(noises);
//////////////////////////////////////////////////////////////////////
// Step 3 - Combining Step 1 and 2 ///////////////////////////////////
//////////////////////////////////////////////////////////////////////
animal['noises'] = noises
animal.noises.push('whine')
console.log(animal)
/* *******************************************************************
 * Step 4 - Review
 *
 * 1. What are the different ways you can access properties on objects?
 *    Dot notation, bracket notation, and for in loops.
 * 2. What are the different ways of accessing elements on arrays?
 *    Bracket notation with an index and array methods.
 * *******************************************************************
 */

/* *******************************************************************
 * Step 5 - Take a Break!
 *
 * It's super important to give your brain and yourself
 * a rest when you can! Grab a drink and have a think!
 * For like 10 minutes, then, BACK TO WORK! :)
 * *******************************************************************
 */

//////////////////////////////////////////////////////////////////////
// Step 6 - A Collection of Animals //////////////////////////////////
//////////////////////////////////////////////////////////////////////
var animals = [];
animals.push(animal);
console.log(animals);
var duck = {
  species: 'duck',
  name: 'Jennifer',
  noises: ['quack', 'honk', 'sneeze', 'woosh']
};
animals.push(duck);
console.log(animals);
var fox = {
  species: 'fox',
  name: 'Kurama',
  noises: ['yipp', 'purr']
};
var spider = {
  species: 'spider',
  name: 'Peter',
  noises: ['click', 'hiss']
};
animals.push(fox, spider);
console.log(animals);

//////////////////////////////////////////////////////////////////////
// Step 7 - Making Friends ///////////////////////////////////////////
//////////////////////////////////////////////////////////////////////
var friends = [];
/* I chose an array as my data structure because arrays are ordered lists of items.
Each animal's list of friends can be stored as an array, where each element represents a friend. */
function getRandom(arr) {
  return Math.floor(Math.random() * arr.length);
}
var randomIndex = getRandom(animals);
var randomAnimal = animals[randomIndex];
friends.push(randomAnimal.name);
console.log(friends);
var chosenAnimal = animals[0];
chosenAnimal.friends = friends;
console.log(chosenAnimal);

/**
 * Nice work! You're done Part 1. Pat yourself on the back and
 * move onto Part 2 in the file called "functions.js"
 */



//////////////////////////////////////////////////////////////////////
// DON'T REMOVE THIS CODE ////////////////////////////////////////////
//////////////////////////////////////////////////////////////////////
var animal, noises, animals, friends, getRandom;
if((typeof process !== 'undefined') &&
   (typeof process.versions.node !== 'undefined')) {
     module.exports.animal = animal || null;
     module.exports.noises = noises || null;
     module.exports.animals = animals || null;
     module.exports.friends = friends || null;
     module.exports.getRandom = getRandom || null;
}