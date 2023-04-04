let todos = [];

async function getTodos() {
  try {
    let response = await fetch("http://localhost:3000/todos");
    let responseData = await response.json();
    todos = responseData;
    displayTodos();
  } catch (err) {
    console.log(err);
  }
}

function displayTodos() {
  let todoContainerUL = document.getElementById("todo-container-ul");
  console.log(todos);
  todos.forEach(function (todo) {
    let todoCard = document.createElement("li");
		todoCard.innerText = todo.task
    todoContainerUL.appendChild(todoCard);
  });
}

async function addTodo() {
  try {
		let todoTask = document.getElementById('todo-input').value
    let response = await fetch("http://localhost:3000/todos", {
			method: "POST",
			headers: {
				"Content-Type": "application/json",
			},
			body: JSON.stringify({
				"task": todoTask
			})
		});

		if(response.status == 201) {
			console.log('Successfully created!')
		} else {
			console.log('Something went wrong!')
		}
  } catch (err) {
    console.log(err);
  }
}

async function deleteTodo() {
  try {
		let todoNoToDelete = document.getElementById('todo-delete-input').value
    let response = await fetch("http://localhost:3000/todos/" + Number(todoNoToDelete), {
			method: "DELETE"
		});

		if(response.status == 200) {
			console.log('Successfully deleted!')
		} else {
			console.log('Something went wrong!')
		}
  } catch (err) {
    console.log(err);
  }
}

async function updateTodo() {
  try {
		let todoIDToUpdate = document.getElementById('todo-update-id-input').value
		let todoTaskToUpdate = document.getElementById('todo-update-task-input').value
    let response = await fetch("http://localhost:3000/todos/" + Number(todoIDToUpdate), {
			method: "PATCH",
			headers: {
				"Content-Type": "application/json",
			},
			body: JSON.stringify({
				"task": todoTaskToUpdate
			})
		});

		if(response.status == 200) {
			console.log('Successfully updated!')
		} else {
			console.log('Something went wrong!')
		}
  } catch (err) {
    console.log(err);
  }
}


getTodos();

// CRUD: CREATE, READ, UPDATE and DELETE.
// GET - READ
// POST - CREATE
// PUT/ PATCH - UPDATE
// DELETE - DELETE
