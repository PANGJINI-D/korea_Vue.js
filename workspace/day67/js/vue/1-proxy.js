/// Proxy ///

// proxy는 대상 객체의 속성에 접근하거나 값을 할당할 때,
// 핸들러의 트랩을 통해 동작을 수정할 수 있다.
// 이를 통해 객체의 동작을 제어할 수 있다.

// Vue3에서 개발할 때는 proxy 객체를 직접 생성하지 않아도 된다.
// Vue 인스턴스를 생성하면 자동으로 지정된 객체에 대해
// 내부적으로 Proxy 객체로 래핑하는 작업을 수행한다.


// 대상 객체가 필요
const target = {
    name : '황진',
    age : 20,
}

// proxy 핸들러 객체
const handler = {
    get : function(target, prop, receiver) {
        console.log(`[접근한 속성] ${prop}`);
        return target[prop];
    },

    set : function(target, prop, value, receiver) {
        console.log(`[할당한 속성] ${prop}   [값] ${value}`);
        target[prop] = value;
        return true;
    },
};

// proxy 생성
const proxy = new Proxy(target, handler);

console.log(target);            //객체  { name: '황진', age: 20 }
console.log(handler);           //핸들러에 아직 값 지정XX  { get: [Function: get], set: [Function: set] }
console.log(proxy);             //target이 출력   { name: '황진', age: 20 }

// proxy를 통해서 속성에 접근하기
console.log(proxy.name);        //[접근한 속성] name
                                //황진

// proxy를 통해서 속성 할당하기
proxy.age = 100;
console.log(proxy.age);         //[할당한 속성] age   [값] 100
                                //[접근한 속성] age
                                //100