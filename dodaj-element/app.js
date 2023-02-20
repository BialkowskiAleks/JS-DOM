const list = document.getElementById("items");
const addButton = document.querySelector("button");

let counter = 3;

addButton.addEventListener("click", () => {
	const newItem = document.createElement("li");
	newItem.textContent = `Item ${++counter}`;
	newItem.classList.add("item");

	list.appendChild(newItem);
});
