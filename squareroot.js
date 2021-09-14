
let count=0;

function sqrtnum(num)
{
    
    let i=1;
   
    while(num>=i)
    {
        
        num =num-i;
        i=i+2;
        count=count+1;
    }
    
return count;
}

let num=9;
console.log(sqrtnum(num));