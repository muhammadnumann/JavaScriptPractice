let array = [
  [1, "numan", 21, "Male"],
  [2, "raza", 21, "Female"],
  [3, "afaq", 22, "Male"],
];

console.table(array);

document.write(array);
document.write("<br/>");
document.write("<br/>");

for (let i = 0; i < array.length; i++) {
  for (let j = 0; j < array[i].length; j++) {
    document.write(array[i][j] + " ");
  }
  document.write("<br/>");
}
