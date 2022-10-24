var array = new Array(
  354,
  45,
  6589,
  78,
  23,
  54,
  26,
  48,
  87,
  12,
  48,
  97,
  12,
  87,
  45,
  1,
  84,
  45,
  5,
  78,
  51
);

let max = 0,
  min = array[0];
for (let i = 0; i < array.length; i++) {
  if (max < array[i]) {
    max = array[i];
  }

  if (array[i] < min) {
    min = array[i];
  }
}
document.write(array + "<br/>");

console.log("max", max);
console.log("min", min);

var temp = 0;
for (let i = 0; i < array.length; i++) {
  for (let j = 0; j < array.length; j++) {
    if (array[i] <= array[j]) {
      temp = array[j];
      array[j] = array[i];
      array[i] = temp;
    }
  }
}

console.log(array);

for (let i = 0; i < array.length; i++) {
  for (let j = 0; j < array.length; j++) {
    if (array[i] >= array[j]) {
      temp = array[j];
      array[j] = array[i];
      array[i] = temp;
    }
  }
}

console.log(array);
