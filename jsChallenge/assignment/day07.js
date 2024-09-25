// mission01
// 버튼 클릭 시 텍스트 요소 변경
const $text = document.getElementById("text");
const $button = document.getElementById("changeTextButton");

function changeText() {
  $text.textContent = "텍스트 요소 변경";
}
$button.addEventListener("click", changeText);

// mission02
// #app에 select요소와 이벤트 추가
const $app = document.getElementById("app");
const $select = document.createElement("select");
const options = [
  { val: "javascript", name: "Javascript" },
  { val: "next", name: "Next.js" },
  { val: "react", name: "React.js" },
  { val: "typescript", name: "TypeScript" },
];

$select.id = "skills";

options.forEach(({ val, name }) => {
  const optionEl = document.createElement("option");
  optionEl.value = val;
  optionEl.text = name;
  $select.appendChild(optionEl);
});

$app.append($select);

$select.addEventListener("change", (event) => {
  let selectedValue = event.target.value;
  console.log(selectedValue);
});
