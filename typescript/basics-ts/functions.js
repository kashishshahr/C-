"use strict";
function add(n1, n2) {
    return n1 + n2;
}
//return types
//new return type: VOID
function printResult(num) {
    console.log("result: " + num);
    //void means nothing is getting return
    //in JS void == undefined
}
printResult(add(10, 7));
//so
console.log(printResult(add(10, 14)));
//OP=>
//24
//Und  
// no return type as undef 
// var its ok
var someValues;
//TO use return type as und we need to return;
function printResult1(num) {
    console.log("result: " + num);
    //void means nothing is getting return
    //in JS void == undefined
    return;
}
function addAndHandle(n1, n2, cb) {
    var result = n1 + n2;
    cb(result);
}
addAndHandle(10, 20, function (result) {
    console.log(result);
});
var combinedValues;
//combinedVlaues can be any function that accepts two args and returns a number
combinedValues = add;
// combinedValues=printResult;
// combinedValues=4;
console.log(combinedValues(8, 1));
