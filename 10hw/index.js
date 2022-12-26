for(var i=20; i<=30; i=i+0.5){
    document.write(i + ", ");
}

var dol = 27;
for(var i=0; i<=100; i=i+10){
    var hrvn;
    hrvn = dol * i;
    document.write(i + " dollars is " + hrvn + " hryvnias<br>");
}

var n = prompt("Enter eine natürliche Zahl");
for(var i=1; i<=100; i++){
    var powpow;
    powpow = Math.pow(i,2);
    if(powpow<n){
        document.write("<div style='color:red;'>" + powpow + "</div>");
    }
}

var m = prompt("Enter un numero entero");
var isPrime = true;
for(var i=2; i<m; i++){
    if(m%i==0){
        isPrime=false;
        break;
    }
}
if (isPrime){
    document.write("<div style='color:blue;'>" + m + " is a prime number" + "</div>");
}

var l = prompt("Enter un nombre entier");
while(l%3==0){
    l/=3;
}
document.write((l==1)? "<div style='color:brown;'>" + "it works" + "</div>" : "no");
