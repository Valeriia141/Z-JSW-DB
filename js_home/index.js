let nexId = 1;

const newTaskElement = function (taskText) {
	const div = document.createElement("div");

	const idSpan = document.createElement("span");
	idSpan.textContent = `ID : ${nexId}`;
	// idSpan.style.color = "green";

	const taskTextSpan = document.createElement("span");
	taskTextSpan.textContent = taskText;
	// taskTextSpan.style.color = "blue";

	const deleteButton = document.createElement("button");
	deleteButton.textContent = "Usun";

	const doneButton = document.createElement("button");
	doneButton.textContent = "Wykonano";


	deleteButton.addEventListener("click", () => div.remove());
	doneButton.addEventListener(
		"click",
		() => (div.style.textDecoration = "line-through",
			div.style.color = "red")
	);

	div.append(idSpan, taskTextSpan, deleteButton, doneButton);
	document.querySelector("#task-list").append(div);
	// div.id = nexId;
	div.style.color = "blue"
	div.setAttribute("id", nexId);
	nexId++;
};

const getTaskText = function () {
	const taskTextInput = document.querySelector("#task-text");
	return taskTextInput.value;
};

const submitTaskButton = document.querySelector("#submit-task");
submitTaskButton.addEventListener("click", () => {
	const taskText = getTaskText();
	newTaskElement(taskText);
});