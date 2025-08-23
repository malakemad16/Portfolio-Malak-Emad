// Add background to the nav-bar

let header = document.querySelector("header");
window.onscroll = () => {
    if (this.scrollY >= 50) {
        header.classList.add("bg-black");
    } else {
        header.classList.remove("bg-black");
    }
}
// Add action to the share icon
let shareBtn = document.querySelector(".share-btn");

shareBtn.addEventListener('click', () => {
    const portfolioLink = "https://malakemad16.github.io/Portfolio-Malak-Emad/";
    navigator.clipboard.writeText(portfolioLink)
        .then(() => {
            alert("Portfolio link copied! 🚀");
        })
        .catch(err => {
            console.error("Failed to copy: ", err);
        });
});
//
let sectionLinks = document.querySelector(".sections");

function close_open_menu() {
    sectionLinks.classList.toggle("activate");
}
let allLinks = document.querySelectorAll(".sections li");

allLinks.forEach((e) => {
    e.addEventListener('click', close_open_menu);
})