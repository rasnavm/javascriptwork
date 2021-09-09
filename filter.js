//let arr1=[10,16,25,63,14,28];

/*
function greater(arr1)
{
    let arr2=[];
 for(let i=0;i<arr1.length;i++)
 {
     
     if(arr1[i]>18)
     {
        arr2.push(arr1[i]);
     }   
 }
 return arr2; 
}
 console.log(greater(arr1));
 */
 //using filter funtion

 let arr1=[10,16,25,63,14,28];
 //let arr2=arr1.filter(function(value){if(value>18) return value;});

 let arr2=arr1.filter((value)=>{if(value>18)return value;});//using arrow function
 console.log(arr2);