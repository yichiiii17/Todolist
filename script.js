// let listState = [];
// const STATE_KEY = "to-do-list";

// function localState() {
//   const listState = localStorage.getItem(STATE_KEY);
//   if (listState !== null) {
//     return JSON.parse(listState);
//   }
//   return [];
// }

// function saveState(list) {
//   localStorage.setItem(STATE_KEY, JSON.stringify(list));
// }

function addItem() {
  const form = document.getElementById("form");
  const input = document.getElementById("inputbox");
  const text = input.value;
  if (text === "") {
    alert("Please enter a value");
    return;
  }

  const newItem = document.createElement("div");
  newItem.classList.add("list");

  const checkbox = document.createElement("input");
  checkbox.type = "checkbox";
  checkbox.classList.add("check");
  newItem.appendChild(checkbox);
  const title = document.createElement("h2");
  title.innerText = text; // 使用用户输入的文本
  newItem.appendChild(title);
  const deleteButton = document.createElement("button");
  deleteButton.innerText = "delete";
  deleteButton.classList.add("delete");
  deleteButton.onclick = deleteItem;
  newItem.appendChild(deleteButton);

  form.appendChild(newItem);
  input.value = "";
}
function deleteItem() {
  const item = this.parentNode;
  const parent = item.parentNode;
  parent.removeChild(item);
}
const addbutton = document.getElementById("addbutton");
addbutton.addEventListener("click", addItem);

//classname回傳是一個array id則是一個element
//所以要用array.from(arrayName)去迴圈把每個刪除鍵加上刪除方法
const deleteButtons = document.getElementsByClassName("delete");
Array.from(deleteButtons).forEach((button) => {
  button.addEventListener("click", deleteItem);
});
