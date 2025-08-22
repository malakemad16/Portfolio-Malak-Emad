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
    const portfolioLink = "http://127.0.0.1:5500/index.html#";
    navigator.clipboard.writeText(portfolioLink)
        .then(() => {
            alert("Portfolio link copied! 🚀");
        })
        .catch(err => {
            console.error("Failed to copy: ", err);
        });
});
