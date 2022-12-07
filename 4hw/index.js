let operations=prompt("What do we do? (add, sub, mult, div)", "");
let a=prompt("Insert first digit", "");
let b=prompt("Insert second digit", "");
const plusValue = +a + +b;
const minusValue = a - b;
const multiValue = a * b;
const divideValue = a / b;
if (operations!="add")
    if (operations!="sub")
        if (operations!="mult")
            if (operations!="div")
                alert ("Error! Ivalid operation!");
            else alert (a + "/" + b + "=" + divideValue);
        else alert(a + "*" + b + "=" + multiValue);
    else alert(a + "-" + b + "=" + minusValue);
else alert (a + "+" + b + "=" + plusValue);