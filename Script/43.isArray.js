let a = ["Raza", "Numan", "Afaq"];
let b = "Zeeshan";

let c = Array.isArray(a);
document.write(a + "<br/>");

if (c) {
  document.write("This Is Array <br/>");
} else {
  document.write("This Is not Array <br/>");
}

c = Array.isArray(b);
document.write(b + "<br/>");

if (c) {
  document.write("This Is Array <br/>");
} else {
  document.write("This Is not Array <br/>");
}
