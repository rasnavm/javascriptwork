let a = "9o55";
let length = a.toString().length;
let output = a;
if (length > 4){
    let b =  a.toString().slice(0,-4);
    let c = a.toString().slice(length-4);
    let d = b.replace(/[a-z 0-9]/gi,'#')+c;
    output = d;
}
console.log(output);
