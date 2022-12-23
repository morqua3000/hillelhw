let numOrStr = prompt('input number or string');
console.log(numOrStr);
switch (numOrStr){
    case (numOrStr = null):
        console.log('ви скасували');
        break;
    case (numOrStr = ''):
        console.log('Empty String');
        break;
    default:
        if (isNaN(+numOrStr)){
            console.log('number is Ba_NaN');
        }
        console.log('OK!');
}
