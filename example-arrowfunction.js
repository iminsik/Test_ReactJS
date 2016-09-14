function add(a, b) {
  return a + b;
}

var addArrow = (a, b) => { return a + b; };
var addArrowCurly = (a, b) => a + b;

console.log(addArrow(1,3));
console.log(addArrowCurly(9,0));
