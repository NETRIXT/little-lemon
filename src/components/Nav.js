import hamburger from '../img/icon_hamburger.svg'
import { Component } from 'react';

class Nav extends Component {

    state = {clicked: false}
    handleClick = () => {
        this.setState({clicked: !this.state.clicked})
    }

    render () {
    return (
        <nav id="nav" >
        <ul className={this.state.clicked ? "active" : ""}>
            <li><a href="/" className='active'>Home</a></li>
            <li><a href="/about">About</a></li>
            <li><a href="/menu">Menu</a></li>
            <li><a href="/reservations">Reservations</a></li>
            <li><a href="/order-online">Order</a></li>
            <li><a href="/login">Login</a></li>
        </ul>

        <div id='mobile' onClick={this.handleClick}>
            <i id='bar' className={this.state.clicked ? 'fas fa-times' : 'fas fa-bars'}></i>
        </div>
        </nav>
    )}
}

export default Nav;