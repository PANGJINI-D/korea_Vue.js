/* 배열 복사 */

// 1️⃣배열 이름으로 배열 복사
// 2️⃣전개 구문 spread로 배열 복사
const sub = ['java', 'dbms', 'js', 'html', 'css', 'git'];
const subCopy = sub;
const subCopy2 = [...sub];

console.log(sub, typeof sub);           //[ 'java', 'dbms', 'js', 'html', 'css', 'git' ] object
console.log(subCopy, typeof subCopy);   //[ 'java', 'dbms', 'js', 'html', 'css', 'git' ] object
console.log(subCopy2, typeof subCopy2);   //[ 'java', 'dbms', 'js', 'html', 'css', 'git' ] object

// 전개 구문 spread로 복사한 경우
// 복사 배열을 수정해도 원본 배열의 데이터는 그대로 유지된다.
subCopy2.pop();
console.log(subCopy2, typeof subCopy2);     //[ 'java', 'dbms', 'js', 'html', 'css' ] object
console.log(sub, typeof sub);               //[ 'java', 'dbms', 'js', 'html', 'css', 'git' ] object

// 배열명으로 배열을 복사한 경우
// 복사 배열을 수정하면 원본 배열도 함께 변경된다.
subCopy.pop();
console.log(subCopy, typeof subCopy);   //[ 'java', 'dbms', 'js', 'html', 'css' ] object
console.log(sub, typeof sub);           //[ 'java', 'dbms', 'js', 'html', 'css' ] object


// 3️⃣Array.from으로 배열 복사
const numarr = [1, 3, 2, 7, 4];
const numCopy = Array.from(numarr);

console.log(numarr);    //[ 1, 3, 2, 7, 4 ]
console.log(numCopy);   //[ 1, 3, 2, 7, 4 ]

// 복제 배열의 데이터만 수정되고, 원본 데이터의 내용은 유지된다.
numCopy.pop();
console.log(numCopy);   //[ 1, 3, 2, 7 ]
console.log(numarr);   //[ 1, 3, 2, 7, 4 ]


//4️⃣slice로 배열 복사
const numarr2 = [1, 3, 2, 7, 4];
const numCopy2 = numarr2.slice();

console.log(numarr2);
console.log(numCopy2);

// 복제 배열의 데이터만 수정되고, 원본 데이터의 내용은 유지된다.
numCopy2.pop();
console.log(numCopy2);
console.log(numarr2);
