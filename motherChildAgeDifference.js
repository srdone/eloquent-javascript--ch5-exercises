// import the ancestry data
var ancestry = require('./ancestry');

// parse the ancestry data into an object
ancestry = JSON.parse(ancestry);

// create an object with names of people as keys
// this snippet copied from problem set (partially)
function byName(arr) {
  var byNameObj = {};
  arr.forEach(function(person) {
    byNameObj[person.name] = person;
  });
  return byNameObj;
}

// averages values - also copied from problem set
function average(array) {
  function plus(a, b) { return a + b; }
  return array.reduce(plus) / array.length;
}

// my code going forward

// Compute the average age difference between mothers and children

// pairingKey: property of object to pair people on
// peopleSet: object with names of people as keys and people objects as values
// returns: objects containing matched pairs of people based on pairingKey
function getPairs(pairingKey, people) {
  var pairs = [];
  for (var key in people) {
    var pair = {};
    pair.basePerson = people[key];
    // use the pairing key to pull back the name of the person to find as a pair
    pair.matchedPair = people[pair.basePerson[pairingKey]];
    // handle cases where parents aren't in the set - don't add them to the final array
    console.log(pair);
    if (pair.matchedPair) {
      pairs.push(pair);
    }
  }
  console.log(pairs);
  return pairs;
}

// Takes a set of person pairs
// Returns the age difference of the two people
// = matchedPair age at birth of basePerson
function ageDifferences(pairs) {
  var result = pairs.map(function(pair) {
    return pair.basePerson.born - pair.matchedPair.born;
  });
  console.log(result);
  return result;
}

var avg = average(ageDifferences(getPairs('mother', byName(ancestry))));

console.log(avg);
