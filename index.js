let counter = 0;

const emailRegex = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
const passwordRegex = /^.{6,}$/;

const questions = document.querySelectorAll(".question");
const steps = document.querySelectorAll(".step");
const ticks = document.querySelectorAll("i");

const stepForward = e => {
	e.preventDefault();

	const input = questions[counter].querySelector("input");
	if (
		(input.type === "email" && !emailRegex.test(input.value)) ||
		(input.type === "password" && !passwordRegex.test(input.value))
	) {
		questions[counter].querySelector("small").classList.remove("d-none");
		questions[counter].querySelector("label").classList.add("text-danger");
		steps[counter].classList.add("text-danger");
		ticks[counter].classList.add("d-none");
	} else {
        questions[counter].classList.add("d-none");
		questions[counter].querySelector("small").classList.add("d-none");
		questions[counter].querySelector("label").classList.remove("text-danger");
		steps[counter].classList.remove("text-danger");
		ticks[counter].classList.remove("d-none");
		counter++;
		questions[counter].classList.remove("d-none");
		steps[counter].classList.remove("font-weight-light");
	}

	if (counter === questions.length - 1) {
		ticks[counter].classList.remove("d-none");
	}
};

const stepBackward = e => {
	e.preventDefault();

	questions[counter].classList.add("d-none");
	steps[counter].classList.add("font-weight-light");
	counter--;
	questions[counter].classList.remove("d-none");

	if (counter !== questions.length - 1) {
		ticks[questions.length - 1].classList.add("d-none");
	}
};

document.querySelectorAll(".continue").forEach(continueButton => {
	continueButton.addEventListener("click", stepForward);
});

document.querySelectorAll(".back").forEach(backButton => {
	backButton.addEventListener("click", stepBackward);
});
