let array = [1, "Numan", 3, "Js"];

document.write("<ul>");
for (let i = 0; i < array.length; i++) {
  document.write("<li>" + typeof array[i] + " : " + array[i] + "</li>");
}
document.write("</ul>");

delete array[2];

document.write("<ul>");
for (let i = 0; i < array.length; i++) {
  document.write("<li>" + typeof array[i] + " : " + array[i] + "</li>");
}
document.write("</ul>");
