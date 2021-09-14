let arr=['a','b','c','d','f'];

//console.log(asc);
//console.log(start);
//console.log(lastIndex);
let x = []
//console.log(len);
function missingletter(arr)
{   
    let alphabets='abcdefghijklmnopqrstuvwxyz';
let start=alphabets.indexOf(arr[0].toLowerCase());//console.log(alpha[0]);
let lastIndex = alphabets.indexOf(arr[arr.length-1]);
let asc=arr[0].charCodeAt(0);
    j=0;
    for(let i=0;i<arr.length;i++)
    {   
        while (arr[i].toLowerCase() != alphabets[start+j])
        {
            if(asc >= 72 & asc <= 90)
            {
            x.push(alphabets[start+j].toUpperCase());
            }
            else
            {
                x.push(alphabets[start+j]);
            }

            j++;
        }
        j++;

    }
return x;
}
console.log(missingletter(arr));