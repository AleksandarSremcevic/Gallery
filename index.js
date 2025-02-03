document.addEventListener("DOMContentLoaded", () => {
    /* Overlay for Image Preview */
    const animatedItems = document.querySelectorAll(".animated-item");
    const overlay = document.createElement("div");
    overlay.classList.add("overlay");
    overlay.innerHTML = '<span class="close-btn">&times;</span><img>';
    document.body.appendChild(overlay);
    const overlayImg = overlay.querySelector("img");
    const closeButton = overlay.querySelector(".close-btn");

    animatedItems.forEach(item => {
        item.addEventListener("click", () => {
            if (item.tagName.toLowerCase() === 'video') {
                const url = item.getAttribute('data-url');
                window.open(url, '_blank');
            } else {
                overlayImg.src = item.src;
                overlay.style.display = "flex";
            }
        });
    });

    overlay.addEventListener("click", (e) => {
        if (e.target === overlay || e.target === closeButton) {
            overlay.style.display = "none";
        }
    });

    /* Expandable Menu - Show/Hide */
    const expandButtons = document.querySelectorAll(".expand-button");

    expandButtons.forEach(button => {
        const menu = button.nextElementSibling;
        menu.style.display = "none"; // Hide menu by default

        button.addEventListener("click", (e) => {
            e.stopPropagation();
            if (menu.style.display === "none") {
                menu.style.display = "grid";
                button.innerHTML = "&#x25B2;"; // Show Less
            } else {
                menu.style.display = "none";
                button.innerHTML = "&#x22EE;"; // Show More
            }
        });
    });

    /* Clickable Images in Expanded Menu */
    const menuItems = document.querySelectorAll(".menu img, .menu video");
    menuItems.forEach(item => {
        item.addEventListener("click", (e) => {
            e.stopPropagation();
            if (item.tagName.toLowerCase() === 'video') {
                const url = item.getAttribute('data-url');
                window.open(url, '_blank');
            } else {
                overlayImg.src = item.src;
                overlay.style.display = "flex";
            }
        });
    });

    /* Burger Menu for Navigation */
    const burgerMenu = document.querySelector(".burger-menu");
    const menuContainer = document.querySelector(".menu-container");

    burgerMenu.addEventListener("click", () => {
        menuContainer.classList.toggle("active");
    });

    document.querySelectorAll(".menu-container a").forEach(link => {
        link.addEventListener("click", () => {
            alert("Page changing functionality can be implemented here!");
        });
    });
});
