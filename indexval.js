let arr=[-8,1,2,5];
function indexVal(arr)
{
    for(i=0;i<arr.length;i++)
    {
        if(i==arr[i])
        return i;
    }
return -1;
}
console.log(indexVal(arr));