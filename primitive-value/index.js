const _ = require('lodash');

const obj = { x: { y: 1 } };

// 얕은 복사
const c1 = { ...obj };
console.log(obj === c1); // false
console.log(obj.x === c1.x); // true

// 깊은 복사
const c2 = _.cloneDeep(obj);
console.log(c2 === obj); // false
console.log(c2.x === obj.x); // false
console.log(c2.x.y === obj.x.y); // true
