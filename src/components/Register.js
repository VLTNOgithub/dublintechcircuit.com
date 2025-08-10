import { useState } from 'react';
import '../styles/Register.css';

function Register() {
    const [formData, setFormData] = useState({
        studentName: '',
        email: '',
        school: '',
        yearGroup: '',
        interests: [],
        experience: '',
        teamName: '',
        teamMembers: '',
        eventType: '',
        dietaryRequirements: '',
        parentalConsent: false,
        dataProcessing: false
    });

    const [submitted, setSubmitted] = useState(false);

    const techAreas = [
        'Web Development',
        'Mobile App Development',
        'Artificial Intelligence',
        'Cybersecurity',
        'Game Development',
        'Data Science',
        'Robotics',
        'UI/UX Design',
        '3D Printing/CAD',
        'Digital Media'
    ];

    const dublinSchools = [
        'Belvedere College',
        'Blackrock College',
        'Drimnagh Castle Secondary School',
        'Gonzaga College',
        'Holy Child Killiney',
        'Loreto College St. Stephen\'s Green',
        'Marian College',
        'Mount Anville Secondary School',
        'St. Michael\'s College',
        'Other (please specify)'
    ];

    const upcomingEvents = [
        { id: 'winter2025', name: 'Winter Tech Championship 2025', date: 'February 15, 2025' },
        { id: 'spring2025', name: 'Spring Innovation Summit', date: 'April 12, 2025' },
        { id: 'coding2025', name: 'Dublin Coding Marathon', date: 'May 20, 2025' },
        { id: 'summer2025', name: 'Summer Tech Showcase', date: 'June 28, 2025' }
    ];

    const handleInputChange = (e) => {
        const { name, value, type, checked } = e.target;
        
        if (type === 'checkbox') {
            if (name === 'interests') {
                setFormData(prev => ({
                    ...prev,
                    interests: checked 
                        ? [...prev.interests, value]
                        : prev.interests.filter(interest => interest !== value)
                }));
            } else {
                setFormData(prev => ({
                    ...prev,
                    [name]: checked
                }));
            }
        } else {
            setFormData(prev => ({
                ...prev,
                [name]: value
            }));
        }
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        console.log('Form submitted:', formData);
        setSubmitted(true);
    };

    if (submitted) {
        return (
            <div className="register-container">
                <section className="success-section">
                    <div className="narrow">
                        <div className="styled-shape success-card">
                            <h1>🎉 Registration Successful!</h1>
                            <p>
                                Thank you for registering with Dublin Tech Circuit! We're excited to have you join our community.
                            </p>
                            <div className="success-details">
                                <h3>What happens next?</h3>
                                <ul>
                                    <li>✅ You'll receive a confirmation email within 24 hours</li>
                                    <li>📧 Event details will be sent to your registered email</li>
                                    <li>🤝 You'll be added to our community Discord server</li>
                                    <li>📅 Calendar invites will be sent for upcoming events</li>
                                </ul>
                            </div>
                            <button onClick={() => setSubmitted(false)} className="register-another-btn">
                                Register Another Student
                            </button>
                        </div>
                    </div>
                </section>
            </div>
        );
    }

    return (
        <div className="register-container">
            <section className="register-hero">
                <div className="hero-content">
                    <h1>Join Dublin Tech Circuit</h1>
                    <p className="hero-subtitle">
                        Ready to collaborate, communicate, and compete? Register now to become part of Ireland's 
                        premier student-led tech community.
                    </p>
                </div>
            </section>

            <section className="registration-form-section">
                <div className="narrow">
                    <form onSubmit={handleSubmit} className="registration-form styled-shape">
                        <h2>Student Registration</h2>
                        
                        {/* Personal Information */}
                        <div className="form-section">
                            <h3>Personal Information</h3>
                            <div className="form-row">
                                <div className="form-group">
                                    <label htmlFor="studentName">Full Name *</label>
                                    <input
                                        type="text"
                                        id="studentName"
                                        name="studentName"
                                        value={formData.studentName}
                                        onChange={handleInputChange}
                                        required
                                    />
                                </div>
                                <div className="form-group">
                                    <label htmlFor="email">Email Address *</label>
                                    <input
                                        type="email"
                                        id="email"
                                        name="email"
                                        value={formData.email}
                                        onChange={handleInputChange}
                                        required
                                    />
                                </div>
                            </div>

                            <div className="form-row">
                                <div className="form-group">
                                    <label htmlFor="school">School *</label>
                                    <select
                                        id="school"
                                        name="school"
                                        value={formData.school}
                                        onChange={handleInputChange}
                                        required
                                    >
                                        <option value="">Select your school</option>
                                        {dublinSchools.map((school, index) => (
                                            <option key={index} value={school}>{school}</option>
                                        ))}
                                    </select>
                                </div>
                                <div className="form-group">
                                    <label htmlFor="yearGroup">Year Group *</label>
                                    <select
                                        id="yearGroup"
                                        name="yearGroup"
                                        value={formData.yearGroup}
                                        onChange={handleInputChange}
                                        required
                                    >
                                        <option value="">Select year group</option>
                                        <option value="1st Year">1st Year</option>
                                        <option value="2nd Year">2nd Year</option>
                                        <option value="3rd Year">3rd Year</option>
                                        <option value="4th Year">4th Year (TY)</option>
                                        <option value="5th Year">5th Year</option>
                                        <option value="6th Year">6th Year</option>
                                    </select>
                                </div>
                            </div>
                        </div>

                        {/* Tech Interests */}
                        <div className="form-section">
                            <h3>Technology Interests</h3>
                            <p>Select all areas that interest you:</p>
                            <div className="checkbox-grid">
                                {techAreas.map((area, index) => (
                                    <label key={index} className="checkbox-item">
                                        <input
                                            type="checkbox"
                                            name="interests"
                                            value={area}
                                            checked={formData.interests.includes(area)}
                                            onChange={handleInputChange}
                                        />
                                        <span className="checkmark"></span>
                                        {area}
                                    </label>
                                ))}
                            </div>
                        </div>

                        {/* Experience Level */}
                        <div className="form-section">
                            <h3>Experience Level</h3>
                            <div className="radio-group">
                                {['Beginner', 'Intermediate', 'Advanced'].map((level, index) => (
                                    <label key={index} className="radio-item">
                                        <input
                                            type="radio"
                                            name="experience"
                                            value={level}
                                            checked={formData.experience === level}
                                            onChange={handleInputChange}
                                        />
                                        <span className="radio-mark"></span>
                                        <div>
                                            <strong>{level}</strong>
                                            <p>{
                                                level === 'Beginner' ? 'New to coding and tech' :
                                                level === 'Intermediate' ? 'Some coding experience, familiar with basic concepts' :
                                                'Experienced coder, comfortable with multiple languages/frameworks'
                                            }</p>
                                        </div>
                                    </label>
                                ))}
                            </div>
                        </div>

                        {/* Team Information */}
                        <div className="form-section">
                            <h3>Team Information (Optional)</h3>
                            <div className="form-group">
                                <label htmlFor="teamName">Team Name</label>
                                <input
                                    type="text"
                                    id="teamName"
                                    name="teamName"
                                    value={formData.teamName}
                                    onChange={handleInputChange}
                                    placeholder="Leave blank if registering individually"
                                />
                            </div>
                            <div className="form-group">
                                <label htmlFor="teamMembers">Other Team Members</label>
                                <textarea
                                    id="teamMembers"
                                    name="teamMembers"
                                    value={formData.teamMembers}
                                    onChange={handleInputChange}
                                    placeholder="List names of other team members (if applicable)"
                                    rows={3}
                                />
                            </div>
                        </div>

                        {/* Event Selection */}
                        <div className="form-section">
                            <h3>Event Registration</h3>
                            <label htmlFor="eventType">Which event would you like to attend first?</label>
                            <select
                                id="eventType"
                                name="eventType"
                                value={formData.eventType}
                                onChange={handleInputChange}
                            >
                                <option value="">I'm interested in all events</option>
                                {upcomingEvents.map((event, index) => (
                                    <option key={index} value={event.id}>
                                        {event.name} ({event.date})
                                    </option>
                                ))}
                            </select>
                        </div>

                        {/* Additional Information */}
                        <div className="form-section">
                            <h3>Additional Information</h3>
                            <div className="form-group">
                                <label htmlFor="dietaryRequirements">Dietary Requirements/Allergies</label>
                                <textarea
                                    id="dietaryRequirements"
                                    name="dietaryRequirements"
                                    value={formData.dietaryRequirements}
                                    onChange={handleInputChange}
                                    placeholder="Please list any dietary requirements or allergies"
                                    rows={2}
                                />
                            </div>
                        </div>

                        {/* Consent */}
                        <div className="form-section">
                            <h3>Consent & Agreement</h3>
                            <label className="checkbox-item consent-item">
                                <input
                                    type="checkbox"
                                    name="parentalConsent"
                                    checked={formData.parentalConsent}
                                    onChange={handleInputChange}
                                    required
                                />
                                <span className="checkmark"></span>
                                <span>I confirm that I have parental/guardian consent to participate in Dublin Tech Circuit events *</span>
                            </label>
                            <label className="checkbox-item consent-item">
                                <input
                                    type="checkbox"
                                    name="dataProcessing"
                                    checked={formData.dataProcessing}
                                    onChange={handleInputChange}
                                    required
                                />
                                <span className="checkmark"></span>
                                <span>I agree to the processing of my personal data for event coordination and communication purposes *</span>
                            </label>
                        </div>

                        <button type="submit" className="submit-btn">
                            Complete Registration
                        </button>
                    </form>
                </div>
            </section>

            <section className="info-section">
                <div className="narrow">
                    <div className="info-cards">
                        <div className="info-card styled-shape">
                            <h3>🎯 What to Expect</h3>
                            <ul>
                                <li>Hands-on technology workshops</li>
                                <li>Collaborative team challenges</li>
                                <li>Networking with like-minded students</li>
                                <li>Mentorship from industry professionals</li>
                                <li>Recognition and awards</li>
                            </ul>
                        </div>
                        <div className="info-card styled-shape">
                            <h3>📅 Upcoming Events</h3>
                            <ul>
                                {upcomingEvents.map((event, index) => (
                                    <li key={index}>
                                        <strong>{event.name}</strong><br />
                                        {event.date}
                                    </li>
                                ))}
                            </ul>
                        </div>
                        <div className="info-card styled-shape">
                            <h3>💬 Questions?</h3>
                            <p>
                                Need help with registration or have questions about our events? 
                                Contact us at <strong>info@dublintechcircuit.com</strong> or 
                                reach out on our social media channels.
                            </p>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    );
}

export default Register;
