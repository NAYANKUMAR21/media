var num = 12;

// call();
// console.log(num, add);

// console.log(xyz);
var xyz = 'nayan';
var xyz = '123';
// console.log(xyz);

// console.log(isNaN(23));

function call1() {
  let age = 12;
  console.log(age);
}

// call();
// console.log(age);

// console.log(age);
let age = 12;
if (age > 10) {
  var num = 12;
}
console.log(num);

function call2() {
  let x = 10;
  return function call1() {
    let y = 20;
    return function call2() {
      let z = 20;
      return x + y + z;
    };
  };
}
let calling = call()();
console.log(calling);
