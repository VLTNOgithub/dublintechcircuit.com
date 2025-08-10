import '../styles/About.css';

function About() {
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

    return (
        <div className="about-container">
            <section className="about-hero">
                <div className="hero-content">
                    <h1>Meet The Team</h1>
                    <p className="hero-subtitle">
                        The student leaders driving Ireland's tech education revolution
                    </p>
                </div>
            </section>

            <section className="mission-section">
                <div className="narrow">
                    <div className="styled-shape mission-card">
                        <h2>Our Mission</h2>
                        <p>
                            <span className="quote">"Just like every school in Ireland has a GAA team, it's time for schools to have a tech team."</span>
                        </p>
                        <p>
                            Dublin Tech Circuit was founded with the belief that technology education should be 
                            <strong> collaborative</strong>, <strong>competitive</strong>, and most importantly, 
                            <strong> student-led</strong>. We're building a community where young tech enthusiasts 
                            can learn from each other, compete in meaningful challenges, and prepare for careers 
                            in Ireland's thriving tech sector.
                        </p>
                        <div className="mission-stats">
                            <div className="stat">
                                <strong>9+</strong>
                                <span>Schools Participating</span>
                            </div>
                            <div className="stat">
                                <strong>66+</strong>
                                <span>Students Engaged</span>
                            </div>
                            <div className="stat">
                                <strong>100%</strong>
                                <span>Student-Led</span>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            <section className="team-section">
                <div className="narrow">
                    <h2 className="section-title">Leadership Team</h2>
                    <div className="team-grid">
                        {teamMembers.map((member, index) => (
                            <div key={index} className="team-member styled-shape">
                                <div className="member-header">
                                    <h3>{member.name}</h3>
                                    <p className="member-role">{member.role}</p>
                                    <p className="member-school">{member.school}</p>
                                </div>
                                <div className="member-content">
                                    <p className="member-description">{member.description}</p>
                                    <div className="member-expertise">
                                        <strong>Expertise:</strong>
                                        <div className="expertise-tags">
                                            {member.expertise.map((skill, skillIndex) => (
                                                <span key={skillIndex} className="expertise-tag">
                                                    {skill}
                                                </span>
                                            ))}
                                        </div>
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            <section className="values-section">
                <div className="narrow">
                    <h2 className="section-title">Our Values</h2>
                    <div className="values-grid">
                        <div className="value-card styled-shape">
                            <h3>🤝 Collaborate</h3>
                            <p>We believe the best learning happens when students work together, share knowledge, and build on each other's ideas.</p>
                        </div>
                        <div className="value-card styled-shape">
                            <h3>💬 Communicate</h3>
                            <p>Effective communication is key to success in tech. We foster environments where students can express ideas clearly and confidently.</p>
                        </div>
                        <div className="value-card styled-shape">
                            <h3>🏆 Compete</h3>
                            <p>Healthy competition drives innovation and excellence. Our challenges push students to think creatively and solve real problems.</p>
                        </div>
                    </div>
                </div>
            </section>

            <section className="contact-section">
                <div className="narrow">
                    <div className="styled-shape contact-card">
                        <h2>Get In Touch</h2>
                        <p>
                            Interested in joining Dublin Tech Circuit? Want to bring your school into our community? 
                            We'd love to hear from you!
                        </p>
                        <div className="contact-info">
                            <div className="contact-item">
                                <strong>Email:</strong> info@dublintechcircuit.com
                            </div>
                            <div className="contact-item">
                                <strong>Follow us:</strong> @DublinTechCircuit
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    );
}

export default About;
