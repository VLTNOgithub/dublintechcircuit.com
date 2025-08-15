function setupCollage() {
    const collage = document.querySelector('.collage');
    
    // Generate collage items
    for (let i = 1; i <= 46; i++) {
        if (i === 29) continue; // Skip collage29.png as it doesn't exist
        
        const collageItem = document.createElement('div');
        collageItem.className = 'collage-item';
        
        const img = document.createElement('img');
        img.src = `./assets/collage/collage${i.toString().padStart(2, '0')}.webp`;
        img.alt = `Collage ${i}`;
        
        collageItem.appendChild(img);
        collage.appendChild(collageItem);
    }

    collage.style.position = "absolute";

    // Watch the collage for all images to load
    imagesLoaded(collage, function() {
        console.log("All images loaded, now running Masonry!");

        new Masonry(collage, {
            itemSelector: ".collage-item",
            percentPosition: true,
            columnWidth: ".collage-sizer"
        });

        // Add random rotation
        const items = document.querySelectorAll(".collage-item");
        items.forEach(item => {
            const rotation = (Math.random() * 10) - 5;
            item.style.transform = `rotate(${rotation}deg)`;
            item.style.zIndex = Math.floor(Math.random() * 5);
        });
    });

    collage.style.position = "absolute";
}

// Set current year in footer
function setCurrentYear() {
    const yearElement = document.getElementById('current-year');
    if (yearElement) {
        yearElement.textContent = new Date().getFullYear();
    }
}

// Initialize when DOM is loaded
document.addEventListener('DOMContentLoaded', function() {
    setupCollage();
    setCurrentYear();
});
