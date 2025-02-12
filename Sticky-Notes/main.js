const container = document.querySelector(".container");
const btnAdd = document.getElementById("add");

//** function who return the array inside the localStorage  **/
function readStorage() {
  return JSON.parse(localStorage.getItem("Sticky-Notes") || "[]");
}

//***function who save the array to the localStorage  */
function saveStorage(todos) {
  localStorage.setItem("Sticky-Notes", JSON.stringify(todos));
}

//***function who push a value to  the array inside the localStorage  */
function addToStorage(todo) {
  const todos = readStorage();

  const todoElement = {
    id: Math.floor(Math.random() * 10000),
    txt: todo,
  };

  todos.push(todoElement);
  saveStorage(todos);

  return todoElement;
}

//*** Add an Event to the document */
document.addEventListener("DOMContentLoaded", () => {
  const todos = readStorage();

  todos.forEach((element) => {
    // textAreaElement(element.txt , element.id)

    container.insertBefore(textAreaElement(element.txt, element.id), btnAdd);
  });
});

function textAreaElement(data, id) {
  const textArea = document.createElement("textarea");
  textArea.classList.add("area");
  textArea.setAttribute("id", id);
  textArea.placeholder = "empty note";
  textArea.value = data;

  textArea.addEventListener("change", function (e) {
    e.preventDefault();
    const id = this.id;
    const value = this.value;
    update(id, value);
  });

  textArea.addEventListener("dblclick", function () {
    const doDelete = confirm("Are you sure to delete this note");
    const id = this.id;
    const element = this;
    if (doDelete) {
      del(id, element);
    }
  });

  return textArea;
}

//*** Add an Event to the btn */

btnAdd.addEventListener("click", () => {
  const data = "";
  const element = addToStorage(data);
  container.insertBefore(textAreaElement(element.txt, element.id), btnAdd);
});

//*** Update function  */
function update(id, value) {
  const todos = readStorage();
  const newContent = todos.filter((todo) => todo.id == id)[0];
  newContent.txt = value;
  saveStorage(todos);
}

//*** delete function  */
function del(id, element) {
  const todos = readStorage();

  const delContent = todos.filter((todo) => todo.id != id);
  saveStorage(delContent);

  container.removeChild(element);
}
