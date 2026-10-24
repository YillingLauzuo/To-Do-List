const input = document.getElementById("taskInput");
const addBtn = document.getElementById("addBtn");
const list = document.getElementById("taskList");

addBtn.addEventListener("click", addTask);
input.addEventListener("keydown", (e) => {
  if (e.key === "Enter") addTask();
});

function addTask() {
  const text = input.value.trim();
  if (text === "") return;

  const li = document.createElement("li");
  li.innerHTML = `<span>${text}</span><button class="delete">✕</button>`;

  li.addEventListener("click", () => li.classList.toggle("done"));
  li.querySelector(".delete").addEventListener("click", (e) => {
    e.stopPropagation();
    li.remove();
  });

  list.appendChild(li);
  input.value = "";
  input.focus();
}