// Toggle The Birger Icon
let burgerIcon = document.querySelector(".icon");
let menu = document.querySelector(".links>ul");
burgerIcon.onclick = (e) => {
    e.stopPropagation();

    if (menu.parentElement.classList.contains("active")) {
        menu.style.display = "none";
        menu.parentElement.classList.remove("active");
    }
    else {
        menu.style.display = "block";
        menu.parentElement.classList.add("active");
    }
}
menu.onclick = (e) => {
    e.stopPropagation();
}
document.documentElement.onclick = (e) => {
    if (e.target !== menu && e.trget !== burgerIcon) {
        if (menu.parentElement.classList.contains("active")) {
            menu.style.display = "none";
            menu.parentElement.classList.remove("active");
        }
    }
}
