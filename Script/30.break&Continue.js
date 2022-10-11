document.write("<h1>Table of 4 </h1>");
for (let i = 1; i <= 10; i++) {
  if (i === 5) {
    document.write("Half<br/>");
    // continue;
  }
  document.write("4 * " + i + " = " + 4 * i + "<br/>");
}

document.write("<br/><h1>Table of 5 </h1>");
for (let i = 1; i <= 10; i++) {
  if (i === 5) {
    document.write("Half");
    break;
  }
  document.write("4 * " + i + " = " + 4 * i + "<br/>");
}
