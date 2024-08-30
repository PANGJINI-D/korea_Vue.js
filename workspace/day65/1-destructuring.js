// 🧡구조 분해 할당
// ES6에서 도입된 기능, 배열이나 객체의 속성값을 개별 변수에 간단하게 할당할 수 있도록 하는 기능
// 코드 가독성을 높이고, 변수 할당 과정을 더 간결하게 만들어준다.

// 1️⃣배열의 구조 분해 할당
const fruits = ['사과', '복숭아', '파인애플', '자두'];
console.log(fruits);    // [ '사과', '복숭아', '파인애플', '자두' ]

const [first, second, third ] = fruits;
console.log(first);     // 사과
console.log(third);     // 파인애플


// 2️⃣객체에서 구조 분해 할당
const person = {
    name: "황진",
    age: 20,
    subject: "졸려잉",
};

// 객체의 구조분해 할당은 객체의 속성명을 기준으로 값이 할당된다.
// 다른 속성명을 사용하고 싶다면 별칭을 사용할 수 있다.
const {name:fullname, age:나이, subject} = person;
console.log(person);    // { name: '황진', age: 20, subject: '졸려잉' }
// console.log(name);      // 황진
console.log(`fullname : ${fullname}`);      //fullname : 황진

console.log(person.name);       //원래라면 이런 방식으로 작성
console.log(person['name']);


// 3️⃣함수 파라미터에서 구조 분해 할당
// 객체나 배열을 인자로 받아서 특정 깂만 사용하고자 할 때
function introduce({name, age, subject}) {
    console.log(`제 이름은 ${name}이고 나이는 ${age}살입니다. 지금은 ${subject} 개발 수업을 듣고 있습니다.`);
}

const person2 = {
    name:'짱구',
    age: 20,
    subject: 'web',
}

introduce(person2);  // 제 이름은 짱구이고 나이는 20살입니다. 지금은 web 개발 수업을 듣고 있습니다.