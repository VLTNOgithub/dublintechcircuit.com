import '../styles/Leaderboard.css';

function Leaderboard() {
    const schoolRankings = [
        {
            rank: 1,
            school: "Drimnagh Castle Secondary School",
            points: 2850,
            eventsWon: 3,
            totalParticipants: 12,
            topAchievements: ["Dublin Tech Circuit Pilot Winner", "AI Challenge Champion", "Web Dev Masters"],
            color: "gold"
        },
        {
            rank: 2,
            school: "Gonzaga College",
            points: 2640,
            eventsWon: 2,
            totalParticipants: 15,
            topAchievements: ["Robotics Competition Winner", "App Development Leaders"],
            color: "silver"
        },
        {
            rank: 3,
            school: "Blackrock College",
            points: 2590,
            eventsWon: 2,
            totalParticipants: 11,
            topAchievements: ["Cybersecurity Challenge Winner", "Data Science Excellence"],
            color: "bronze"
        },
        {
            rank: 4,
            school: "Mount Anville Secondary School",
            points: 2340,
            eventsWon: 1,
            totalParticipants: 9,
            topAchievements: ["UI/UX Design Champions", "Innovation Award"],
            color: "default"
        },
        {
            rank: 5,
            school: "Belvedere College",
            points: 2180,
            eventsWon: 1,
            totalParticipants: 8,
            topAchievements: ["Game Development Specialists", "Tech Talk Excellence"],
            color: "default"
        },
        {
            rank: 6,
            school: "Loreto College St. Stephen's Green",
            points: 1950,
            eventsWon: 0,
            totalParticipants: 7,
            topAchievements: ["Community Engagement Award", "Collaboration Excellence"],
            color: "default"
        },
        {
            rank: 7,
            school: "Holy Child Killiney",
            points: 1820,
            eventsWon: 0,
            totalParticipants: 6,
            topAchievements: ["Best Newcomer Team", "Creative Coding Award"],
            color: "default"
        },
        {
            rank: 8,
            school: "Marian College",
            points: 1690,
            eventsWon: 0,
            totalParticipants: 5,
            topAchievements: ["Host Venue Excellence", "Mentorship Award"],
            color: "default"
        },
        {
            rank: 9,
            school: "St. Michael's College",
            points: 1450,
            eventsWon: 0,
            totalParticipants: 4,
            topAchievements: ["Rising Stars", "Best Team Spirit"],
            color: "default"
        }
    ];

    const getPointsFromAchievements = (achievements) => {
        const pointsMap = {
            "Competition Winner": 500,
            "Champion": 400,
            "Excellence": 300,
            "Award": 200,
            "Leaders": 150
        };
        
        return achievements.reduce((total, achievement) => {
            for (const [key, points] of Object.entries(pointsMap)) {
                if (achievement.includes(key)) {
                    return total + points;
                }
            }
            return total + 100; // Base points for any achievement
        }, 0);
    };

    const competitionCategories = [
        {
            name: "Web Development",
            description: "Building responsive websites and web applications",
            topSchools: ["Drimnagh Castle", "Gonzaga College", "Mount Anville"]
        },
        {
            name: "Mobile App Development",
            description: "Creating innovative mobile applications",
            topSchools: ["Gonzaga College", "Blackrock College", "Belvedere College"]
        },
        {
            name: "Artificial Intelligence",
            description: "Machine learning and AI-powered solutions",
            topSchools: ["Drimnagh Castle", "Blackrock College", "Holy Child Killiney"]
        },
        {
            name: "Cybersecurity",
            description: "Securing digital systems and ethical hacking",
            topSchools: ["Blackrock College", "Belvedere College", "St. Michael's"]
        },
        {
            name: "Game Development",
            description: "Creating engaging games and interactive experiences",
            topSchools: ["Belvedere College", "Loreto College", "Marian College"]
        },
        {
            name: "Data Science",
            description: "Analyzing data to derive meaningful insights",
            topSchools: ["Blackrock College", "Mount Anville", "Gonzaga College"]
        }
    ];

    return (
        <div className="leaderboard-container">
            <section className="leaderboard-hero">
                <div className="hero-content">
                    <h1>School Leaderboard</h1>
                    <p className="hero-subtitle">
                        Celebrating excellence in technology education across Dublin schools
                    </p>
                </div>
            </section>

            <section className="current-season">
                <div className="narrow">
                    <div className="styled-shape season-info">
                        <h2>2024-2025 Season</h2>
                        <p>
                            This season has seen incredible participation and innovation from schools across Dublin. 
                            Points are awarded based on event participation, competition wins, collaboration, and 
                            community contributions.
                        </p>
                        <div className="season-stats">
                            <div className="stat">
                                <strong>9</strong>
                                <span>Participating Schools</span>
                            </div>
                            <div className="stat">
                                <strong>66</strong>
                                <span>Total Students</span>
                            </div>
                            <div className="stat">
                                <strong>12</strong>
                                <span>Events Held</span>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            <section className="rankings-section">
                <div className="narrow">
                    <h2 className="section-title">Overall Rankings</h2>
                    <div className="rankings-list">
                        {schoolRankings.map((school, index) => (
                            <div key={index} className={`ranking-card styled-shape ${school.color}`}>
                                <div className="ranking-header">
                                    <div className="rank-number">
                                        <span className="rank">#{school.rank}</span>
                                        {school.rank <= 3 && (
                                            <span className="medal">
                                                {school.rank === 1 ? '🥇' : school.rank === 2 ? '🥈' : '🥉'}
                                            </span>
                                        )}
                                    </div>
                                    <div className="school-info">
                                        <h3>{school.school}</h3>
                                        <div className="school-stats">
                                            <span className="points">{school.points} points</span>
                                            <span className="events-won">{school.eventsWon} events won</span>
                                            <span className="participants">{school.totalParticipants} students</span>
                                        </div>
                                    </div>
                                </div>
                                <div className="achievements">
                                    <strong>Top Achievements:</strong>
                                    <div className="achievement-tags">
                                        {school.topAchievements.map((achievement, achIndex) => (
                                            <span key={achIndex} className="achievement-tag">
                                                {achievement}
                                            </span>
                                        ))}
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            <section className="categories-section">
                <div className="narrow">
                    <h2 className="section-title">Competition Categories</h2>
                    <div className="categories-grid">
                        {competitionCategories.map((category, index) => (
                            <div key={index} className="category-card styled-shape">
                                <h3>{category.name}</h3>
                                <p>{category.description}</p>
                                <div className="category-leaders">
                                    <strong>Leading Schools:</strong>
                                    <ol>
                                        {category.topSchools.map((school, schoolIndex) => (
                                            <li key={schoolIndex}>{school}</li>
                                        ))}
                                    </ol>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            <section className="scoring-section">
                <div className="narrow">
                    <div className="styled-shape scoring-info">
                        <h2>How Schools Earn Points</h2>
                        <div className="scoring-grid">
                            <div className="scoring-item">
                                <strong>Event Participation</strong>
                                <span>50-100 points per event</span>
                            </div>
                            <div className="scoring-item">
                                <strong>Competition Wins</strong>
                                <span>500-1000 points</span>
                            </div>
                            <div className="scoring-item">
                                <strong>Innovation Projects</strong>
                                <span>200-400 points</span>
                            </div>
                            <div className="scoring-item">
                                <strong>Community Collaboration</strong>
                                <span>100-300 points</span>
                            </div>
                            <div className="scoring-item">
                                <strong>Mentorship & Leadership</strong>
                                <span>150-250 points</span>
                            </div>
                            <div className="scoring-item">
                                <strong>Technical Excellence</strong>
                                <span>200-600 points</span>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    );
}

export default Leaderboard;
