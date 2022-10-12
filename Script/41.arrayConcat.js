let a = ["Raza", "Numan", "Afaq"];
let b = ["Umer", "Zeeshan"];
document.write(a);
document.write("<br/>");
document.write(b);

let c = a.concat(b);
document.write("<br/>");
document.write(c);

let d = c.concat(a, b);

document.write("<br/>");
document.write(d);

var e = d.join(": =>");

document.write("<br/>");
document.write(e);
