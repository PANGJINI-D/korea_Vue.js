// 논리연산자

// OR → 하나라도 참이면 앞의 값을 반환
// 
console.log("cat" || "dog", typeof "cat" || "dog");     //cat string
console.log(false || "dog");    // dog
console.log("dog" || false);    // dog
console.log(true || "dog");     // true
console.log("dog" || true);     // dog

console.log(0 || 0);            // 0
console.log(null || undefined)  // undefined


//🌟truthy값, falsy값
// truthy값     boolean 컨텍스트에서 true로 평가되는 것 (조건문에서 참으로 간주)
// falsy값      boolean 컨텍스트에서 false로 평가되는 것
//              → false, 0, "", null, undefined, NaN
console.log(undefined || null);