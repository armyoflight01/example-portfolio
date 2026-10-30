
/* =========================================
   MOBILE NAVIGATION
========================================= */

const menuToggle = document.querySelector(".menu-toggle");

const navLinks = document.querySelector(".nav-links");


menuToggle.addEventListener("click", () => {

    const isOpen = navLinks.classList.toggle("open");

    menuToggle.setAttribute(
        "aria-expanded",
        String(isOpen)
    );

    menuToggle.setAttribute(
        "aria-label",
        isOpen
            ? "Close navigation menu"
            : "Open navigation menu"
    );

});


/* =========================================
   CLOSE MENU AFTER CLICKING A LINK
========================================= */

document.querySelectorAll(".nav-links a").forEach((link) => {

    link.addEventListener("click", () => {

        navLinks.classList.remove("open");

        menuToggle.setAttribute(
            "aria-expanded",
            "false"
        );

    });

});


/* =========================================
   AUTOMATIC COPYRIGHT YEAR
========================================= */

document.getElementById("year").textContent =
    new Date().getFullYear();


/* =========================================
   CONTACT FORM
========================================= */

// Demo email address.
// Replace with your actual email.

const recipient = "hello@example.com";


document.getElementById("contactForm").addEventListener(
    "submit",
    (event) => {

        event.preventDefault();

        const form = event.currentTarget;

        const name = form.elements.name.value.trim();

        const email = form.elements.email.value.trim();

        const message = form.elements.message.value.trim();


        const subject = encodeURIComponent(
            `Portfolio inquiry from ${name}`
        );

        const body = encodeURIComponent(
            `Name: ${name}\n` +
            `Email: ${email}\n\n` +
            `${message}`
        );


        document.getElementById("formFeedback").textContent =
            "Opening your email application...";


        window.location.href =
            `mailto:${recipient}?subject=${subject}&body=${body}`;

    }
);
