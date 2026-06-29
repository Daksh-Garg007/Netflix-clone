let question1 = document.querySelector("#one");
let question2 = document.querySelector("#two");
let question3 = document.querySelector("#three");
let question4 = document.querySelector("#four");
let question5 = document.querySelector("#five");
let question6 = document.querySelector("#six");

let container = document.querySelector(".trending-container");
let leftArrow = document.querySelector(".left-arrow");
let rightArrow = document.querySelector(".right-arrow");

// hide left arrow at start (since we start at extreme left)
leftArrow.style.display = "none";

container.addEventListener("scroll", () => {
    // extreme left check
    if (container.scrollLeft === 0) {
        leftArrow.style.display = "none";
    } else {
        leftArrow.style.display = "flex";
    }

    // extreme right check
    if (container.scrollLeft + container.clientWidth >= container.scrollWidth) {
        rightArrow.style.display = "none";
    } else {
        rightArrow.style.display = "flex";
    }
});

/*
container.scrollLeft   → how much you've scrolled from left
container.clientWidth  → visible width of the container
container.scrollWidth  → total full width (including hidden cards)

scrollLeft + clientWidth >= scrollWidth
→ means you've reached the end (no more cards to the right)

|---- scrollLeft ----|---- clientWidth ----|
|------------- scrollWidth ---------------|

When scrollLeft + clientWidth = scrollWidth → you're at the end
*/


document.querySelector(".left-arrow").addEventListener("click", () => {
    container.scrollBy({
        left: -300,   // scrolls 300px to the left
        behavior: "smooth"  // smooth sliding animation
    });
});

document.querySelector(".right-arrow").addEventListener("click", () => {
    container.scrollBy({
        left: 300,    // scrolls 300px to the right
        behavior: "smooth"
    });
});



// FAQ section

function closeAll() {
  document.querySelectorAll(".plus").forEach(plus => plus.classList.remove("rotate"));
  document.querySelectorAll(".ans").forEach(ans => ans.classList.remove("show"));
}

// STEP 1 — Check current state BEFORE doing anything
// isOpen = true  → FAQ is currently visible
// isOpen = false → FAQ is currently hidden
// STEP 2 — Close everything first
// STEP 3 — Decision time
// "!" means NOT, so this runs only if it WAS closed
// If it WAS already open → we do nothing → it stays closed


question1.addEventListener("click", () => {
    let ans = document.querySelector(".one");
    let isOpen = ans.classList.contains("show"); 
    closeAll();
    if (!isOpen) {
        document.querySelector(".plus-one").classList.add("rotate");
        ans.classList.add("show");
    }
});

question2.addEventListener("click", () => {
    let ans = document.querySelector(".two");
    let isOpen = ans.classList.contains("show");
    closeAll();
    if (!isOpen) {
        document.querySelector(".plus-two").classList.add("rotate");
        ans.classList.add("show");
    }
});

question3.addEventListener("click", () => {
    let ans = document.querySelector(".three");
    let isOpen = ans.classList.contains("show");
    closeAll();
    if (!isOpen) {
        document.querySelector(".plus-three").classList.add("rotate");
        ans.classList.add("show");
    }
});

question4.addEventListener("click", () => {
    let ans = document.querySelector(".four");
    let isOpen = ans.classList.contains("show");
    closeAll();
    if (!isOpen) {
        document.querySelector(".plus-four").classList.add("rotate");
        ans.classList.add("show");
    }
});

question5.addEventListener("click", () => {
    let ans = document.querySelector(".five");
    let isOpen = ans.classList.contains("show");
    closeAll();
    if (!isOpen) {
        document.querySelector(".plus-five").classList.add("rotate");
        ans.classList.add("show");
    }
});

question6.addEventListener("click", () => {
    let ans = document.querySelector(".six");
    let isOpen = ans.classList.contains("show");
    closeAll();
    if (!isOpen) {
        document.querySelector(".plus-six").classList.add("rotate");
        ans.classList.add("show");
    }
});
