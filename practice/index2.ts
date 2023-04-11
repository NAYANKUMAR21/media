function Array1() {
  this.length = 0;
}
Array1.prototype.push = function (x: number): number {
  this[this.length] = x;
  this.length++;
  return this.length;
};
Array1.prototype.pop = function (): number {
  let x = this[this.length - 1];
  delete this[this.length - 1];
  this.length--;
  return x;
};
let x = new Array1();
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
