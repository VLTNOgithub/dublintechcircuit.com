document.querySelectorAll(".hexagon-container").forEach(container => {
    container.addEventListener("mouseenter", () => {
        const border = container.querySelector(".hex-border");
        border.setAttribute("stroke", "#bada55");
        border.setAttribute("stroke-width", "6");
    });
    container.addEventListener("mouseleave", () => {
        const border = container.querySelector(".hex-border");
        border.setAttribute("stroke", "#879F3C");
        border.setAttribute("stroke-width", "2");
    });
});

async function fetchAndShowModal(markdownUrl, modalId, title) {
    let modal = document.getElementById(modalId);
    if (!modal) {
        modal = document.createElement("div");
        modal.className = "popup-modal";
        modal.id = modalId;
        modal.innerHTML = `
            <div class="popup-modal-content">
                <button class="popup-modal-close" aria-label="Close">&times;</button>
                <h2>${title}</h2>
                <div class="popup-modal-body">Loading...</div>
            </div>
        `;
        document.body.appendChild(modal);

        modal.querySelector(".popup-modal-close").onclick = () => hideModal(modal);
        modal.onclick = e => { if (e.target === modal) hideModal(modal); };
    }

    // Prevent background scroll/interactions
    document.body.classList.add("modal-open");

    // Show with fade-in
    modal.style.display = "flex";
    setTimeout(() => {
        modal.classList.add("show");
        modal.classList.remove("hide");
    }, 10);

    try {
        const res = await fetch(markdownUrl);
        const md = await res.text();
        modal.querySelector(".popup-modal-body").innerHTML = window.marked.parse(md);
    } catch (e) {
        modal.querySelector(".popup-modal-body").textContent = "Failed to load content.";
    }
}

function hideModal(modal) {
    modal.classList.remove("show");
    modal.classList.add("hide");
    setTimeout(() => {
        modal.style.display = "none";
        document.body.classList.remove("modal-open");
    }, 300);
}

// Attach click handlers for #terms and #privacy links
document.addEventListener("DOMContentLoaded", () => {
    console.log("Loaded");
    document.querySelectorAll("a[href='#terms']").forEach(link => {
        link.addEventListener("click", e => {
            e.preventDefault();
            fetchAndShowModal("./terms-of-service.md", "terms-modal", "Terms of Service");
        });
    });
    document.querySelectorAll("a[href='#privacy']").forEach(link => {
        link.addEventListener("click", e => {
            e.preventDefault();
            fetchAndShowModal("./privacy-policy.md", "privacy-modal", "Privacy Policy");
        });
    });
});