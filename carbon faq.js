document.addEventListener('DOMContentLoaded', function () {
    const eachitem = document.querySelectorAll(".each-div");

    eachitem.forEach(element => {
        const thequestion = element.querySelector(".question-div");
        const theanswer = element.querySelector(".answer");
        const btn = element.querySelector(".toggle-sign");

        thequestion.addEventListener('click', (event)=> {
            // Check if the answer is currently visible or hidden
            event.preventDefault();
            const isAnswerVisible = window.getComputedStyle(theanswer).display !== "none";

            if (isAnswerVisible) {
                theanswer.style.display = "none";
                btn.textContent = "+";
                btn.style.transform = "rotate(0deg)";
            } else {
                theanswer.style.display = "block";
                btn.textContent = "-";
                btn.style.transform = "rotate(180deg)";
            }
        });
    });
});
