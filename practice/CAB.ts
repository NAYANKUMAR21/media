class Details {
  name: string;
  lname: string;
  constructor(a: string, b: string) {
    this.name = 'nayan';
    this.lname = 'kumar';
  }
  handle() {
    console.log(this.name, this.lname);
  }
}
interface DetailsInterface {
  name: string;
  lname: String;
  handle: Function;
}
function car(a: string, b: number) {
  this.a = a;
  this.b = b;
}
car('a', 2);
function specify() {
  car.call(this, 'x', 'y');
  this.z = 'z';
}

let z: DetailsInterface = new Details('a', 'a');
let call = z.handle();
