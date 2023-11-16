// Add Task
let taskNo = 0;
document.getElementById("task-btn").addEventListener("click", function () {
  const task = document.getElementById("input-value").value;
  if (task === "") {
    alert("Please Add A Task");
  } else {
    taskNo += 1;

    const contentContainer = document.getElementById("content-container");

    const tr = document.createElement("tr");

    const th = document.createElement("th");
    th.innerText = taskNo;

    const td1 = document.createElement("td");
    td1.innerText = task;
    const td2 = document.createElement("td");
    td2.innerHTML = `
          <button  class="done-btn btn btn-success btn-xs">Done</button>
        <button class="delete-btn btn btn-error btn-xs">Delete</button>
          `;
    tr.appendChild(th);
    tr.appendChild(td1);
    tr.appendChild(td2);
    contentContainer.appendChild(tr);
  }
});
// Clear All
document.getElementById("clear-btn").addEventListener("click", function () {
  document.getElementById("content-container").remove();
});

// Delete

document
  .getElementById("content-container")
  .addEventListener("click", function () {
    if (event.target.classList.contains("delete-btn") === true) {
      event.target.parentElement.parentElement.remove();
    }
  });
