
document.addEventListener('DOMContentLoaded', function () {
    const eachitem = document.querySelectorAll(".each-div");

    eachitem.forEach(element => {
        const thequestion = element.querySelector(".question-div");

        thequestion.addEventListener('click', function(event) {
            event.preventDefault();
            
            // 'this' refers to the clicked '.question-div'
            const parent = this.closest('.each-div');
            const theanswer = parent.querySelector(".answer");
            const btn = parent.querySelector(".toggle-sign");

            // Check if the answer is currently visible or hidden

            if (theanswer.style.display === "block"  || theanswer.style.display === "") {
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
