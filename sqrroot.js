function sqrnum(num)
{
 
    for(let i=0;i<=num/2;i++)
    {
        if(i*i==num)
        { 
            return i;
        }
        
    }
    return -1;
}
let num=144;
console.log(sqrnum(num));
