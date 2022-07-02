const id = document.getElementById("id");
const adviceText = document.getElementById("advice-text");
const button = document.getElementById("new-advice");

function getData() {
	const xhr = new XMLHttpRequest();
	const url = "https://api.adviceslip.com/advice";

	xhr.open("GET", url);
	xhr.send();

	xhr.onerror = function () {
		console.log("Network error");
	};

	xhr.onload = function () {
		if (xhr.status === 200) {
			const data = JSON.parse(xhr.responseText);
			adviceText.textContent = data.slip.advice;
			id.textContent = data.slip.id;
		} else if (xhr.status === 404) {
			console.log("Invalid request");
		}
	};
}

button.addEventListener("click", (e) => {
	getData();
});
