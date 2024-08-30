// 함수 스코프

function test1(){
    let subject = "javascript";
    let date = "240829";

    function test2(){
      let job = "학생";
      console.log("test2함수", job);
      console.log("test2함수", subject);
      console.log("test2함수", date);
    }
    test2();
    console.log(job);    //스코프 벗어나는 변수에 접근하려 하기 때문에 에러
    console.log(subject);
    console.log(date);
  }
  
  test1();