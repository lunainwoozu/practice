// 배열에 100까지 숫자 집어넣기
const number = [];

for (let i = 0; i < 100; i++){
    number.push(i + 1);
}

console.log(number);

//for문으로 합 구하기
let sum = 0;
for (let i = 0; i < number.length +1; i++){
    sum += i;
}
console.log(sum);

//for of 문으로 합 구하기
let sum2 = 0;
for (let x of number){
    sum2 += x;
}
console.log(sum2);

//forEach 문으로 합 구하기
let sum3 = 0;
number.forEach(num => sum3 += num);
console.log(sum3);




// 내장 메소드 실습
let fruits1 = ["사과", "딸기", "파인애플", "수박", "참외", "오렌지", "자두", "망고"];
let fruits2 = ["수박", "사과", "참외", "오렌지", "파인애플", "망고"];

const same = [];
const diff = [];

for (let fruit of fruits1){
    if (fruits2.includes(fruit)){
        same.push(fruit);
    } else {
        diff.push(fruit);
    }
}

console.log(same);
console.log(diff);


// 주말? 평일?
let day = new Date().getDay();
let result = day === 6 || day === 0 ? "주말" : "평일";

console.log(result);


//난수 생성
let random = Math.floor((Math.random()*11));
console.log(random);