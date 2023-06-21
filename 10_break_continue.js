/**
 * break
 */
for(let i = 0 ; i < 10 ; i++) {
    if(i === 5) {
        break;
    }
    console.log(i);
}

console.log('-------------------------------------')

number = 0;

while(number < 10) {

    if(number === 5) {
        break;
    }

    number++;
    console.log(number);
}
console.log('-------------------------------------')
/**
 * continue
 */
for(let i = 0 ; i < 10 ; i++) {
    if(i === 5) {
        continue;
    }
    console.log(i);
}
console.log('-------------------------------------')
number = 0;

while(number < 10) {
    number ++;

    if(number === 5) {
        continue;
    }

    console.log(number);
}

