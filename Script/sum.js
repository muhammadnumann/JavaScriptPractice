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

let initial = 0;
console.log(
  array.reduce((pre, curr) => {
let sum = 0;
for (let i = 0; i < array.length; i++) {
  sum = sum + array[i];
}
    return pre + curr;
  }, initial)
);


console.log(sum);
