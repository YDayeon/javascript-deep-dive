// 기명 함수 표현식
var add = function foo(x, y) {
  return x + y;
};

// console.log(add(1, 2)); // 3
// console.log(foo(1, 2)); // ReferenceError: foo is not defined

/------/;

// 함수 참조
console.dir(plus); // [Function: plus]
console.dir(sub); // undefined

// 함수 호출
console.log(plus(2, 3)); // 5
console.log(sub(2, 3)); // TypeError: sub is not a function

// 함수 선언문
function plus(a, b) {
  return a + b;
}

// 함수 표현식
var sub = function (a, b) {
  return a + b;
};
