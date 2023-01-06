import { RESERVATION_LIST } from "./reservation .js";
/*
예약 고객 확인하기
*/

const $userNameInput = document.querySelector(["[name='user-name']"]);
const $userPhonInput = document.querySelector(["[name='user-phone']"]);
const $form = document.querySelector("form");
const $reservation = document.querySelector("#reservation-number");

//일단 태그요소들을 다 불러와준다.

function NodeUserListInReservationList() {
    alert("일치하는 내역이 없습니다");
    $reservation.innerHTML = "일치하는 내역이 없습니다";
}

// 일치하는 내역이 없다면 alert로 알림을 주고 일치하는 내역이 없다고 문자도 띄워주는 함수.

$userPhonInput.addEventListener("input", (e) => {
    const phone = e.target.value;
    const hiepnPhone = phone
        .replace(/[^0-9]/g, "")
        .replace(/^(\d{0,3})(\d{0,4})(\d{0,4})$/g, "$1-$2-$3")
        .replace(/(\-{1,2})$/g, "");
    e.target.value = hiepnPhone;
});

/*
유저폰인풋에 인풋 이벤트를 추가했는데,  
상수 phone 에 입력하는 값의 밸류라고 할당해준다.
정규 표현식을 사용해 전화번호를 입력하면 - (하이픈)이 자동추가가 되는 기능을 만들었다.
*/

$form.addEventListener("submit", (e) => {
    e.preventDefault();
    const userName = $userNameInput.value;
    const userPhone = $userPhonInput.value;

    const sameNameUser = RESERVATION_LIST.filter((list) => list.name === userName);
    if (sameNameUser.length === 0) return NodeUserListInReservationList();

    const targetUser = sameNameUser.find((list) => list.phone === userPhone);
    if (!targetUser) return NodeUserListInReservationList();
    $reservation.innerHTML = targetUser.number;
});

/*
폼태그를 불러와 submit 이벤트를 생성해줌

userNameInput의 밸류와 userPhoneInput의 밸류를 할당해준다
sameNameUser에 RESERVATION_LIST에 list.name이 userName과 같다면 필터로 걸러낸다 
예외처리로 sameNameUser의 length가 0이라면 위에 만들어 놨던 NodeUserListInReservationList함수
일치하는 내역이 없습니다 라고 뜨게 해줌

그리고 앞서 선언해준 sameNameUser 안에서 폰 넘버를 비교해 타겟이 누구인지 찾아내야 하므로 
targetUser에다가 배열 내장함수인 find 를 사용해준다 
예외처리로 targetUser가 아니라면 똑같이 NodeUserListInReservationList()함수를
사용.  만약 참이라면 타겟 유저의 넘버를 출력해줌

*/

/*
구글링 키워드
- 배열 내 객체 값 불러오기 
- 전화번호 정규표현식 (replace사용)
- addEvent~ 종류 찾기 

*/
