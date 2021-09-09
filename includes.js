/*let array=[6,1,7,18];

function boolarr(array)
{
    
    for(let i=0;i<array.length;i++)
    {
    if(array[i]>10)
    {
        return false;
    } 
    
}return true;

}
console.log(boolarr(array));*/

//another Way ::  every()
/*
let array=[6,1,7,1];
let testarray=array.every((value)=>value<10);
console.log(testarray);
*/
//return true atleast on value grater then 10  :: some()
let num=[1,5,8,7];
let number=num.some((value)=>value>10);
console.log(number);