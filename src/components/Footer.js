import { Link } from 'react-router-dom'

function Footer() {
    return (
        <nav className='footer-nav'>
            <ul className='menu-items'>
                <li>
                    <Link to='/about'>About Us</Link>
                </li>
                <li>
                    <Link to='/contact'>Contact</Link>
                </li>
                <li>
                    <Link to='join-us'>Join Us</Link>
                </li> 
            </ul>
        </nav>
    )
}

export default Footer
