/**
 * function -> 함수
 */

/**
 * 2라는 숫자에 * 10 / 2 % 3 스트링으로 변환해서
 * 반환을 받는 식을 작성하면
 */
console.log((2 * 10 / 2 % 3).toString());
console.log((3 * 10 / 2 % 3).toString()); // 3으로 변경시

/**
 * DRY
 * don't
 * repeat
 * yourself
 */
function calculate(){

    console.log((2 * 10 / 2 % 3).toString());

}

// calculate();

function calculate(number){
    
    console.log((number * 10 / 2 % 3).toString());

}

/**
 * 함수에서 입력받는 값에 대한 정의를 parameter라고 한다 = number
 * 
 * 실제 입력하는 값은 argument라고 한다
 */
calculate(4);
calculate(5);

// 외부에서 2개의 값을 받게함
function multiply(x, y){
    console.log(x * y);
}

multiply(2,4);

console.log("---------------------------------------------")

function multiply(x,y = 10){

    console.log(x * y);

}

multiply(2,4);
multiply(2);

/**
 * 반환받기
 * return 받기
 */
function multiply(x,y){
    return x * y;
}
// 반환값이 있을시
const result1 = multiply(2,4);
console.log(result1);

const result2 = multiply(4,5);
console.log(result2);
console.log("---------------------------------------------")
/**
 * Arrow 함수
 */
const multiply2 = (x,y) => {

    return x * y;   // state가 하나이므로

}

console.log(multiply2(3,4));

const multiply3 = (x,y) => x * y; // 코드를 간결하게 작성

console.log(multiply3(4,5));

const multiply4 = x => x * 2;   // 파라미터가 1개 존재할시 괄호 생략 가능
console.log(multiply4(2));

const multiply5 = x => y => z => `x: ${x} y: ${y} z: ${z}`;
console.log(multiply5(2)(5)(7));

function multiply6(x){

    return function(y){

        return function(z){

            return `x: ${x} y: ${y} z: ${z}`

        }

    }

}
console.log(multiply5(3)(4)(5)); // 위에서 제작한 함수와 같음

const multiplyTwo = function(x,y) {

    return x * y;

}
console.log("---------------------------------------------")
console.log(multiplyTwo(4,5));

const multiplyThree = function(x,y,z){

    console.log(arguments);
    return x*y*z;
}
console.log(multiplyThree(4,5,6));

const multiplyAll = function(...arguments){

    return Object.values(arguments).reduce((a,b) => a * b,1); 

}

console.log(multiplyAll(3,4,5,6,7,8,9,10));

// immediately invoked function = 즉시 실행 함수

(function(x,y){
    console.log(x * y);
})(4,5);

console.log(typeof multiply);
console.log(multiply instanceof Object); // 좌측(multifly)가 우측 Object의 타입인지 여부 확인