function per(marks, tmarks) {
  if (marks > 500) return "Wrong Input";
  return "You Percentage is " + (marks / tmarks) * 100;
}
let a = prompt("Enter Marks out of 500");
document.write(per(a, 500));
