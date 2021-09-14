let arr=[ 3, 10, 3, 3, 3 ];
function unique(arr)
{
    let i;
    let val=arr[0];
    //console.log(val);
    //console.log(arr.length);
    
        for(i=0;i<=arr.length;i++)
        {//console.log(arr[i]);

            if(arr[i]!==val)
            {
                //console.log(arr[i]);
                return arr[i];
            }
        } 
}

console.log(unique(arr));