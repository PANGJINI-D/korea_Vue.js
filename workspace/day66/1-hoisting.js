// 🌟var, let의 가장 큰 차이 : 호이스팅 여부
// var : 호이스팅 O
// let : 호이스팅 x

console.log(data1, typeof data1);       //undefined undefined  --> 호이스팅 o
//console.log(data2, typeof data2);       //에러 발생함  --> 호이스팅 x

var data1 = 123;
console.log(data1, typeof data1);       //123 number

let data2 = '123';
console.log(data2, typeof data2);       //123 string
