let a = [15, 24, 16, 23, 45, 32, 33];

document.write(a + "<br/>");

let b = a.filter(check);

document.write(b + "<br/>");

function check(age) {
  return age >= 18;
}
