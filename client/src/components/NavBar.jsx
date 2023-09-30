import { Link } from 'react-router-dom'

const NavBar = () => {
    return (
        <nav>
            <ul>
                <li><h1>Button Masher Bazaar 🕹️</h1></li>
            </ul>
            <ul>
                <li><Link to='/'>All Games</Link></li>
                <li><Link to='/platform/PlayStation'>PlayStation</Link></li>
                <li><Link to='/platform/Xbox'>Xbox</Link></li>
                <li><Link to='/platform/Mobile'>Mobile</Link></li>
            </ul>
        </nav>
    )
}

export default NavBar
