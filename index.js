var scroll = new SmoothScroll('a[href*="#"]', {
    speed: 1000,
    speedAsDuration: true
});

let galleries = document.querySelectorAll(".gallery");
let backs = document.querySelectorAll(".back");
let nexts = document.querySelectorAll(".next");

galleries.forEach((gallery, index) => {
    let back = backs[index];
    let next = nexts[index];
    gallery.addEventListener("wheel", (evt) => {
        evt.preventDefault();
        gallery.scrollLeft += evt.deltaY;
    });
    next.addEventListener("click", ()=> {
        gallery.style.scrollBehavior ="smooth";
        gallery.scrollLeft += 900;
        setTimeout(() => {
            gallery.style.scrollBehavior = "auto";
        }, 2000);
    });
    back.addEventListener("click", ()=> {
        gallery.style.scrollBehavior ="smooth";
        gallery.scrollLeft -= 900;
        setTimeout(() => {
            gallery.style.scrollBehavior = "auto";
        }, 2000); 
    });
});

function showFullImage(src) {
    var modal = document.getElementById("fullImageModal");
    var modalImg = document.getElementById("fullImage");
    var captionText = document.getElementById("caption");

    modal.style.display = "block";
    modalImg.src = src;
    captionText.innerHTML = src;
}
var customCaptions = {
    "1.jpg": "Mormoria,2023",
    "2.jpg": "Padma Shore,Rajshahi,2022",
    "3.jpg": "Noakhali,2023",

}
function closeFullImageModal() {
    var modal = document.getElementById("fullImageModal");
    modal.style.display = "none";
}