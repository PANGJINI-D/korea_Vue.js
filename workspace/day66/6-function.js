// 즉시 실행 함수

(function( name ) {
    console.log("즉시실행함수");
    console.log(name);
}) ("황진");

function sum (n1 = 10, n2) {
    const result = n1+n2;
    console.log(result);
}
sum(10, 20);      //30
sum(20);          //NaN  --> n1에 20이 전달되었는데 n2의 값이 undefined이기 때문에 
                  //         정수 + undefined 연산을 할 수 없어서 NaN이 리턴된다.