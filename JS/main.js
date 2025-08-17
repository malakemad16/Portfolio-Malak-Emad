// Add background to the nav-bar

let header = document.querySelector("header");
window.onscroll = () => {
    if (this.scrollY >= 50) {
        header.classList.add("bg-black");
    } else {
        header.classList.remove("bg-black");
    }
}