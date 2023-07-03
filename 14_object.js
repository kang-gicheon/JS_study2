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
