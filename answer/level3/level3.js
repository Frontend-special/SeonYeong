/* 
레시피추가하기
*/

const $form = document.querySelector("#ingredient-form");
const $ingredient = document.querySelector("[name='ingredient']");
const $weight = document.querySelector("[name='weight']");
const $table = document.querySelector("table");
const $button = document.querySelector("#submit_button");
const $list = document.querySelector("#ingredient-list");
const INGREDIENT_LIST = new Map();

//태그 요소들을 다 불러 와준다.

function deleteIngredient(e) {
    if (!e.target.matches("button")) return;
    const $tr = e.target.closest("tr");
    const ingredient = $tr.querySelector("td").textContent;
    $tr.remove();
    INGREDIENT_LIST.delete(ingredient);
}

/*
이건 버튼 클릭시 데이터를 삭제해주는 함수인데, 
예외처리로 ...

$tr에 타겟의 가장 가까운 tr을 찾아준다. --> 밑에 나오는 tr이 우리가 추가할 재료와 용량인데 
그것들을 삭제 해주기 위해 deleteIngredient함수 안에 tr을 불러와 할당해준듯 하다.
상수 ingredient에 tr의 td 텍스트들(재료와 용량)을 할당해주고, 버튼을 클릭시 그것들을 지워준다.
그리고 어떤걸 지워주냐면 INGREDIENT_LIST 안에 있는 ingredient 텍스트들을(재료와 용량) 지워준다.

*/

$form.addEventListener("submit", (e) => {
    e.preventDefault();
    const ingredientValue = $ingredient.value;
    const weightValue = $weight.value;
    if (INGREDIENT_LIST.has(ingredientValue)) return alert("이미 존재하는 재료입니다");
    if (!ingredientValue || !weightValue) return alert("입력해주세요");

    const tr = document.createElement("tr");

    tr.innerHTML = `
  <td>${ingredientValue}</td>
  <td>${weightValue}</td>
  <td><button type="button">삭제</button></td>
  `;

    tr.addEventListener("click", deleteIngredient);

    INGREDIENT_LIST.set(ingredientValue, weightValue);
    $table.append(tr);
    $ingredient.value = "";
    $weight.value = "";
});

/*
1. 상수 ingredientValue,weightValue에 값을 할당해준다 
2. 예외처리로 INGREDIENT_LIST에 ingredientValue 가 들어있으면 alert로 이미 존재한다고 알림.
3. 예외처리로 ingredientValue가 없거나 weightValue가 없으면 alret로 입력해주세요 로 알림.
4. tr 요소를 추가 생성해준다.
5. tr.innerHTML td 태그들을 넣어준다 
6. tr.addEventListener("click", deleteIngredient);을 써준 이유는..
   삭제하는 클릭 이벤트를 주기 위함인 것 같다.
7. INGREDIENT_LIST에 재료와 용량의 밸류값들을 넣어주고 table태그 요소에 tr의 요소들을 넣어준다.
8. 그 밑에 $ingredient.value = "" <-- 이것처럼 따옴표를 해준 이유는 잘 모르겠다..

*/

$button.addEventListener("click", () => {
    if ($list.children.length > 0) $list.innerHTML = "";
    console.log($list.children.length);
    INGREDIENT_LIST.forEach((weight, ingredient) => {
        const li = document.createElement("li");
        li.innerText = `${ingredient} : ${weight}`;
        $list.append(li);
    });
});
/*
1. 
*/
