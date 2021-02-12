import Button from './Button'
import { Link } from 'react-router-dom'

function Header() {
    return (
        <nav className='desktop-nav'>
            <ul className='menu-items'>
                <li>
                    <Link to='/'>Home</Link>
                </li>

                <li>
                    <Link to='/about'>About Us</Link>
                </li>
                <li>
                    <Link to='/discover'>Discover</Link>
                </li>
                <li>
                    <Link to='/start'>Start</Link>
                </li>
                <li>
                    <Link to='/join-us'>
                        <Button label='Join Us' className='button'/>
                    </Link>
                </li> 
            </ul>
        </nav>   
    )
}

export default Header
