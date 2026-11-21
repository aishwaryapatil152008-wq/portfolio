// ===== MOBILE NAVIGATION =====
const navbar = document.querySelector(".navbar");
const navLinks = document.querySelector(".nav-links");

// Create mobile menu button
const menuButton = document.createElement("button");

menuButton.className = "menu-btn";
menuButton.innerHTML = "☰";
menuButton.setAttribute("aria-label", "Open navigation menu");

navbar.appendChild(menuButton);

// Open and close menu
menuButton.addEventListener("click", () => {
    navLinks.classList.toggle("show");

    if (navLinks.classList.contains("show")) {
        menuButton.innerHTML = "✕";
        menuButton.setAttribute("aria-label", "Close navigation menu");
    } else {
        menuButton.innerHTML = "☰";
        menuButton.setAttribute("aria-label", "Open navigation menu");
    }
});

// Close menu after clicking a link
navLinks.querySelectorAll("a").forEach(link => {
    link.addEventListener("click", () => {
        navLinks.classList.remove("show");
        menuButton.innerHTML = "☰";
    });
});

// ===== SCROLL REVEAL ANIMATION =====
const revealElements = document.querySelectorAll(
    ".section, .skill-card, .project-card, .achievement-card, .hackathon-card, .hero-content, .hero-image"
);

revealElements.forEach(element => {
    element.classList.add("reveal");
});

const revealObserver = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.classList.add("visible");
            revealObserver.unobserve(entry.target);
        }
    });
}, {
    threshold: 0.12
});

revealElements.forEach(element => {
    revealObserver.observe(element);
});

// ===== ACTIVE NAVIGATION =====
const sections = document.querySelectorAll("section[id]");
const navigationLinks = document.querySelectorAll(".nav-links a");

window.addEventListener("scroll", () => {
    let currentSection = "";

    sections.forEach(section => {
        const sectionTop = section.offsetTop - 150;

        if (window.scrollY >= sectionTop) {
            currentSection = section.getAttribute("id");
        }
    });

    navigationLinks.forEach(link => {
        link.classList.remove("active");

        if (link.getAttribute("href") === "#" + currentSection) {
            link.classList.add("active");
        }
    });
});

// ===== BACK TO TOP BUTTON =====
const topButton = document.createElement("button");

topButton.className = "back-to-top";
topButton.innerHTML = "↑";
topButton.setAttribute("aria-label", "Back to top");

document.body.appendChild(topButton);

// Show button when scrolling
window.addEventListener("scroll", () => {
    if (window.scrollY > 400) {
        topButton.classList.add("show");
    } else {
        topButton.classList.remove("show");
    }
});

// Scroll to top when clicked
topButton.addEventListener("click", () => {
    window.scrollTo({
        top: 0,
        behavior: "smooth"
    });
});

// ===== CURRENT YEAR =====
const footer = document.querySelector("footer");

if (footer) {
    const footerParagraph = footer.querySelectorAll("p");

    if (footerParagraph.length > 1) {
        footerParagraph[1].innerHTML =
            "© " + new Date().getFullYear() + " | Personal Portfolio";
    }
}

// ===== PHOTO ERROR CHECK =====
const profilePhoto = document.querySelector(".hero-image img");

if (profilePhoto) {
    profilePhoto.addEventListener("error", () => {
        console.log("Please check your profile photo path inside the images folder.");
    });
}

console.log("Aishwarya's portfolio loaded successfully!");