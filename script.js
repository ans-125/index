function saveInput(input) {
    if (input.value.trim() !== "") {
        if (!localStorage.getItem(input.id)) {
            localStorage.setItem(input.id, input.value);
            alert("تم اختراق جهازك بواسطة برق١٢٥");
            document.getElementById("hackImage").style.display = "block";
            input.setAttribute("readonly", true);
        }
    }
}

// عند تحميل الصفحة، استرجاع البيانات من localStorage
window.onload = function() {
    let inputs = document.querySelectorAll("input");
    inputs.forEach(input => {
        let savedValue = localStorage.getItem(input.id);
        if (savedValue) {
            input.value = savedValue;
            input.setAttribute("readonly", true);
        }
    });
};