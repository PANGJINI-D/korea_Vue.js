// apply( ), call( )  :  함수를 호출하면서 특정 객체를 this로 지정할 때 사용한다.
//                       bind와 달리 바로 실행된다.
// apply( ) 인수를 배열 형태로 전달한다.
// call( )  인수를 각각 직접 전달한다.

const data1 = {
    x : 100,
    getX : function(str) {
        return str + this.x;
    }
};
console.log(data1.getX('값 : '));   //값 : 100

const data2 = {
    x : 10,
};
//call() 메서드를 통해 data1.getX를 호출할 때 this를 data2로 지정해서 출력한다.
console.log(data1.getX.call(data2, '값 : '));    //값 : 10

//apply() 메서드를 통해 data.getX를 호출할 때 this를 data2로 지정하여 출력한다.
//인수를 배열 형태로 전달해야 한다.
console.log(data1.getX.apply(data2, ['값 : '])); //값 : 10
