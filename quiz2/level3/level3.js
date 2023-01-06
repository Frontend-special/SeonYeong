/* 
레시피 재료 추가하기

1. 요구사항 확인하기
2. 요구사항 바탕으로 인풋 생각하기
3. 인풋 바탕으로 단계별 한글로 함수 설계하기
4. 단계별 구글링 키워드 생각하기
*/

/*
1. 요구사항 확인하기
(1) 추가할 재료명과 용량을 입력하고 추가를 누르면 리스트에 올라간다.
(2) 같은 재료가 추가 될 시 오류가 뜬다.
(3) 리스트안에서 재료를 삭제 할 수도 있다.

2. 요구사항 바탕으로 인풋 생각하기
(1) 입력한 값을 리스트 테이블에 넣어준다.
(2) 새로 추가할 재료가 앞서 추가한 재료명과 같은지 비교를 해야한다. 
(3) 삭제를 누를 시 클릭한 해당 데이터 삭제할 버튼 필요.

3.인풋 바탕으로 단계별 한글로 함수 설계하기
(1) 재료명과 용량을 입력한걸 각각 알맞게 리스트 테이블안에 넣는다.
    ==> 재료명은 재료칸, 용량은 무게칸.
(2) 앞서 추가한 재료와 다른 재료를 추가하면 그대로 리스트에 추가하고,
    동일한 재료가 이미 있으면 해당 재료는 이미 존재한다고 알림.
(3) 추가했던 재료들을 삭제하고 싶을 시 해당 데이터를 클릭하면 그 부분의 데이터는 삭제.

4. 단계별 구글링 키워드 생각하기
(1) 입력한 텍스트들을 가져와 리스트 테이블에 출력해야한다.(버튼 이벤트 추가) - input 값 가져와서 출력하는법 
(2) 동일한 재료가 이미 있다면 오류, 리스트에 추가가 되면 안된다. - input 텍스트 값 비교하기
(3) 버튼 클릭시 리스트에 추가 된 해당 내용만 삭제되어야 한다. - input 클리어 버튼 이벤트, input 값 삭제 
*/

/*
html 에 값 집어넣기
input 클리어 버튼 이벤트, input 값 삭제 
input 텍스트 값 비교하기
taget. 종류 
*/

const $form = document.querySelector("#ingredient-form");
const $ingredientInput = document.querySelector("[name='ingredient']");
const $weightInput = document.querySelector("[name='weight']");
const $table = document.querySelector("table");
const $submitButton = document.querySelector("#submit_button");
const $list = document.querySelector("#ingredient-list");
const INGREDIENT_LIST = new Map();

function deleteIngredient(e) {
    let a = e.target.matches("button");
    if (a) return e.target.closest("tr").remove();
}

$form.addEventListener("submit", (el) => {
    el.preventDefault();
    const tr = document.createElement("tr");
    const ingredient = $ingredientInput.value;
    const weight = $weightInput.value;

    INGREDIENT_LIST.set(ingredient, weight);

    // const bb = INGREDIENT_LIST.has(ingredient);

    tr.innerHTML = `<tr>
    <td>${ingredient}</td>
    <td>${weight}</td>
    <td><button>삭제</button></td>
    </tr>`;

    $table.append(tr);
    tr.addEventListener("click", deleteIngredient);
});

$submitButton.addEventListener("click", (el) => {
    const li = document.createElement("li");
    li.innerHTML = `
    <li>${$ingredientInput.value}:${$weightInput.value}</li>
    `;

    $list.append(li);
});
