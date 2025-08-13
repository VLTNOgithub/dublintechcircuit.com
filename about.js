const teamMembers = [
    {
        name: "Arjun Gambhir",
        role: "Founder & CEO",
        school: "Marian College",
        description: "Arjun founded Dublin Tech Circuit with the vision of creating Ireland's first student-led tech community.",
        expertise: ["Leadership", "Event Manager", "Community Manager"]
    },
    {
        name: "Valentino Alexandru",
        role: "Founding Member",
        school: "Drimnagh Castle Secondary School",
        description: "Valentino oversees the community discord server and develops the website.",
        expertise: ["Programming", "idk", "Community Manager"]
    }
];

function renderTeamMembers() {
    const teamGrid = document.getElementById('team-grid');
    
    teamMembers.forEach(member => {
        const memberDiv = document.createElement('div');
        memberDiv.className = 'team-member styled-shape';
        
        memberDiv.innerHTML = `
            <div class="member-header">
                <h3>${member.name}</h3>
                <p class="member-role">${member.role}</p>
                <p class="member-school">${member.school}</p>
            </div>
            <div class="member-content">
                <p class="member-description">${member.description}</p>
                <div class="member-expertise">
                    <strong>Expertise:</strong>
                    <div class="expertise-tags">
                        ${member.expertise.map(skill => `<span class="expertise-tag">${skill}</span>`).join('')}
                    </div>
                </div>
            </div>
        `;
        
        teamGrid.appendChild(memberDiv);
    });
}

function setCurrentYear() {
    const yearElement = document.getElementById('current-year');
    if (yearElement) {
        yearElement.textContent = new Date().getFullYear();
    }
}

document.addEventListener('DOMContentLoaded', function() {
    renderTeamMembers();
    setCurrentYear();
});
