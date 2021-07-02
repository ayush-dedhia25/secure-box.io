const options = document.querySelectorAll(".option");
const body = document.querySelectorAll("[data-option-body]");

// Accordion Working Logic
options.forEach(opt => {
	const selfBody = opt.querySelector("[data-option-body]");
	const selfBtn = opt.querySelector("[data-collapse-btn]");

	selfBtn.addEventListener("click", function(e) {
		// Checking if any previous tabs are open
		const hasActiveState = [...options].some(o => o.classList.contains("active"));
		// Destroy all the active tabs if any
		if (hasActiveState) clearActiveStates(options);
		// Add active state to open the accordion
		opt.classList.add("active");
		selfBody.classList.add("active");
		selfBtn.classList.add("active");
	});
});

function clearActiveStates(elements) {
	elements.forEach(elem => {
		const sb = elem.querySelector("[data-option-body]");
		const cb = elem.querySelector("[data-collapse-btn]");
		elem.classList.remove("active");
		sb.classList.remove("active");
		cb.classList.remove("active");
	});
}

function generateStrongPassword(size = 6) {
	const UPPER_CASE = "QWERTYUIOPLKJHGFDSAZXCVBNM";
	const LOWER_CASE = "qwertyuioplkjhgfdsazxcvbnm";
	const NUMBERS = "0123456789";
	const SPECIAL_SYMBOLS = "@#&_+()/?!<>[]$~|";

	String.prototype.pick = function(min, max) {
		var n, chars = '';

		if (typeof max === 'undefined') {
			n = min;
		} else {
			n = min + Math.floor(Math.random() * (max - min + 1));
		}

		for (var i = 0; i < n; i++) {
			chars += this.charAt(Math.floor(Math.random() * this.length));
		}

		return chars;
	};

	String.prototype.shuffle = function() {
		var array = this.split('');
		var tmp,
		current,
		top = array.length;

		if (top) while (--top) {
			current = Math.floor(Math.random() * (top + 1));
			tmp = array[current];
			array[current] = array[top];
			array[top] = tmp;
		}

		return array.join('');
	};

	const COMBINED_CASE = UPPER_CASE + LOWER_CASE + NUMBERS + SPECIAL_SYMBOLS;

	let password = "";
	password += SPECIAL_SYMBOLS.pick(1);
	password += UPPER_CASE.pick(1);
	password += LOWER_CASE.pick(1);
	password += NUMBERS.pick(1);
	password += COMBINED_CASE.pick(6, 12);
	password = password.shuffle();

	return password;
}

async function sayHello() {
	const outPass = document.getElementById("generatedPassword");
	const strongPass = await generateStrongPassword();
	outPass.value = strongPass;
}