import { Link } from 'react-router-dom';
import '../styles/Footer.css';

function Footer() {
    const currentYear = new Date().getFullYear();

    return (
        <footer className="footer">
            <div className="footer-content">
                <div className="footer-section">
                    <h3>Dublin Tech Circuit</h3>
                    <p>
                        Ireland's premier student-led technology community, fostering collaboration, 
                        communication, and competition among Dublin's brightest young tech minds.
                    </p>
                    <div className="social-links">
                        <a href="https://twitter.com/dublintechcircuit" target="_blank" rel="noopener noreferrer">
                            <span>🐦 Twitter</span>
                        </a>
                        <a href="https://instagram.com/dublintechcircuit" target="_blank" rel="noopener noreferrer">
                            <span>📸 Instagram</span>
                        </a>
                        <a href="https://linkedin.com/company/dublintechcircuit" target="_blank" rel="noopener noreferrer">
                            <span>💼 LinkedIn</span>
                        </a>
                        <a href="https://discord.gg/dublintechcircuit" target="_blank" rel="noopener noreferrer">
                            <span>💬 Discord</span>
                        </a>
                    </div>
                </div>

                <div className="footer-section">
                    <h4>Quick Links</h4>
                    <nav className="footer-nav">
                        <Link to="/">Home</Link>
                        <Link to="/about">The Team</Link>
                        <Link to="/past-events">Past Events</Link>
                        <Link to="/leaderboard">Leaderboard</Link>
                        <Link to="/register">Register</Link>
                    </nav>
                </div>

                <div className="footer-section">
                    <h4>Get Involved</h4>
                    <ul className="involvement-list">
                        <li>🏫 Bring DTC to your school</li>
                        <li>🤝 Become a mentor</li>
                        <li>💡 Sponsor an event</li>
                        <li>📢 Share our mission</li>
                    </ul>
                </div>

                <div className="footer-section">
                    <h4>Contact</h4>
                    <div className="contact-info">
                        <div className="contact-item">
                            <strong>Email:</strong>
                            <a href="mailto:info@dublintechcircuit.com">info@dublintechcircuit.com</a>
                        </div>
                        <div className="contact-item">
                            <strong>Schools:</strong>
                            <a href="mailto:schools@dublintechcircuit.com">schools@dublintechcircuit.com</a>
                        </div>
                        <div className="contact-item">
                            <strong>Sponsors:</strong>
                            <a href="mailto:partnerships@dublintechcircuit.com">partnerships@dublintechcircuit.com</a>
                        </div>
                    </div>
                </div>
            </div>

            <div className="footer-partners">
                <p>Proudly supported by:</p>
                <div className="partner-logos">
                    <img src="/google.webp" alt="Google" />
                    <img src="/learnovate.svg" alt="Learnovate" />
                    <img src="/raspberrypi.svg" alt="Raspberry Pi Foundation" />
                    <img src="/simplestudy.svg" alt="Simple Study" />
                    <img src="/codetales.svg" alt="CodeTales" />
                </div>
            </div>

            <div className="footer-bottom">
                <div className="footer-bottom-content">
                    <p>&copy; {currentYear} Dublin Tech Circuit. All rights reserved.</p>
                    <div className="footer-legal">
                        <a href="#privacy">Privacy Policy</a>
                        <a href="#terms">Terms of Service</a>
                        <a href="#cookies">Cookie Policy</a>
                    </div>
                </div>
            </div>
        </footer>
    );
}

export default Footer;
