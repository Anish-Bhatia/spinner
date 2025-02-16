document.addEventListener("DOMContentLoaded", function () {
    let input = document.getElementById("spinner");
    let increaseBtn = document.getElementById("increaseBtn");
    let decreaseBtn = document.getElementById("decreaseBtn");
    let form = document.getElementById("spinnerForm");

    if (!input || !increaseBtn || !decreaseBtn) {
        console.error("One or more spinner elements not found!");
        return;
    }

    increaseBtn.addEventListener("click", function () {
        input.value = parseInt(input.value) + 1;
    });

    decreaseBtn.addEventListener("click", function () {
        if (parseInt(input.value) > parseInt(input.min)) {
            input.value = parseInt(input.value) - 1;
        }
    });

    form.addEventListener("submit", function (event) {
        event.preventDefault(); // Prevent default form submission for testing
        alert("Submitted value: " + input.value);
    });
});
