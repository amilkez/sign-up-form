const inputEles = document.querySelectorAll("input");
const submitBtn = document.querySelector('button[type="submit"]');
const password = document.querySelector("#password");
const passwordConfirm = document.querySelector("#passwordConfirm");

submitBtn.addEventListener("click", (e) => {
	e.preventDefault();
	inputEles.forEach((input) => {
		if (!input.value) {
			input.classList.add("invalid");
		}
	});
	if (passwordConfirm.value !== password.value) {
		const span = document.createElement("span");
		span.textContent = "*passwords must match";
		span.style.color = "red";
		span.style.fontSize = ".8rem";
		password.classList.add("invalid");
		passwordConfirm.classList.add("invalid");
		password.parentElement.appendChild(span);
	}
});
