import { RESERVATION_LIST } from "./reservation .js";
console.log(RESERVATION_LIST);

/* 
예약 고객확인하기

1. 요구사항 확인하기
2. 요구사항 바탕으로 인풋 생각하기
3. 인풋 바탕으로 단계별 한글로 함수 설계하기
4. 단계별 구글링 키워드 생각하기

*/

/*
1. 요구사항을 확인한다
(1) 이름과 연락처를 입력하면 예약번호가 나온다.
(2) 이름과 연락처가 다르면 예약번호는 나오지 않는다.
(3) 동일한 이름에 다른 예약번호가 나올수있는 예외도 있다.==> 동일한 이름인데 연락처가 다르면 다른 예약번호가 나온다.

2. 요구사항 바탕으로 인풋 생각하기
(1) 이름과 연락처의 값이 필요하고, 비교할 객체인 re~ 객체도 필요하다
(2) 이름비교, 이름값이 없다면 alert띄우기. 일치하는 데이터가 없습니다.
(3) 이름비교, 값 존재 해당값 안에서 전화번호 비교. 
(4) 인풋의 값이 입력 될 때 핸드폰 정규표현식이 지켜져야 한다.

3. 구글링 키워드 
(1) 자바스크립트 배열 내 특정 값 비교해서 찾기
(2) 인풋의 값이 입력 될 때 핸드폰 정규표현식
*/

const $userName = document.querySelector("[name='user-name']");
const $userPhone = document.querySelector("[name='user-phone']");
const $form = document.querySelector("form");
const $reservationNum = document.querySelector("#reservation-number");

function a() {
    alert("일치하는 내역이 없습니다");
}

$userPhone.addEventListener("input", (el) => {
    const tel = el.target.value
        .replace(/[^0-9]/g, "")
        .replace(/^(\d{0,3})(\d{0,4})(\d{0,4})$/g, "$1-$2-$3")
        .replace(/(\-{1,2})$/g, "");
    el.target.value = tel;
});

$form.addEventListener("submit", (el) => {
    el.preventDefault();
    const userNameValue = $userName.value;
    const userPhoneValue = $userPhone.value;

    const targetName = RESERVATION_LIST.filter((re) => re.name === userNameValue);

    const targetPhone = targetName.find((re) => re.phone === userPhoneValue);
    if (!targetPhone) return a();
    $reservationNum.innerHTML = targetPhone.number;
});

/*
targetName - [{
    name : ddd
    phone: 000
    number: 333
}]

targetPhone = {
    name: ddd
    phone : 000
    number:999
}
*/
