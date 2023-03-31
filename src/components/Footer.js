function Footer() {
    return (
        <footer>
        <nav>
        <h2>Doormat Navigation</h2>
        <ul>
            <li><a href="/">Home</a></li>
            <li><a href="/about">About</a></li>
            <li><a href="/menu">Menu</a></li>
            <li><a href="/reservations">Reservations</a></li>
            <li><a href="/order-online">Order Online</a></li>
            <li><a href="/login">Login</a></li>
        </ul>
        </nav>
        <div>
            <h2>Contact</h2>
            <p>Adress</p>
            <p>phone number</p>
            <p>email</p>
        </div>
        <div>
            <h2>Social Media Links</h2>
            <a href='/facebook'>Facebook<img src='' alt='facebook'></img></a>
            <a href='/instagram'>Instagram<img src='' alt='instagram'></img></a>
        </div>
        </footer>
    )
}

export default Footer;