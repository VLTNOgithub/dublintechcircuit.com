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
            <div className="section-one" style={{
                backgroundImage: `linear-gradient(0deg, rgb(from var(--secondary-dark) r g b / 100%), rgb(from var(--secondary-dark) r g b / 60%) 10%, rgba(from var(--background) r g b / 30%)), url(/hero.png)`
            }}>
                <div className="hero">
                    <h1>DUBLIN TECH CIRCUIT</h1>
                    <p>Communicate <strong>|</strong> Collaborate <strong>|</strong> Compete</p>
                    <button>About</button>
                </div>
            </div>

            <div className="section-two">
                <div className="narrow">
                    <div className="content-wrapper">
                        <div className="info">
                            <h1>What is Dublin Tech Circuit?</h1>
                            <p>
                                <span className="quote">"Just like every school in Ireland has a GAA team, it's time for schools to have a tech team."</span><br /><br />
                                Dublin Tech Circuit is Ireland's first every post-primary <strong>student-led</strong> community of technology enthusiasts that fosters
                                <strong> peer-to-peer learning</strong> through <strong>intra-school collaboration</strong> and <strong>inter-school competition</strong>,
                                covering all things related to <strong>technology</strong>.
                            </p>
                        </div>

                        <div className="movement-card">
                            <div className="movement-background">
                                <div className="scrolling-background">
                                    <img src="https://api.builder.io/api/v1/image/assets/TEMP/48a04744d3b360fc80d73049956da1cb924375f7?width=400" alt="" />
                                    <img src="https://api.builder.io/api/v1/image/assets/TEMP/aee5fe23ab108be0a65bd574ca52a68f1bac7ff2?width=400" alt="" />
                                </div>
                            </div>
                            <div className="movement-text">
                                <div className="movement-line">
                                    <span className="movement-regular">A </span>
                                    <span className="movement-highlight">movement</span>
                                </div>
                                <div className="movement-line">
                                    <span className="movement-regular">by </span>
                                    <span className="movement-highlight">teens</span>
                                    <span className="movement-regular">,</span>
                                </div>
                                <div className="movement-line">
                                    <span className="movement-regular">for </span>
                                    <span className="movement-highlight">teens</span>
                                    <span className="movement-regular">.</span>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="collage" ref={collageRef}>
                    <div className="collage-sizer"></div>
                    {collageItems}
                </div>
            </div>

            <div className="section-three">
                <div className="narrow">
                    <div className="upcoming-events">
                        <h2>Upcoming Events</h2>
                        <div className="events-grid">
                            <div className="event-card styled-shape">
                                <div className="event-date">
                                    <span className="month">FEB</span>
                                    <span className="day">15</span>
                                </div>
                                <div className="event-info">
                                    <h3>Winter Tech Championship 2025</h3>
                                    <p>Join us for an exciting day of coding challenges, robotics competitions, and innovation showcases.</p>
                                    <span className="event-location">📍 Trinity College Dublin</span>
                                </div>
                            </div>
                            <div className="event-card styled-shape">
                                <div className="event-date">
                                    <span className="month">APR</span>
                                    <span className="day">12</span>
                                </div>
                                <div className="event-info">
                                    <h3>Spring Innovation Summit</h3>
                                    <p>Present your tech projects to industry leaders and compete for the Innovation Award.</p>
                                    <span className="event-location">📍 Dublin City University</span>
                                </div>
                            </div>
                            <div className="event-card styled-shape">
                                <div className="event-date">
                                    <span className="month">MAY</span>
                                    <span className="day">20</span>
                                </div>
                                <div className="event-info">
                                    <h3>Dublin Coding Marathon</h3>
                                    <p>24-hour hackathon featuring teams from across Dublin's secondary schools.</p>
                                    <span className="event-location">📍 Google Dublin HQ</span>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <div className="section-four">
                <div className="narrow">
                    <div className="sponsors-section">
                        <h2>Our Amazing Partners</h2>
                        <p>Dublin Tech Circuit is proudly supported by industry leaders who believe in the power of student-led tech education.</p>
                        <div className="sponsors-grid">
                            <div className="sponsor-card">
                                <img src="/google.webp" alt="Google" />
                                <h4>Google</h4>
                                <p>Supporting innovation and providing mentorship opportunities</p>
                            </div>
                            <div className="sponsor-card">
                                <img src="/learnovate.svg" alt="Learnovate" />
                                <h4>Learnovate</h4>
                                <p>Educational technology research and development partner</p>
                            </div>
                            <div className="sponsor-card">
                                <img src="/raspberrypi.svg" alt="Raspberry Pi Foundation" />
                                <h4>Raspberry Pi Foundation</h4>
                                <p>Providing hardware and resources for hands-on learning</p>
                            </div>
                            <div className="sponsor-card">
                                <img src="/simplestudy.svg" alt="Simple Study" />
                                <h4>Simple Study</h4>
                                <p>Educational platform supporting student success</p>
                            </div>
                            <div className="sponsor-card">
                                <img src="/codetales.svg" alt="CodeTales" />
                                <h4>CodeTales</h4>
                                <p>Coding education and storytelling through technology</p>
                            </div>
                            <div className="sponsor-card">
                                <img src="/tap.png" alt="TAP" />
                                <h4>TAP</h4>
                                <p>Technical assistance and mentorship programs</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <div className="section-five">
                <div className="narrow">
                    <div className="cta-section">
                        <div className="styled-shape cta-card">
                            <h2>Ready to Join the Revolution?</h2>
                            <p>
                                Be part of Ireland's premier student-led tech community. Connect with like-minded students,
                                compete in exciting challenges, and prepare for a future in technology.
                            </p>
                            <div className="cta-buttons">
                                <button onClick={() => window.location.href = '/register'}>
                                    Register Now
                                </button>
                                <button onClick={() => window.location.href = '/about'} className="secondary-btn">
                                    Learn More
                                </button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
}

export default Home;
