"use strict";

var result = document.getElementById('inputOut');
var input1 = document.getElementById('inputIn00');
var input2 = document.getElementById('inputIn01');
var commutation = document.getElementById('com');
sum = Number(input1.value) + Number(input2.value);

commutation.onclick = function () {
  console.log('a');
};

result.textContent = sum;
console.log();