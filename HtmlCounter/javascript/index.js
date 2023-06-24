const number = document.querySelector('.number');
const inc = document.querySelector('#inc');
const dec = document.querySelector('#dec');
console.log(number, inc, dec);
// inc.addEventListener('click', () => {
//   let x = Number(number.innerHTML) + 1;
//   number.innerHTML = '';
//   number.innerHTML = x;
// });
function increment() {
  if (+number.innerHTML == 10) {
    return;
  }
  let x = Number(number.innerHTML) + 1;
  number.innerHTML = '';
  number.innerHTML = x;
}
function decrement() {
  if (+number.innerHTML == 0) {
    return;
  }
  let x = Number(number.innerHTML) - 1;
  number.innerHTML = '';
  number.innerHTML = x;
}
