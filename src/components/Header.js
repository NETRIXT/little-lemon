import { Link } from 'react-router-dom';
import Logo from '../img/Logo.svg'
import Nav from './Nav'

function Header() {
    return (
        <header>
        <div className="container">
            <div className="header">
                <Link to="/">
        <img src={Logo} alt='logo'></img>
        </Link>
        <Nav/>
        </div>
        </div>
        </header>
    )
}

export default Header;