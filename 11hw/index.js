var array=[];
var lenght = prompt("Input array's lenght:", "");
for (var i = 0; i<lenght; i++){
    array[i] = prompt("Enter array element " + (i+1));
}
alert(array);
array.splice(1,3);
alert(array);