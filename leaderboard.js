let schoolRankings = [];

async function loadRankings() {
    try {
        const res = await fetch('leaderboard.json');
        if (!res.ok) throw new Error('Failed to load leaderboard');
        schoolRankings = await res.json();
        renderRankings();
    } catch (e) {
        const rankingsList = document.getElementById('rankings-list');
        rankingsList.textContent = "Failed to load leaderboard.";
        console.error(e);
    }
}

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
    rankingsList.innerHTML = ""; // Clear previous content

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

document.addEventListener('DOMContentLoaded', function() {
    loadRankings();
    renderCategories();
});