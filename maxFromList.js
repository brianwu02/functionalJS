var _ = require('underscore');
/*
 *  Scheme/Dr Racket
 *  (define lmax(lamda (ls)
 *      (let ((first (car ls)) (rest (cdr ls)))
 *      (if (null? rest)
 *          first
 *          (let ((max-rest (lmax rest)))
 *              (if (> first max-rest)
 *                  first
 *                  max-rest))))))
 */

// written as function expression
lmax = function(ls) {
  if (_.tail(ls).length === 0) {
    return _.head(ls);
  }
  if (_.head(ls) > lmax(_.tail(ls))) {
    return _.head(ls);
  } else {
    return lmax(_.tail(ls));
  }
};

// written as function declaration
function listMax(ls) {
  var head = _.head(ls);
  var tail = _.tail(ls);
  if (tail.length === 0) {
    return head;
  } else { 
    var rest = listMax(tail);
    if (head > rest) {
      return head;
    } else {
      return rest;
    }
  }
}

console.log(lmax([3,4,10,1]));

/*  The underscore way to do eet.
 */

console.log(_.max([3,4,10,1]));

var players = [{'name': 'Brian','age': 23}, {'name': 'J','age': 21}];

console.log(_.max(players, function(player) {
  return player.age;
}));

console.log(_.min(players, function(player) {
  return player.age;
}));
  

