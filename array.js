

let arr1=[10,20,30,40];

//arr1.push(50,60);

//arr1.pop();

//arr1.shift();

//arr1.unshift(5);

 //arr1.splice(2,0,15,18);//adding 2 elements to the array from 2nd position.

 //arr1.splice(1,2);//remove 2 elements from the array fro the 1st position.
  let arr2=[];// create arr2
  arr2.push(25,35,45);
  console.log(arr2);

console.log(arr1);


//let mergearr=arr1.concat(arr2);//merge arr1 and arr2
//console.log(mergearr);

let arr4=[];
arr4.push(2,4,6,8);// create arr4
console.log(arr4);

let newmerge=arr1.concat(arr2,arr4);  //merge arr1,arr2,and arr4
console.log(newmerge);

//let array=arr1.slice(1);
//console.log(array);
 
newmerge.sort(function(a, b){return a - b});//sorting array elements
console.log(newmerge);

