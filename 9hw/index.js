var array = [];
for(var i=10; i<=20; i++){
    document.write(i + ", ");
}
document.write("<br>")

var array=[10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20];
for(var i=0; i<=10; i++){
    array.push(Math.pow(array[i],2));
}
document.write("Changed array: " + array + "<br>");

var array2=[];
for(var i=1; i<=10; i++){
    for(var j=7; j<=7; j++){
        array2=(i*j);
        document.write(i + "*" + j + "=" + array2 + "<br>");
    }
}

var array3 = 0;
for(var i=1; i<=15; i++){
    array3 += i;
}
document.write("Sum from 1 to 15 is " + array3 + "<br>");

var array4 = 1;
for(var i=15; i<=35; i++){
    array4 *= i;
}
document.write("Product of all numbers from 15 to 35 is " + array4 + "<br>");


var sum = 0;
var ariph;
for(var i=1; i<=500; i++){
    sum += i;
    ariph = sum / 500;
}  
document.write("Arithmetical mean of the summary of naumbers from 1 to 500 is " + ariph + "<br>");

var sumev = 0;
for(var i=30; i<=80; i++){
    if (i%2===0){
        sumev += i;
    }
}
document.write("Sum is " + sumev + "<br>");

for(var i=100; i<=200; i++){
    if(i%3===0){
        document.write(i + ", ");
    }
}
document.write("<br>");

var n = prompt("Enter a natural number");
if (!isNaN(n)){
    for (var i=2; i*2<=n; i++){
        if(n%i==0){
            document.write("<div style='color:red;'>" + n + " is divisible by " + i + "</div>");
            var even = n => !(n % 2);
            document.write("<div style='color:blue;'>" + "Even number: " + even(i) + "</div>"); 
        }
    }
}else{
    alert("Not a number!");
}

var array12=[];
for(var i=1; i<=10; i++){
    for(var j=1; j<=10; j++){
        array2=(i*j);
        document.write(i + "*" + j + "=" + array2 + "<br>");
    }
}