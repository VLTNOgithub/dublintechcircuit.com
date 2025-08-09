import { Link } from 'react-router-dom';

function Navigation() {
    return (
        <div className="navbar">
            <ul className="nav-links">
                <li><Link to="/">Home</Link></li>
                <li><Link to="/leaderboard">Leaderboard</Link></li>
                <li><Link to="/about">The Team</Link></li>
                <li><Link to="/past-events">Past Events</Link></li>
                <li><Link to="/register">Register</Link></li>
            </ul>
        </div>
    );
}

export default Navigation;
