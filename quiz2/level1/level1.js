/*
배열 나누기
함수 division 특정한 배열을 내가 원하는 원소의 갯수를 길이로 가진 배열들로 분해하려고한다
이후, 해당 배열들을 요소로 갖는 배열을 반환한다
ex) 길이기 80인 배열은 길이가 5로 분해한다면 16개의 배열을 요소로 갖는 배열을 반환한다

1. 요구사항 확인하기
2. 요구사항 바탕으로 인풋 생각하기
3. 인풋 바탕으로 단계별 한글로 함수 설계하기
4. 단계별 구글링 키워드 생각하기

*/

function division() {}

// arr = [1,2,3,4,5]
// divition(arr, 2); === [ [1,2], [3,4], [5] ]

/*
1. division 함수를 선언하고 인자로 배열과 그것을 나누어줄 정수를 arr, num 으로 받아준다.
2. 그리고 배열들을 또 배열안에 담아야 하니 상수 또는 변수로 빈 배열을 할당 해준다.
3. 계속 반복해서 쪼개야 하니 for문을 사용한다.
4. slice 내장함수를 사용해 인덱스 0번 부터 2개를 잘라준다.
5. 그리고 잘라준 배열들을  push 로 앞에서 할당한 빈 배열에 넣어준다. 
*/

/*
output
나누어줄 배열의길이를 쪼개고 배열안에 배열로 반환 해야 하는데, 길이가 딱 나누어 떨어지지 않아도 남은 배열까지 다 반환해야함.
*/

//==================================

/*
1. 나누어줄 배열이 길이를 생각한다.
2. 배열을 몇개로 나누어줄지 정한다.
3. 인자로 받은 원본배열을 함께 인자로 전달한 숫자의 길이로 나누어야 한다
4. 나누어진 배열을 배열로 감싸야 한다 
*/
