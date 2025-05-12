// if문 실습

let age = prompt("나이를 입력하세요!");

if (age >= 20){
    console.log("성인");
} else if (age >= 17){
    console.log("고등학생");
} else if (age >= 14){
    console.log("중학생");
} else if (age >= 8){
    console.log("초등학생");
} else if (age >= 0){
    console.log("유아");
} else {
    console.log("측정되지 않는 값입니다.");
}

// 삼항연산자 실습

let now = new Date().getHours();

console.log(now >= 12 ? "오후" : "오전");