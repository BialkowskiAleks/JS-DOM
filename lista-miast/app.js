const cityList = document.createElement("ul");
cityList.classList.add("city-list");

let cities = [
	"Warsaw",
	"Berlin",
	"Paris",
	"London",
	"New York",
	"Tokio",
	"Moscow",
];

cities.forEach((city) => {
	const cityItem = document.createElement("li");
	cityItem.textContent = city;
	cityItem.classList.add("city");
	cityList.appendChild(cityItem);
});

const cityListContainer = document.getElementById("city-list");
cityListContainer.appendChild(cityList);
