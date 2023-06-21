/**
 * Loops
 * 
 * 1) for
 * 2) while
 */
for(let i = 0 ; i < 10 ; i++){
    console.log(i);
}

console.log('----------------------------')
for(let i = 10 ; i > 0 ; i--){
    console.log(i);
}

console.log('----------------------------')
for(let i = 0 ; i < 3 ; i++){
    for(let j = 3 ; j> 0 ; j--){
        console.log(i,j);
    }
}

// *을 이용해서 6 * 6의 정사각형을 출력

let square = '';
let side = 6;

for(let i = 0 ; i < 6 ; i++) {

    for(let j = 0 ; j < side ; j++){

        square += 'ㅁ';

    }
    square += '\n';
    
}

console.log(square);

/**
 * for...in
 */
const yuJin = {
    name: '안유진',
    year: 2003,
    group:'아이브',
}
console.log('----------------------------')
for(let key in yuJin){
    console.log(key);
}

const iveMembersArray = ['안유진', '가을', '레이', '장원영','리즈','이서'];

console.log('----------------------------')
for(let key in iveMembersArray){
    console.log(key);
    console.log(`${key}:${iveMembersArray[key]}`);
}

/**
 * for ... of
 */
for(let value of iveMembersArray){
    console.log(value);
}

const numbers = [1, 2, 3, 4, 5];
console.log('----------------------------')
for (let number of numbers) {
  console.log(number);
}
console.log('----------------------------')
/**
 * While
 */
let number = 0;

while(number < 10){
    number ++;
}

console.log(number);

/**
 * do...while
 */
number = 0;

do {

    number++;

}while(number < 10);

console.log(number); 

