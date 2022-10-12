let array = [10, 20, 30, 40, 50];

document.write(array);

console.log(array[0]);
console.log(array[5]);
let sum = 0;
document.write("<ul>");
for (let i = 0; i < array.length; i++) {
  console.log(array[i]);
  document.write("<li>" + array[i] + "</li>");
  sum = sum + array[i];
}
document.write("</ul>");
document.write("<p>Total Sum is : " + sum);

let array2 = [1, "Numan", 3, "Js"];

document.write("<ul>");
for (let i = 0; i < array2.length; i++) {
  document.write("<li>" + typeof array2[i] + " : " + array2[i] + "</li>");
}
document.write("</ul>");
