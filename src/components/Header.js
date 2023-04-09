import Logo from '../img/Logo.svg'
import Nav from './Nav'

function Header() {
    return (
        <header>
        <div className="container">
            <div className="header">
        <img src={Logo} alt='logo'></img>
        <Nav/>
        </div>
        </div>
        </header>
    )
}

export default Header;