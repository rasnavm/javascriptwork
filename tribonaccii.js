let n;
let i=1;
let j=0;
let k=0;
let pos=4
let next=i+j+k;
function tribonacci(signature,n){
    //your code here
 
while(pos<=n)
{
    console.log(i,j,k,next);
    i=j;
    j=k;
    k=next;
    next=i+j+k;
    pos=pos+1
    
}}
console.log((tribonacci([1,0,0],10)));
