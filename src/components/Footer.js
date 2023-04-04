import instaOK from '../img/instaOK.png';

function Footer() {
    return (
        <footer className="footer">
        <nav>
        <h2 className="doormat-title">Doormat Navigation</h2>
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
            <h2>Social Media Links</h2>
            <div className="">
            <a href='/facebook'><img className='fb' src='https://cdn3.iconfinder.com/data/icons/picons-social/57/46-facebook-512.png' alt='facebook'></img></a>
            <a href='/instagram'><img className="insta" src={instaOK} alt='instagram'></img></a>
            </div>
        </div>
        </footer>
    )
}

export default Footer;