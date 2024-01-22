// #!/usr/bin/env node

'use strict';

var customers = require('./data/customers.json');
var _ = require("underbar");

/**
 * 1. Import your lodown module using the require() method,
 *    using the string 'lodown-<my-username>', or whatever
 *    name with which you published your npm lodown project.
 *
 * 2. Solve all problems as outlined in the README.
 *
 * 3. We started the first one for you as an example! Make the rest in that style.
 *
 * 4. To test your work, run the following command in your terminal:
 *
 *    npm start --prefix ./adonijah-johnson.github.io2/projects/let-s-get-functional
 *
 *    IMPORTANT: Make sure you replace <YOUR_GITHUB_FOLDER with your actual github folder name that is in your workspace.
 */

var maleCount = function(array) {
    return array.filter(function(customer) {
        return customer.gender === "male";
    }).length;
};

var femaleCount = function(array) {
    return array.reduce(function(acc, customer) {
      return customer.gender === "female" ? acc + 1 : acc;
    }, 0);
};  

var oldestCustomer = function(array) {
  var oldest = array.reduce(function(prev, current) {
    var prevBirthdate = new Date(current.age, prev.age);
    return prevBirthdate > new Date(current.age, current.age) ? prev : current;
  });
  return oldest.name;
};

var youngestCustomer = function(array) {
  var youngest = array.reduce(function(prev, current) {
    var prevBirthdate = new Date(prev.age, prev.age);
    return prevBirthdate < new Date(current.age, current.age) ? prev : current;
  });
  return youngest.name;
};

var averageBalance = function(array) {
  var totalBalance = array.reduce(function(acc, customer) {
    // Use Number() to convert the balance string to a number
    var balanceValue = Number(customer.balance.replace('$', '').replace(',', ''));
    return acc + balanceValue;
  }, 0);
  return totalBalance / array.length;
};
  
var firstLetterCount = function(array, letter) {
    return array.filter(function(customer) {
      return customer.name.charAt(0).toLowerCase() === letter.toLowerCase();
    }).length;
};
  
var friendFirstLetterCount = function(array, customer, letter) {
    var targetCustomer = array.find(function(cust) {
      return cust.name === customer;
    });
    if (targetCustomer) {
      return targetCustomer.friends.filter(function(friend) {
        return friend.name.charAt(0).toLowerCase() === letter.toLowerCase();
      }).length;
    }
    return 0;
};

var friendsCount = function(array, name) {
    var targetCustomer = array.find(function(customer) {
      return customer.name === name;
    });
    if (targetCustomer) {
      return array.filter(function(customer) {
        return customer.friends.some(function(friend) {
          return friend.name === name;
        });
      }).map(function(customer) {
        return customer.name;
      });
    }
    return [];
};

var topThreeTags = function(array) {
    var tagCounts = array.reduce(function(acc, customer) {
      customer.tags.forEach(function(tag) {
        acc[tag] = (acc[tag] || 0) + 1;
      });
      return acc;
    }, {});
    var sortedTags = Object.keys(tagCounts).sort(function(a, b) {
      return tagCounts[b] - tagCounts[a];
    });
    return sortedTags.slice(0, 3);
};

var genderCount = function(array) {
    return array.reduce(function(acc, customer) {
      acc[customer.gender] = (acc[customer.gender] || 0) + 1;
      return acc;
    }, {});
};

//////////////////////////////////////////////////////////////////////
// DON'T REMOVE THIS CODE ////////////////////////////////////////////
//////////////////////////////////////////////////////////////////////

// here, export any references you need for tests //
module.exports.maleCount = maleCount;
module.exports.femaleCount = femaleCount;
module.exports.oldestCustomer = oldestCustomer;
module.exports.youngestCustomer = youngestCustomer;
module.exports.averageBalance = averageBalance;
module.exports.firstLetterCount = firstLetterCount;
module.exports.friendFirstLetterCount = friendFirstLetterCount;
module.exports.friendsCount = friendsCount;
module.exports.topThreeTags = topThreeTags;
module.exports.genderCount = genderCount;
