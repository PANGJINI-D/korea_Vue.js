// 콜백함수

// 1️⃣
function data(data, callback) {
    console.log("data : ", data);
    callback();
}

function num() {
    console.log('숫자 출력');
}

data("값", num);


// 2️⃣비동기 처리 : 콜백함수는 작업이 완료된 후 호출된다.
console.log("start");
setTimeout(() => {
    console.log("콜백함수 실행");
}, 2000);
console.log("end");

//start
//end
//콜백함수 실행


// 3️⃣콜백함수의 문제점 : 콜백지옥
//                      콜백 중첩으로 복잡한 코드 구조가 발생할 수 있다.

function call1(callback) {
    setTimeout(() => {
      console.log("Call 1");
      callback("call1");
    }, 1000);
  }
  
  function call2(result, callback) {
    setTimeout(() => {
      console.log("Call 2", result);
      callback("call2");
    }, 1000);
  }
  
  function call3(result, callback) {
    setTimeout(() => {
      console.log("Call 3", result);
      callback("call3");
    }, 1000);
  }
  
  function call4(result, callback) {
    setTimeout(() => {
      console.log("Call 4", result);
      callback("final result");
    }, 1000);
  }
  
// 콜백함수 체이닝
call1(function(result){
    call2(result, function(newResult) {
        call3(newResult, function(newResult2) {
            call4(newResult2, function(final) {
                console.log(final);
            })
        })
    })
});