function add(n1:number,n2:number):number
{
       return n1+n2;
}
//return types
//new return type: VOID

function printResult(num):void
{
       console.log("result: "+num);
       //void means nothing is getting return
       //in JS void == undefined
       
}
printResult(add(10,7));
//so
console.log(printResult(add(10,14)));
//OP=>
//24
//Und  
// no return type as undef 
// var its ok
let someValues:undefined;
//TO use return type as und we need to return;
function printResult1(num):undefined
{
       console.log("result: "+num);
       //void means nothing is getting return
       //in JS void == undefined
       return;
}

function addAndHandle(n1:number,n2:number,cb:(num:number)=>void)
{
       const result=n1+n2;
       cb(result);
}
addAndHandle(10,20,(result)=>{
       console.log(result);

})


let combinedValues:(a:number,b:number)=>number;
//combinedVlaues can be any function that accepts two args and returns a number
combinedValues=add;
// combinedValues=printResult;
// combinedValues=4;

console.log(combinedValues(8,1));
