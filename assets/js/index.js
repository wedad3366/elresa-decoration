
///add sticky on nav-bar

window.addEventListener("scroll" , function()
{
    var header = document.querySelector(".nav-bar")
    header.classList.toggle("sticky" , window.scrollY > 0 );
})

///show-button-up

let buttonUp = document.querySelector(".button-up");
window.onscroll = function () {
    if (this.scrollY >= 400) {
        buttonUp.classList.add("show");
    }
    else {
        buttonUp.classList.remove("show");
    }
};

///button-up

buttonUp.onclick = function () {
    window.scrollTo(
        {
            top: 0,
            behavior: "smooth",
        }
    );
};