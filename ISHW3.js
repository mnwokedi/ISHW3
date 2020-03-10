var start = prompt("what is your starting number?");
while (isNaN(start)) {
  start = prompt("ONLY NUMBERS PLEASE");
}
var stop = prompt("what is your ending number?");
while (isNaN(stop)) {
  stop = prompt("ONLY NUMBERS PLEASE");
}
var step = prompt("By how much do you want to change the number?");
while (isNaN(step)) {
  step = prompt("ONLY NUMBERS PLEASE");
}
while (step == 0) {
  step = prompt("Step must be not zero");
}

//console.log(start+ stop+step)

start = parseInt(start);
stop = parseInt(stop);
step = parseInt(step);
//console.log(start+ stop+step);

function createList(beginning, end, change) {
  listGenerated = [];

  for (i = beginning; i <= end; i += change) {
    listGenerated.push(i);
  }
  //console.log(listGenerated.toString())//[1,2,3]
  console.log(listGenerated);
  isError(listGenerated);
  return listGenerated;
}
function sumList(list1) {
  var sum = list1.reduce(function(a, b) {
    return a + b;
  }, 0);
  return sum;
}

function convertListToBinaryList(numberList) {
  binaryList = [];
  length = numberList.length;
  for (i = 0; i < length; i += 1) {
    number = numberList[i];
    binary = binaryConvert(number);
    binaryList.push(binary);
  }
  //var binary = parseInt(listIndex, 10);
  //console.log(binaryList.toString());
  return binaryList;
}

function binaryConvert(x) {
  var binaryString = "";
  var num = x;
  let resultant = 2;
  remainder = 2;
  while (resultant >= 1) {
    resultant = Math.floor(x / 2);
    remainder = x % 2;
    x = resultant;
    binaryString = `${remainder}` + binaryString;
  }
  return binaryString;
}

function isError(list) {
  console.log(list);
  if ((list = [])) {
    console.log("there is an error, change your step value.");
  }
}
var numberList = createList(start, stop, step);
console.log("this is the list of numbers " + numberList);
var sumOfList = sumList(numberList);
console.log("this is the sum of numbers " + sumOfList);
var binaryConvertion = convertListToBinaryList(numberList);
console.log("this is the list of binary Numbers" + binaryConvertion);
