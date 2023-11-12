console.log(x); // undefined
var x = 'global';

function foo() {
  console.log(x);
  var x = 'local';
}

foo(); // undefined
console.log(x); // global

// 모듈 패턴
var Counter = (function () {
  // private 변수
  var num = 0;

  // public 데이터나 메서드를 프로퍼티로 추가한 객체를 반환한다.
  return {
    increase() {
      return ++num;
    },
    decrease() {
      return --num;
    },
  };
})();
