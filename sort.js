let arr=[15,11,10,7,12,4];
let sorted = arr.sort(function(a, b){return b - a});
let iteration = Math.ceil(arr.length/2);
let length = arr.length;
let b=[];
for (i=0,j=0;i<iteration;i++,j++){
    b[i+j] = sorted[i];
    if (((length%2) == 0 ) || ((i+1) != iteration)){
        b[i+j+1] = sorted[length-1-i]
    }
}

console.log(b)