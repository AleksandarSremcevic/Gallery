/* scripts.js */
document.addEventListener("DOMContentLoaded", () => {
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

    const expandButtons = document.querySelectorAll(".expand-button");
    expandButtons.forEach(button => {
        button.addEventListener("click", (e) => {
            e.stopPropagation();
            const menu = button.nextElementSibling;
            menu.style.display = menu.style.display === "block" ? "none" : "block";
            button.innerHTML = menu.style.display === "block" ? "&#x25B2;" : "&#x25BC;";
        });
    });

    document.body.addEventListener("click", () => {
        document.querySelectorAll(".menu").forEach(menu => {
            menu.style.display = "none";
        });
        document.querySelectorAll(".expand-button").forEach(button => {
            button.innerHTML = "&#x25BC;";
        });
    });

    const menuImages = document.querySelectorAll(".menu img");
    menuImages.forEach(image => {
        image.addEventListener("click", (e) => {
            e.stopPropagation();
            overlayImg.src = image.src;
            overlay.style.display = "flex";
        });
    });
});

/* scripts.js */
document.addEventListener("DOMContentLoaded", () => {
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
