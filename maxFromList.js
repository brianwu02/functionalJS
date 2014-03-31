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

listMax = function(ls) {
  var head = _.head(ls);
  var tail = _.tail(ls);
  if (tail.length === 0) {
    return head;
  } else {
    var maxRest = listMax(tail);
    if (head > maxRest) {
      return head;
    } else {
      return maxRest;
    }
  }
};

console.log(listMax([3,4,10,1]));
