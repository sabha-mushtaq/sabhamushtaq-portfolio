// ============ SCROLL EFFECT =============
const nav = document.getElementById("nav-bar");
window.addEventListener("scroll", () => {
    if (window.scrollY > 50) {
        nav.classList.add("scrolled");
    } else {
        nav.classList.remove("scrolled");
    }
});

// ============ ACTIVE INDICATOR MOVEMENT ============
const links = document.querySelectorAll('.nav-links a');
const indicator = document.querySelector('.nav-indicator');

function moveIndicator(activeLink) {
    const rect = activeLink.getBoundingClientRect();
    const parentRect = activeLink.parentElement.getBoundingClientRect();

    indicator.style.width = rect.width + "px";
    indicator.style.left = (rect.left - parentRect.left) + "px";
}

links.forEach(link => {
    if (link.classList.contains("active")) {
        moveIndicator(link);
    }

    link.addEventListener("click", () => {
        links.forEach(l => l.classList.remove("active"));
        link.classList.add("active");
        moveIndicator(link);
    });
});

// ============ MOBILE MENU =============
const hamburger = document.querySelector(".hamburger");
const navLinks = document.querySelector(".nav-links");

hamburger.addEventListener("click", () => {
    navLinks.classList.toggle("active");
    hamburger.querySelector("i").classList.toggle("fa-xmark");
});

// ============ CONTACT FORM (WEB3FORMS) =============
const form = document.getElementById("contactForm");
const result = document.getElementById("result");

if (form) { // prevent errors if form is not on the page
    form.addEventListener("submit", async function (e) {
        e.preventDefault();

        result.style.color = "black";
        result.innerHTML = "Sending...";

        const formData = new FormData(form);

        const response = await fetch("https://api.web3forms.com/submit", {
            method: "POST",
            body: formData
        });

        const data = await response.json();

        if (data.success) {
            result.style.color = "green";
            result.innerHTML = "Message sent successfully! ✅";
            form.reset();
        } else {
            result.style.color = "red";
            result.innerHTML = "Something went wrong. Please try again ❌";
        }
    });
}
