let a = 10;
let b = 5;

var con;
if (a > b) {
  con = confirm("is " + a + " is greater than " + b);
} else {
  con = confirm("is " + b + " is greater than " + a);
}

if (con) {
  alert("Thanks");
}
