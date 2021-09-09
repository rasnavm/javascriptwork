
//foreach
/*
let A=[2,4,6,8];
//console.log(A);
let text = "";
A.forEach(myfun);

function myfun(value)
{
text += value+ " ";
}
console.log(text);

*/

//map function
//multiply each element by 2 stored in another array
let num=[1,3,5,7];
let num2=[];
for(let i=0;i<num.length;i++)
{
    num2.push(num[i]*2);
    return num2;
}
console.log(num2);