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

function renderRankings() {
    const rankingsList = document.getElementById('rankings-list');
    
    schoolRankings.forEach(school => {
        const rankingDiv = document.createElement('div');
        rankingDiv.className = `ranking-card styled-shape ${school.color}`;
        
        const medal = school.rank <= 3 ? 
            (school.rank === 1 ? '🥇' : school.rank === 2 ? '🥈' : '🥉') : '';
        
        rankingDiv.innerHTML = `
            <div class="ranking-header">
                <div class="rank-number">
                    <span class="rank">#${school.rank}</span>
                    ${medal ? `<span class="medal">${medal}</span>` : ''}
                </div>
                <div class="school-info">
                    <h3>${school.school}</h3>
                    <div class="school-stats">
                        <span class="points">${school.points} points</span>
                        <span class="events-won">${school.eventsWon} events won</span>
                        <span class="participants">${school.totalParticipants} students</span>
                    </div>
                </div>
            </div>
            <div class="achievements">
                <strong>Top Achievements:</strong>
                <div class="achievement-tags">
                    ${school.topAchievements.map(achievement => 
                        `<span class="achievement-tag">${achievement}</span>`
                    ).join('')}
                </div>
            </div>
        `;
        
        rankingsList.appendChild(rankingDiv);
    });
}

function renderCategories() {
    const categoriesGrid = document.getElementById('categories-grid');
    
    competitionCategories.forEach(category => {
        const categoryDiv = document.createElement('div');
        categoryDiv.className = 'category-card styled-shape';
        
        categoryDiv.innerHTML = `
            <h3>${category.name}</h3>
            <p>${category.description}</p>
            <div class="category-leaders">
                <strong>Leading Schools:</strong>
                <ol>
                    ${category.topSchools.map(school => 
                        `<li>${school}</li>`
                    ).join('')}
                </ol>
            </div>
        `;
        
        categoriesGrid.appendChild(categoryDiv);
    });
}

function setCurrentYear() {
    const yearElement = document.getElementById('current-year');
    if (yearElement) {
        yearElement.textContent = new Date().getFullYear();
    }
}

document.addEventListener('DOMContentLoaded', function() {
    renderRankings();
    renderCategories();
    setCurrentYear();
});
