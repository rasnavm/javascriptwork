/*
let num=[1,3,5,7];


function multiply(num)
{
    let num2=[];
    for(let i=0;i<num.length;i++)
{
   // num2.push(num[i]*2);
    num2[i]=(num[i]*num[i]);
}
return num2;
}

console.log(multiply(num));
*/

// by using map function

let num=[1,2,3,4];
//let num2=num.map(function(value) {return value*value});/*both are same*/
let num2=num.map((value)=>{return value*value});
console.log(num2);
