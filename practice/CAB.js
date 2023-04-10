function car(a, b) {
  this.a = a;
  this.b = b;
  //   console.log(this);
}
function specify() {
  car.call(this, 'x', 'y');
  this.z = 'z';
}
// let Car = new specify();

class Details {
  constructor(a, b) {
    this.name = 'nayan';
    this.lname = 'kumar';
  }
  handle() {
    console.log(this.name, this.lname);
  }
}
let x = new Details('a', 'a');
let obj = {
  name: 'vikalp',
  lname: 'akshay',
};
let call = x.handle.bind();
call();
// console.log();
