const teamMembers = [
    {
        name: "Sean Murphy",
        role: "Founder & CEO",
        school: "Gonzaga College",
        description: "Sean founded Dublin Tech Circuit with the vision of creating Ireland's first student-led tech community. He's passionate about bridging the gap between schools and technology.",
        expertise: ["Leadership", "Event Management", "Community Building"]
    },
    {
        name: "Emma O'Brien",
        role: "Head of Operations",
        school: "Mount Anville Secondary School",
        description: "Emma oversees all operational aspects of DTC events and ensures smooth coordination between participating schools.",
        expertise: ["Operations", "School Liaisons", "Project Management"]
    },
    {
        name: "Liam Walsh",
        role: "Technical Director", 
        school: "Blackrock College",
        description: "Liam leads the technical aspects of our competitions and workshops, designing challenges that push students to innovate.",
        expertise: ["Programming", "Web Development", "AI/ML"]
    },
    {
        name: "Aoife Kelly",
        role: "Community Manager",
        school: "Loreto College St. Stephen's Green",
        description: "Aoife builds and maintains relationships within our growing community of tech enthusiasts across Dublin schools.",
        expertise: ["Community Engagement", "Social Media", "Content Creation"]
    },
    {
        name: "Cian Doyle",
        role: "Event Coordinator",
        school: "Belvedere College",
        description: "Cian coordinates logistics for all DTC events, from venue booking to equipment setup and participant registration.",
        expertise: ["Event Planning", "Logistics", "Venue Management"]
    },
    {
        name: "Sarah McNamara",
        role: "Outreach Manager",
        school: "Holy Child Killiney",
        description: "Sarah works to expand DTC's reach to new schools and helps coordinate with sponsors and industry partners.",
        expertise: ["School Outreach", "Partnership Development", "Marketing"]
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
