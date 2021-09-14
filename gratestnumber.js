let str=("1 2 3 4 5");

function greater(str)
{
str=str.split(' ');
return Math.max.apply(null, str) + " " +  Math.min.apply(null, str);

}
console.log(greater(str));

