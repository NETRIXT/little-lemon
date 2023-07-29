import logofooter from '../img/logofooter.png'
import { Link } from 'react-router-dom';

function Footer() {
    return (
        <footer className='footer-section'>
            <div className="container">
                <div className="footer">
                    <div className='logo-footer'>
                        <Link to='/'>
            <img src={logofooter} alt='Logo footer'></img>
            </Link></div>
        <nav>
        <h2 className="doormat-title">Navigation</h2>
        <ul className="doormat-nav">
            <li><Link to="/">Home</Link></li>
            <li><Link to="/about">About</Link></li>
            <li><Link to="/menu">Menu</Link></li>
            <li><Link to="/reservations">Reservations</Link></li>
            <li><Link to="/order-online">Order Online</Link></li>
            <li><Link to="/login">Login</Link></li>
        </ul>
        </nav>
        <div className="contact">
            <h2>Contact</h2>
            <div className="info">
            <p>Little Street 42, Tallinn</p>
            <p>+3725304125</p>
            <p>little.lemon@booking.com</p>
            </div>
        </div>
        <div className="">
            <h2>Social Media</h2>
            <div className="social-media-links">
            <a href='/facebook'>Facebook</a> <br></br>
            <a href='/instagram'>Instagram</a>
            </div>
        </div>
        </div>
        </div>
        </footer>
    )
}

export default Footer;