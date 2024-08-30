// bind( ) : 함수의 this값을 특정 객체로 고정시키는 역할을 한다.
// 지정할 객체를 this로 미리 연결(binding)한 새로운 함수를 리턴한다.

const data = {
    x: 10,
    getX: function() {
        // console.log(this);  //data 객체 자체를 가리킨다.
        return this.x;      //객체 data의 x 속성을 반환하는 메서드 getX
                            //this.x  --> data.x와 같다.
    }
}

const dataGetX = data.getX;
console.log(dataGetX());      //undefined

// dataGetX 함수는 data.getX 메서드를 복사한 것이고, 더 이상 data 객체와 연결되어 있지 않다.
// data.getX는 this.x 값을 출력하는 메서드인데, 
// dataGetX의 this는 data 객체가 아니기 때문에 undefined 값을 가지게 된다.

// const dataGetX = data.getX(); 로 작성하게 되면
// dataGetX는 함수가 아니라 data.getX() 메서드의 리턴값을 저장하는 변수가 된다.

const boundGetX = dataGetX.bind(data);   //dataGetX의 this를 data로 고정 (binding)
console.log(boundGetX());                //10