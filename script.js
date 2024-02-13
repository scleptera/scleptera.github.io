function parseInput(input){
var array = input.split(",").map(Number);
return array;
};
function compareArray(array1,array2){
for(var index = 0; index < Math.max(array1.length,array2.length); index ++){
if(array1[index] !== array2[index]){
return(false);
}
}
return(true);
};
function expandArray(array){
var toCheck = [];
var toCheckCutter;
var checkAgainst = [];
var stopCheckAgainst;
var step = 1;
for(var index = array.length-1; index >= 0; index --){
if(step === 1 && array[index] === 0){
step ++;
stopCheckAgainst = index;
for(var index2 = index; index2 < array.length; index2 ++){
toCheck.push(array[index2]);
}
toCheckCutter = toCheck[toCheck.length-1];
for(var index2 = toCheck.length-2; index2 >= 0; index2 --){
if(toCheck[index2] === toCheckCutter){
toCheck.splice(index2+1,toCheck.length-index2-1)
break;
}else if(index2 === 0){
toCheck.splice(toCheck.length-1,1)
}
}
}
if(step === 2 && array[index] === 0){
step ++;
for(var index2 = index; index2 < stopCheckAgainst; index2 ++){
checkAgainst.push(array[index2])
}
}
if(compareArray(toCheck,checkAgainst) === false){
return(["Invalid Array"]);
}
}
if(array[array.length-1] === 0){
array.pop();
}
return(array);
};
function updateOutput(){
var inputElement = document.getElementById("input");
var mainArray = parseInput(inputElement.value);
document.getElementById("output").value = expandArray(mainArray).join(",");
};
function outputToInput(){
var outputElement = document.getElementById("output");
document.getElementById("input").value = outputElement.value;
updateOutput();
};
updateOutput();
