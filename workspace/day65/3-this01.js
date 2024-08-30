// 메서드, 함수가 호출될 때 마다 현재 호출중인 메서드를 보유한 객체가 this로 연결된다.
// 현재 호출중인 메서드를 보유한 객체가 없다면
// 전역객체(global object, 브라우저 환경에서는 window 객체)가 연결된다.

let obj = {
    result: 0   
};

obj.add = function(a, b) {
    console.log(this);      //{ result: 0, add: [Function (anonymous)] }
                            //메서드를 보유한 객체인 obj가 this이다.
    this.result = a + b;
    console.log(this);      //{ result: 30, add: [Function (anonymous)] }
};

obj.add(10, 20);
console.log(obj);           //{ result: 30, add: [Function (anonymous)] }