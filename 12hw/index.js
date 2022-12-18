const array=[16,-37,54,-4,72,-56,47,4,-16,25,-37,46,4,-51,27,-63,4,-54,76,-4,12,-35,4,47];
alert(array);
alert("Array lenght: " + array.length);
alert("Minimal element: " + Math.min.apply(null,array) + "; its index: " + array.indexOf(Math.min.apply(null,array)) + ".");
alert("Maximum element: " + Math.max.apply(null,array) + "; its index: " + array.indexOf(Math.max.apply(null,array)) + ".");
var negative = array.filter(elem=>(elem<0));
alert("Amount of negative elements: " + negative.length + ".");
var positive = array.filter(elem=>(elem>0));
alert("Amount of positive elments: " + positive.length + ".");
var odds = positive.filter(elem=>(elem%2===1));
alert("Amount of odd positive elements: " + odds.length + ".");
var evens = positive.filter(elem=>(elem%2===0));
alert("Amount of even positive elements: " + evens.length + ".");
var oddsSum = 0;
for(var i = 0; i < odds.length; i++){
    oddsSum += odds[i];
}
alert("Sum of all positive odds: " + oddsSum);
var evensSum = 0;
for(i = 0; i < evens.length; i++){
    evensSum += evens[i];
}
alert("Sum of all positive evens: " + evensSum);
const res = array.reduce((acc, rec) => acc * rec);
alert("Multiplication result of all postive numbers: " + res);
alert(Math.max.apply(null,array));