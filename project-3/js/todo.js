// 1. Hiển thị công việc
const randomID = () => {
  return Math.floor(Math.random() * 100000);
};
let todos = [];

const todoListElement = document.querySelector(".todo-list");

const todoInputElement = document.getElementById("todo-input");
const allRadio = document.querySelector("#all");
const pendingRadio = document.querySelector("#unactive");
const doneRadio = document.querySelector("#active");
const btnAdd = document.getElementById("btn-add");

const btnUpdate = document.getElementById("btn-update");
const editingTodoElementId = {
  id: -1,
};
// console.log(btnAdd)

const renderTodos = (arr) => {
  //B1: Xóa hết nội dung trước khi render
  todoListElement.innerHTML = "";
  // arr.length = 0;
  //Trường hợp mảng rỗng
  if (arr.length == 0) {
    todoListElement.innerHTML = "Không có công việc nào trong danh sách";
  }

  for (let i = 0; i < arr.length; i++) {
    const t = arr[i];
    todoListElement.innerHTML += `
        <div class="todo-item ${t.status ? ["active-todo"] : ""}">
        <div class="todo-item-title">
            <input type="checkbox" ${t.status ? ["checked"] : ""}
            onclick = "toggleStatus(${t.id})"/>
            <p>${t.title}</p>
        </div>
        <div class="option">
            <button class="btn btn-update" onclick = "updateTodo(${t.id}, '${
      t.title
    }')">
                <img src="./img/pencil.svg" alt="icon" />
            </button>
            <button class="btn btn-delete" onclick = "deleteTodo(${t.id})">
                <img src="./img/remove.svg" alt="icon" />
            </button>
        </div>
    </div>
        `;
  }
};

/// 2. Thêm công việc
btnAdd.addEventListener("click", () => {
  // Lấy nội dung trong ô input
  let title = todoInputElement.value;

  // Kiểm tra nội dung
  if (title.trim() == "") {
    alert("Tiêu đề không được để trống");
    return;
  }

  // Tạo ra công việc mới
  let newTodo = {
    id: randomID(),
    title: title,
    status: false,
  };

  // Thêm vào mảng todos
  todos.push(newTodo);

  // Render lại giao diện
  setDataToLocalStorage(todos);
  todoInputElement.value = "";
});

const getDataFromLocalStorage = () => {
  let value = localStorage.getItem("todos");
  if (value) {
    todos = JSON.parse(value);
  } else {
    todos = [];
  }
  setDataToLocalStorage(todos);
};

window.onload = getDataFromLocalStorage;

const setDataToLocalStorage = (arr) => {
  localStorage.setItem("todos", JSON.stringify(arr));
  renderTodos(arr);
};

renderTodos(todos);
