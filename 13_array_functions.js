/**
 * Array Function
 */

let test = [

    '빨강',
    '노랑',
    '초록',
    '파랑',
    '보라',
    '검정',

];

console.log(test);

// push()
console.log(test.push('분홍'));
console.log(test);
console.log('------------------------------------------')
// pop()
console.log(test.pop());    // 끝 값을 삭제해서 출력
console.log(test);

//shift()
console.log(test.shift());  // 첫 번째 값을 삭제해서 출력
console.log(test);

//unshift()
console.log(test.unshift('빨강'));
console.log(test);
console.log('------------------------------------------')
console.log(test.splice(0,3));
console.log(test);
console.log('------------------------------------------')
test = [

    '빨강',
    '노랑',
    '초록',
    '파랑',
    '보라',
    '검정',

];

console.log(test);

// concat()
console.log(test.concat('갈색'));
console.log(test);

// slice()
console.log(test.slice(0,3));
console.log(test);

// spread operator
let test2 = [

    ...test

]
console.log(test2);
console.log('------------------------------------------')
let test3 = [

    test

];

console.log(test3);

let test4 = test;
console.log(test4);

console.log(test4 === test);

console.log([

    ...test // 새로운 array로 제작

] === test );

// join() 모든 값들을 String으로 엮을때 사용
console.log(test.join());
console.log(test.join('/'));
console.log(test.join(', '));

// sort()
// 오름차순
test.sort();
console.log(test);

console.log(test.reverse());
console.log('------------------------------------------')
 let numbers = [

    1,
    9,
    7,
    5,
    3

 ];

 console.log(numbers);

 // a,b를 비교했을때
 // 1) a를 b보다 나중에 정렬하려면 (뒤에 두려면) 0보다 큰 숫자를 반환
 // 2) a를 b보다 먼저 정렬하려면 (앞에 두려면) 0보다 작은 숫자를 반환
 // 3) 원래 순서를 그대로 두려면 0을 반환

 numbers.sort((a,b)=>{

    return a > b ? 1 : -1;

 });

 console.log(numbers);

 numbers.sort((a,b) => a > b ? -1 : 1);
 console.log(numbers);
 console.log('------------------------------------------')
 // map()
 console.log(test.map((x)=> x));
 console.log(test.map((x)=> `색깔: ${x}`));
 
 console.log(test.map((x)=> {

    if(x === '빨강'){

         return `색깔: ${x}`;

    } else {

        return x;

    }

 }));

 console.log(test);

 // filter()
 numbers = [1, 8, 7, 6, 3];

 console.log(numbers.filter((x) => true));
 console.log(numbers.filter((x) => false));
 console.log(numbers.filter((x) => x % 2 === 0));   // 선언한 배열 중 짝수인 값(8, 6)만 출력
// 모든 값을 순회하면서 해당되는 값을 출력

 // find 함수
console.log(numbers.find((x) => x % 2 === 0));
// array X 해당되는 첫번째에 해당되는 값만 출력

// findIndex()
console.log(numbers.findIndex((x) => x % 2 === 0));

// reduce() -> reduce parameter(함수 ,초기 값)
console.log(numbers.reduce((p,n) => p + n ,0));

 