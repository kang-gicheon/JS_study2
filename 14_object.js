/**
 * Object 객체
 */

// key : value pair
let color = {

    name: '빨강',
    group: "색깔",
    paint: function(){

        return `${this.name}색을 칠합니다`;

    }

};

console.log(color);
console.log(color.name);
console.log(color['name']);

const key = 'name';

console.log(color[key]);

console.log(color.paint());

const colorKey =  'color';  // key값
const colorValue = '파랑';  // value 값

const paintKey = 'group';
const paintValue = '색깔';

const color2 = {
    [colorKey]: colorValue,
    [paintKey]: paintValue,

    paint: function(){
        return `${this.color}색을 칠합니다`
    }
}
console.log(color2);
console.log(color2.paint());

color2['paint'] = '무채색'
console.log(color2);

color2['newColor'] = 'gray';
console.log(color2);

delete color2['newColor'];
console.log(color2);

/**
 * 객체의 특징
 * 
 * 1) const로 선언할 경우 객체 자체 변경 불가능
 * 2) 객체 안의 프로퍼티 / 메서드는 변경 가능
 */

const black = {

    name: '검은색',
    title: '무채색'

};
console.log(black);

// black = {}; 특징 1번의 경우에 해당 Assignment to constant variable. 에러 발생

black['name'] = '회색';
console.log(black); // 특징 2번의 경우에 해당한다

/**
 * 키 값을 가져오기
 */
console.log(Object.keys(black));

/**
 * 모든 value 값 가져오기
 */
console.log(Object.values(black));

const name = '보라';

const color3 = {

    name // = name = name과 같음 

};
console.log(color3);