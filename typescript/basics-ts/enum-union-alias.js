"use strict";
//Type alias
// union can help to tell ts that we are fine with number or string
function combine(input1, input2
// , resultConversion: string) {
, resultConversion) {
    var result;
    if (typeof input1 === 'number' && typeof input2 === 'number' || resultConversion === 'as-N')
        result = +input1 + +input2; //if string passes so Nan
    else if (typeof input1 === 'string' && typeof input2 === 'string')
        result = input1.toString() + input2.toString();
    // if (resultConversion === 'as-N') {
    //        return +result;
    // } else {
    //        return result.toString();
    // }
    return result;
}
var combinedAges = combine(30, 60, 'as-N'); //we get 56
console.log(combinedAges);
var combinedAges2 = combine('30', '60', 'as-N'); //we get 56
console.log(combinedAges2);
var combinedNames = combine("Max", "Anna", 'as-S'); //we get 56 //this will lead to error if we dont use union
console.log(combinedNames);
