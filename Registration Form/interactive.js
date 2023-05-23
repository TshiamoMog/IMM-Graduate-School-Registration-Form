var acc = document.getElementsByClassName("accordion");
var i;

for (i = 0; i < acc.length; i++) {
    acc[i].addEventListener("click", function() {
    /* Toggle between adding and removing the "active" class,
    to highlight the button that controls the panel */
    this.classList.toggle("active");

    /* Toggle between hiding and showing the active panel */
    var panel = this.nextElementSibling;
    if (panel.style.display === "block") {
        panel.style.display = "none";
    } else {
        panel.style.display = "block";
    }
    });
}

const textarea = document.getElementById("comments1");
textarea.addEventListener("keyup", e => {
    textarea.style.height = "35px";
    let scHeight = e.target.scrollHeight;
    textarea.style.height = `${scHeight}px`;
})
