let counter = 1;

const inputs = document.querySelectorAll("input");

const nextButton = document.querySelector("#next-button");

nextButton.addEventListener("click", e => {
	e.preventDefault();

	if (counter < inputs.length) {
        inputs[counter - 1].classList.add("hidden");
        inputs[counter].classList.remove("hidden");
        counter++;
	}
});
