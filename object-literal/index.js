// 프로퍼티 접근
var person = {
  'last-name': 'Lee',
  'last-holiday': '1223',
};

console.log(person.'last-name') // SyntaxError: Unexpected string
console.log('last-name :' + person.last - name);
console.log('last-holiday :' + person.last - holiday);
/**
 * 브라우저 환경:
 * last-name : NaN
 * last-holiday : ReferenceError: holiday is not defined
 * Node.js 환경: ReferenceError: name is not defined
 */

// console.log(person[last - name]); // ReferenceError: last is not defined
console.log(person['last-name']); // Lee

// 메서드 축약 표현
// ES5
var obj = {
  name: 'Emilie',
  sayHi: function() {
    console.log('hello, ', this.name)
  }
}

// ES6
var obj = {
  name: 'Emilie',
  sayHi() {
    console.log('hi', this.name)
  }
}