/**
 * Naming Conventions
 * 
 * 변수 이름 지을때
 * 
 * 1) 일반적으로 영어(라틴문자)를 사용하며 문자와 숫자 모두 사용 가능
 * 2) 특수기호는 언더스코어, 달러만 사용가능
 * 3) 숫자로 이름을 시작 할 수 없다
 * ex) 1Name 2Hello --> 에러
 * 4) 키워드는 변수명으로 사용할 수 없다.
 * var (const) = 'var'; --> 사용할 수 없음
 */

let factory = '팩토리';
var $ive = '아이브';
 const _yujin = '안유진';

 console.log(factory);
 console.log($ive);
 console.log(_yujin);

//  let 1name = 'no'; --> 3번의 경우

// let const = 'attention'; --> 4번의 경우

/**
 * 1) camelCase --> 첫번째 글자는 소문자로 띄워쓰기할때마다 대문자
 * 2) snake_case --> 소문자를 사용하고 띄워씌기가 있는경우 언더바로 연결
 * 3) PascalCase --> (1)과 비슷하지만 첫번째도 대문자로
 */

const anYujin = '안유진'; // camelCase 예시
console.log(anYujin);
