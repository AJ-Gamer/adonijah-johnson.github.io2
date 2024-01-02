//////////////////////////////////////////////////////////////////////
// Function 1 - Object Values ////////////////////////////////////////
//////////////////////////////////////////////////////////////////////

function objectValues(object) {
    //Create a variable and assign it the value of the keys in an object
    const keys = Object.keys(object);
    //Create a variable that will become an array of keys from the given object
    const values = keys.map(key => object[key]);
    //Return the new array
    return values
} 

//////////////////////////////////////////////////////////////////////
// Function 2 - Keys to String ///////////////////////////////////////
//////////////////////////////////////////////////////////////////////

function keysToString(object) {
    //Create a variable and assing it the value of keys in an object
    const keys = Object.keys(object);
    //Use the join method to turn the key value pairs into strings and return the variable attached.
    return keys.join(' ');
}

//////////////////////////////////////////////////////////////////////
// Function 3 - Values to String /////////////////////////////////////
//////////////////////////////////////////////////////////////////////

function valuesToString(object) {
    //Create a variable assigned to the values of an object 
    const values = Object.values(object);
    //Create a variable and assign it to a filter for string values
  const stringValues = values.filter(value => typeof value === 'string');
  //Return the string values joined together
  return stringValues.join(' ');
}

//////////////////////////////////////////////////////////////////////
// Function 4 - Array or Object //////////////////////////////////////
//////////////////////////////////////////////////////////////////////

function arrayOrObject(collection) {
    //Create an if statement to check if the value of collection is an array or object
    if (Array.isArray(collection)) {
        return 'array';
      } else if (typeof collection === 'object' && collection !== null) {
        return 'object';
      } else {
        return 'unknown';
      }
}

//////////////////////////////////////////////////////////////////////
// Function 5 - Capitalize Word //////////////////////////////////////
//////////////////////////////////////////////////////////////////////

function capitalizeWord(string) {
    /*Check if the string has any characters and then update the first character into an uppercase letter
    or return the string if there are no characters
    */
    if (string.length > 0) {
        return string[0].toUpperCase() + string.slice(1);
      } else {
        return string;
      }
}

//////////////////////////////////////////////////////////////////////
// Function 6 - Capitalize All Words /////////////////////////////////
//////////////////////////////////////////////////////////////////////

function capitalizeAllWords(string) {
    // Split the input string into an array of words
    const words = string.split(' ');
    /* Initialize an empty array to store capitalized words via the map method 
    and interate through each word in the array */
  const capitalizedWords = words.map(word => {
    // Check if the word is not empty
    if (word.length > 0) {
    // Capitalize the first letter of the word and add the capitalized word to the array
    return word[0].toUpperCase() + word.slice(1);
    }
    // Handle empty words by adding them as is
    return word;
  });
  // Join the capitalized words into a single string and return the array
  return capitalizedWords.join(' ');
}

//////////////////////////////////////////////////////////////////////
// Function 7 - Welcome Message //////////////////////////////////////
//////////////////////////////////////////////////////////////////////

function welcomeMessage(object) {
    //Check if object exists and if object has a name property
    if (object && object.name) {
    // return a string with only the name value, and in uppercase
    return `Welcome ${object.name[0].toUpperCase() + object.name.slice(1)}!`;
    }
}

//////////////////////////////////////////////////////////////////////
// Function 8 - Profile Info /////////////////////////////////////////
//////////////////////////////////////////////////////////////////////

function profileInfo(object) {
  if (object && object.name && object.species) {
      return `${object.name[0].toUpperCase() + object.name.slice(1)} is a ${object.species[0].toUpperCase() + object.species.slice(1)}`;
    } else {
      return 'Incomplete profile information.';
    }
}

//////////////////////////////////////////////////////////////////////
// Function 9 - Maybe Noises /////////////////////////////////////////
//////////////////////////////////////////////////////////////////////

function maybeNoises(object) {
  if (object && Array.isArray(object.noises) && object.noises.length > 0) {
      return object.noises.join(' ');
    } else {
      return 'there are no noises';
    }
}

//////////////////////////////////////////////////////////////////////
// Function 10 - Has Words ///////////////////////////////////////////
//////////////////////////////////////////////////////////////////////

function hasWord(string, word) {
  const wordsArray = string.split(' ');
return wordsArray.includes(word);
}

//////////////////////////////////////////////////////////////////////
// Function 11 - Add Friend //////////////////////////////////////////
//////////////////////////////////////////////////////////////////////

function addFriend (name, object) {
  if (object && Array.isArray(object.friends)) {
      object.friends.push(name);
    }
    return object;
}

//////////////////////////////////////////////////////////////////////
// Function 12 - Is Friend ///////////////////////////////////////////
//////////////////////////////////////////////////////////////////////

function isFriend(name, object) {
  if (object && Array.isArray(object.friends)) {
      return object.friends.includes(name);
    }
    return false;
}

//////////////////////////////////////////////////////////////////////
// Function 13 - Non-Friends /////////////////////////////////////////
//////////////////////////////////////////////////////////////////////

function nonFriends(name, array) {
  const nonFriendNames = [];
  for (const person of array) {
    if (person.name !== name && (!person.friends || !person.friends.includes(name))) {
      nonFriendNames.push(person.name);
    }
  }
  return nonFriendNames;
}
//////////////////////////////////////////////////////////////////////
// Function 14 - Update Object ///////////////////////////////////////
//////////////////////////////////////////////////////////////////////

function updateObject(object, key, value) {
  object[key] = value;
return object;
}

//////////////////////////////////////////////////////////////////////
// Function 15 - Remove Properties ///////////////////////////////////
//////////////////////////////////////////////////////////////////////

function removeProperties(object, array) {
  for (const property of array) {
      if (object.hasOwnProperty(property)) {
        delete object[property]; // Remove the property if it exists
      }
    }
    return object;
}

//////////////////////////////////////////////////////////////////////
// Function 16 - Dedup ///////////////////////////////////////////////
//////////////////////////////////////////////////////////////////////

function dedup(array) {
  const deduplicatedArray = [];
for (let i = 0; i < array.length; i++) {
  if (deduplicatedArray.indexOf(array[i]) === -1) {
    deduplicatedArray.push(array[i]);
  }
}
return deduplicatedArray;
}

//////////////////////////////////////////////////////////////////////
// DON'T REMOVE THIS CODE ////////////////////////////////////////////
//////////////////////////////////////////////////////////////////////

if((typeof process !== 'undefined') &&
   (typeof process.versions.node !== 'undefined')) {
    // here, export any references you need for tests //
    module.exports.objectValues = objectValues;
    module.exports.keysToString = keysToString;
    module.exports.valuesToString = valuesToString;
    module.exports.arrayOrObject = arrayOrObject;
    module.exports.capitalizeWord = capitalizeWord;
    module.exports.capitalizeAllWords = capitalizeAllWords;
    module.exports.welcomeMessage = welcomeMessage;
    module.exports.profileInfo = profileInfo;
    module.exports.maybeNoises = maybeNoises;
    module.exports.hasWord = hasWord;
    module.exports.addFriend = addFriend;
    module.exports.isFriend = isFriend;
    module.exports.nonFriends = nonFriends;
    module.exports.updateObject = updateObject;
    module.exports.removeProperties = removeProperties;
    module.exports.dedup = dedup;
}