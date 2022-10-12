let a = [15, 18, 23, 45, 32, 33];

document.write(a + "<br/>");

let b = a.some(check);

document.write(b + "<br/>");

b = a.every(check);

document.write(b + "<br/>");
a = [18, 23, 45, 32, 33];

b = a.every(check);

document.write(b + "<br/>");

function check(age) {
  return age >= 18;
}
