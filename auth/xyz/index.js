let map1 = new Map();
map1.set('a', 1);
map1.set('b', 2);
map1.set('c', 3);

console.log(map1.get('a'), map1.get('z'));
let obj = { s: '1' };
console.log(obj);

const mySet1 = new Set();

mySet1.add(1);
mySet1.add(5);
mySet1.add(5);
mySet1.add('some text');
console.log(mySet1);
for (let key in mySet1) {
  console.log(key);
}
