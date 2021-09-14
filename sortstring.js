let arr=['telescope','glass','eye','mono'];
let temp=0;
function sortarr(arr)
{
    for(let i=0;i<arr.length;i++)
    {
        for(j=i+1;j<arr.length;j++)
        {
            if(arr[i].length>arr[j].length)
            {
                temp=arr[i];
                arr[i]=arr[j];
                arr[j]=temp;
            }
        }
    }
    
return arr;
}

console.log(sortarr(arr));