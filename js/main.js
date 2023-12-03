const collapsibles = document.querySelectorAll(".collapsible");
collapsibles.forEach((item) =>
    item.addEventListener("click", function () {
        this.classList.toggle("collapsible--expand");
    })
);

const navbar = document.querySelector(".navbar");

const navbarButton = document.querySelector(".navbar-btn");
navbarButton.addEventListener("click", function () {
    navbar.classList.toggle("nav-open");
    console.log("Menu Clicked");
});
