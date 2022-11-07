console.clear();

console.log(a);
var a = 10;

function aa() {
  var a = 10;

  function aaa() {
    console.log(a);
  }

  aaa();
}

aa();
