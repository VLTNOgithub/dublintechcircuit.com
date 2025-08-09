import { useEffect, useRef } from 'react';
import Masonry from 'masonry-layout';
import '../styles/Home.css';

function Home() {
    const collageRef = useRef(null);

    useEffect(() => {
        const setupCollage = () => {
            const collage = collageRef.current;
            if (!collage) return;

            collage.style.position = "absolute";

            // Wait for images to load
            const images = collage.querySelectorAll('img');
            let loadedImages = 0;
            const totalImages = images.length;

            const checkAllImagesLoaded = () => {
                loadedImages++;
                if (loadedImages === totalImages) {
                    console.log("All images loaded, now running Masonry!");

                    new Masonry(collage, {
                        itemSelector: ".collage-item",
                        percentPosition: true,
                        columnWidth: ".collage-sizer"
                    });

                    // Add random rotation
                    const items = collage.querySelectorAll(".collage-item");
                    items.forEach(item => {
                        const rotation = (Math.random() * 10) - 5;
                        item.style.transform = `rotate(${rotation}deg)`;
                        item.style.zIndex = Math.floor(Math.random() * 5);
                    });
                }
            };

            images.forEach(img => {
                if (img.complete) {
                    checkAllImagesLoaded();
                } else {
                    img.addEventListener('load', checkAllImagesLoaded);
                    img.addEventListener('error', checkAllImagesLoaded);
                }
            });

            collage.style.position = "absolute";
        };

        setupCollage();
    }, []);

    // Generate collage items
    const collageItems = [];
    for (let i = 1; i <= 46; i++) {
        if (i === 29) continue; // Skip collage29.png as it doesn't exist in the original
        collageItems.push(
            <div key={i} className="collage-item">
                <img src={`/collage/collage${i.toString().padStart(2, '0')}.png`} alt={`Collage ${i}`} />
            </div>
        );
    }

    return (
        <>
            <div className="section-one">
                <div className="hero">
                    <h1>DUBLIN TECH CIRCUIT</h1>
                    <p>Communicate <strong>|</strong> Collaborate <strong>|</strong> Compete</p>
                    <button>About</button>
                </div>
            </div>

            <div className="section-two">
                <div className="narrow">
                    <div className="info">
                        <h1>What is Dublin Tech Circuit?</h1>
                        <p>
                            <span className="quote">"Just like every school in Ireland has a GAA team, it's time for schools to have a tech team."</span><br /><br />
                            Dublin Tech Circuit is Ireland's first every post-primary <strong>student-led</strong> community of technology enthusiasts that fosters
                            <strong> peer-to-peer learning</strong> through <strong>intra-school collaboration</strong> and <strong>inter-school competition</strong>,
                            covering all things related to <strong>technology</strong>.
                        </p>
                    </div>
                    <div className=""></div>
                </div>
                <div className="collage" ref={collageRef}>
                    <div className="collage-sizer"></div>
                    {collageItems}
                </div>
            </div>

            <div className="section-three">
            </div>
        </>
    );
}

export default Home;
