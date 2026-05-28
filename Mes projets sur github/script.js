document.addEventListener("DOMContentLoaded", function () {

    // =========================
    // Smooth scroll navigation
    // =========================
    const links = document.querySelectorAll(".nav a");

    links.forEach(link => {
        link.addEventListener("click", function (e) {
            e.preventDefault();

            const targetId = this.getAttribute("href");
            const targetSection = document.querySelector(targetId);

            if (targetSection) {
                window.scrollTo({
                    top: targetSection.offsetTop - 60,
                    behavior: "smooth"
                });
            }
        });
    });

    // =========================
    // Simple scroll animation (cards reveal)
    // =========================
    const cards = document.querySelectorAll(".card");

    function revealCards() {
        const windowHeight = window.innerHeight;

        cards.forEach(card => {
            const cardTop = card.getBoundingClientRect().top;

            if (cardTop < windowHeight - 100) {
                card.style.opacity = "1";
                card.style.transform = "translateY(0)";
                card.style.transition = "0.5s ease";
            }
        });
    }

    // Initial state for animation
    cards.forEach(card => {
        card.style.opacity = "0";
        card.style.transform = "translateY(20px)";
    });

    window.addEventListener("scroll", revealCards);

    // Trigger once on load
    revealCards();

});