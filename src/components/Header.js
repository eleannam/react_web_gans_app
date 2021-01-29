import Button from './Button'

function Header() {
    return (
        <nav className='desktop-nav'>
            <ul className='menu-items'>
                <li>
                    <h>About Us</h>
                </li>
                <li>
                    <h>Discover</h>
                </li>
                <li>
                    <h>Start</h>
                </li>
                <li>
                    <Button label='Join Us' className='button'/>
                </li> 
            </ul>
        </nav>   
    )
}

export default Header
