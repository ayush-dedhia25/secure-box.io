(function() {
	
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
			opt.scrollTop = 2;
		});
	});
	
	function clearActiveStates(collection) {
		collection.forEach(col => {
			const sb = col.querySelector("[data-option-body]");
			col.classList.remove("active");
			sb.classList.remove("active");
		});
	}
	
})();