// 배수 찾기
for (let a = 1; a <= 10000; a++){
    if ((a % 13) === 0 && (a % 2) === 1){
        console.log(`${a}는 13의 배수이면서 홀수입니다.`);
    }
}

let num = prompt("숫자를 입력해 보세요");
let b = Number(num);

for (let a = 1; a <= b; a++){
    if ((a % 13) === 0 && (a % 2) === 1){
        console.log(`${a}는 13의 배수이면서 홀수입니다.`);
    }
}


//구구단
for (let i = 2; i <= 9; i++){
    console.log(`-- ${i} 단 --`);
    for (let j = 1; j <= 9; j++){
        console.log(`${i} x ${j} = ${i*j}`);
    }
}

//배수의 합
let sum = 0;

for (let x = 0; x <= 100; x++){
    if ((x % 2) == 0 || (x % 5) == 0){
        sum += x;
    }
}

console.log(sum);