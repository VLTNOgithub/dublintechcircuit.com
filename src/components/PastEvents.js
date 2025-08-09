import { useState, useEffect } from 'react';
import { Splide, SplideSlide } from '@splidejs/react-splide';
import '@splidejs/react-splide/css';
import '../styles/PastEvents.css';

function PastEvents() {
    const [events, setEvents] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);

    useEffect(() => {
        const loadEvents = async () => {
            try {
                const response = await fetch('/past-events.json');
                if (!response.ok) {
                    throw new Error('Failed to load events');
                }
                const eventData = await response.json();
                setEvents(eventData);
            } catch (e) {
                console.error("Failed to load events:", e);
                setError("Failed to load events.");
            } finally {
                setLoading(false);
            }
        };

        loadEvents();
    }, []);

    if (loading) {
        return <div id="events-container">Loading events...</div>;
    }

    if (error) {
        return <div id="events-container">{error}</div>;
    }

    return (
        <div id="events-container">
            {events.map((event, eventIndex) => (
                <div key={eventIndex} className="event styled-shape">
                    <h2>{event.title}</h2>
                    <div className="event-meta">
                        <div><strong>Venue:</strong> {event.venue}</div>
                        <div><strong>Date:</strong> {event.date}</div>
                        <div><strong>Sponsors:</strong> {event.sponsors.join(", ")}</div>
                    </div>
                    <p>{event.description}</p>
                    
                    {event.images && event.images.length > 0 && (
                        <Splide
                            options={{
                                type: "slide",
                                perPage: 1,
                                arrows: true,
                                pagination: true,
                                gap: "1rem"
                            }}
                        >
                            {event.images.map((imageSrc, imageIndex) => (
                                <SplideSlide key={imageIndex}>
                                    <img src={imageSrc} alt={`${event.title} ${imageIndex + 1}`} />
                                </SplideSlide>
                            ))}
                        </Splide>
                    )}
                </div>
            ))}
        </div>
    );
}

export default PastEvents;
