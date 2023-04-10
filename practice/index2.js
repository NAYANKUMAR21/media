function Array() {
  this.length = 0;
}
Array.prototype.push = function (x) {
  this[this.length] = x;
  this.length++;
};
Array.prototype.pop = function () {
  let x = this[this.length - 1];
  delete this[this.length - 1];
  this.length--;
  return x;
};
let x = new Array();
x.push(1);
x.push(2);
x.push(3);
x.push(4);
x.push(5);
x.push(6);
x.push(7);
console.log(x);
let y = x.pop();
console.log(x, y);
