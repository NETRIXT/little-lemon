import Logo from '../img/Logo.svg'
import Nav from './Nav'

function Header() {
    return (
        <header className="header">
        <img src={Logo} alt='logo'></img>
        <Nav/>
        </header>
    )
}

export default Header;