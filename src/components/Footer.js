import logofooter from '../img/logofooter.png'

function Footer() {
    return (
        <footer className='footer-section'>
            <div className="container">
                <div className="footer">
                    <div className='logo-footer'>
            <img src={logofooter} alt='Logo footer'></img>
                    </div>
        <nav>
        <h2 className="doormat-title">Navigation</h2>
        <ul className="doormat-nav">
            <li><a href="/">Home</a></li>
            <li><a href="/about">About</a></li>
            <li><a href="/menu">Menu</a></li>
            <li><a href="/reservations">Reservations</a></li>
            <li><a href="/order-online">Order Online</a></li>
            <li><a href="/login">Login</a></li>
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