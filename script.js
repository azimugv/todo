// Add Task
let taskNo = 0;
let totalTask = 0;
document.getElementById("task-btn").addEventListener("click", function () {
  const task = document.getElementById("input-value").value;
  if (task === "") {
    alert("Please Add A Task");
  } else {
    taskNo += 1;
    totalTask += 1;

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
    document.getElementById("clear-btn").disabled = false;
  }
});
// Clear All
document.getElementById("clear-btn").addEventListener("click", function () {
  document.getElementById("content-container").remove();

  document.getElementById("clear-btn").disabled = true;
});
// Task Done
document
  .getElementById("content-container")
  .addEventListener("click", function () {
    if (event.target.classList.contains("done-btn")) {
      event.target.parentElement.parentElement.style.textDecoration =
        "line-through";
    }
  });

// Task Delete

document
  .getElementById("content-container")
  .addEventListener("click", function () {
    if (event.target.classList.contains("delete-btn") === true) {
      event.target.parentElement.parentElement.remove();
      totalTask -= 1;
      if (totalTask === 0) {
        document.getElementById("clear-btn").disabled = true;
      }
    }
  });
