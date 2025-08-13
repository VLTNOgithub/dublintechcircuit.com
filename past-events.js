// Load event data and build the page
async function loadEvents() {
    try {
        const res = await fetch("past-events.json");
        const events = await res.json();

        const container = document.getElementById("events-container");

        events.forEach((event, eventIndex) => {
            const eventDiv = document.createElement("div");
            eventDiv.className = "event styled-shape";

            // Event title and meta
            eventDiv.innerHTML = `
                <h2>${event.title}</h2>
                <div class="event-meta">
                <div><strong>Venue:</strong> ${event.venue}</div>
                <div><strong>Date:</strong> ${event.date}</div>
                <div><strong>Sponsors:</strong> ${event.sponsors.join(", ")}</div>
                </div>
                <p>${event.description}</p>
            `;

            if (event.images.length > 0) {
                // Create Splide carousel
                const carousel = document.createElement("div");
                carousel.className = "splide";
                carousel.id = `carousel-${eventIndex}`;

                const track = document.createElement("div");
                track.className = "splide__track";

                const list = document.createElement("div");
                list.className = "splide__list";

                event.images.forEach(src => {
                    const slide = document.createElement("div");
                    slide.className = "splide__slide";
                    const img = document.createElement("img");
                    img.src = src;
                    slide.appendChild(img);
                    list.appendChild(slide);
                });

                track.appendChild(list);
                carousel.appendChild(track);
                eventDiv.appendChild(carousel);
                container.appendChild(eventDiv);

                // Initialize Splide
                new Splide(`#carousel-${eventIndex}`, {
                    type: "slide",
                    perPage: 1,
                    arrows: true,
                    pagination: true,
                    gap: "1rem"
                }).mount();
            } else {
                container.appendChild(eventDiv);
            }
        });
    } catch (e) {
        console.error("Failed to load events:", e);
        document.getElementById("events-container").textContent = "Failed to load events.";
    }
}

function setCurrentYear() {
    const yearElement = document.getElementById('current-year');
    if (yearElement) {
        yearElement.textContent = new Date().getFullYear();
    }
}

// Start loading events on page load
document.addEventListener("DOMContentLoaded", function() {
    loadEvents();
    setCurrentYear();
});
