// 일반함수
function addNum(a, b) {
    return a + b;
}

// 익명함수
const test1 = function(a, b) {
    return a+b;
}

// 화상표함수
const test2 = (a, b) => a + b;

console.log(test1(10, 20));
console.log(test2(1, 2));