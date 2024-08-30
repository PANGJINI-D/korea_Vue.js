let add = function(x, y) {
    // console.log(this);
    this.result = x + y;
}

let obj = {};

//1️⃣bind() 메서드 사용
add = add.bind(obj);
add(3, 10);
console.log(obj);       //{ result: 13 }

//2️⃣apply()
add.apply(obj, [5, 10]);
console.log(obj);       //{ result: 15 }

//3️⃣call()
add.call(obj, 9, 100);
console.log(obj);       //{ result: 109 }