let a = [15, 28, 23, 45, 32, 33];

document.write(a + "<br/>");

let b = a.find(check);

document.write(b + "<br/>");

b = a.findIndex(check);

document.write(b + "<br/>");

function check(age) {
  return age >= 18;
}
