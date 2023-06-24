// firstName 뒤에 string 타입을 붙여, 문자열 이외의 값을 전달하지 못하게 할 수 있음
// 타입스크립트의 단점으로는
// 1. 프로젝트 규모에 따른 컴파일에 시간이 걸림
// 2. 팀에 타임스크립트 경험자가 없으면 도입을 위한 학습 비용이 발생
function sayHello(firstName: string) {
    console.log('Hello ' + firstName)
}

let firstName: string = 'Han'
sayHello(firstName)