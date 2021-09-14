let numArr=[2,3,44,22,5];
let temp=0;
function ascsort(numArr)
{
    for(i=0;i<numArr.length;i++)
    {
        for(j=i+1;j<numArr.length;j++)
        {
            if(numArr[i]>numArr[j])
            {
                temp=numArr[i];
                numArr[i]=numArr[j];
                numArr[j]=temp;
            }
        }
    }
return numArr;
}
console.log(ascsort(numArr));