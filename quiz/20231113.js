// 전역 변수의 생명 주기
let myName = 'James';

function callMyName() {
  let myName = 'heilie';
  console.log(myName);
  return myName;
}

callMyName();
console.log(myName);

// 모듈 패턴
const Counter = (function () {
  const num = 10;

  return {
    increase() {
      return ++num;
    },
  };
})();
console.log(Counter.num);

// 참조에 의한 전달과 외부 상태의 변경
function changeVal(primitive, obj) {
  primitive += 100;
  obj.name = 'Yoon';
}
let age = 26;
let person = { name: 'Kim' };
changeVal(age, person);
console.log('age====>', age);
console.log('person===>', person);
