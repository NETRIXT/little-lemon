import { Component } from 'react';
import { Link } from 'react-router-dom';

class Nav extends Component {

    state = {clicked: false}
    handleClick = () => {
        this.setState({clicked: !this.state.clicked})
    }

    render () {
    return (
        <nav id="nav" >
        <ul className={this.state.clicked ? "active" : ""}>
            <li>
                <Link to="/" className='active'>Home</Link>
                </li>
            <li>
                <Link to="/about">About</Link>
                </li>
            <li><Link to="/menu">Menu</Link></li>
            <li><Link to="/reservations">Reservations</Link></li>
            <li><Link to="/order-online">Order</Link></li>
            <li><Link to="/login">Login</Link></li>
        </ul>

        <div id='mobile' onClick={this.handleClick}>
            <i id='bar' className={this.state.clicked ? 'fas fa-times' : 'fas fa-bars'}></i>
        </div>
        </nav>
    )}
}

export default Nav;