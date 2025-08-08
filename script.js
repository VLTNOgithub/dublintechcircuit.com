window.onload = () => {
    var collage = document.querySelector(".collage");

    // First, watch the collage for all images to load
    imagesLoaded( collage, function() {
        console.log("All images loaded, now running Masonry!");

        var msnry = new Masonry(collage, {
            itemSelector: ".collage-item",
            percentPosition: true,
            columnWidth: ".collage-sizer"
        });

        // Now we can safely add our random rotation
        const items = document.querySelectorAll(".collage-item");
        items.forEach(item => {
            const rotation = (Math.random() * 10) - 5;
            item.style.transform = `rotate(${rotation}deg)`;

            item.style.zIndex = Math.floor(Math.random() * 5);
        });
    });
}