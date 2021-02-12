import { Link } from 'react-router-dom'
import Button from './Button'

function LandingPage() {
    return (
        <div className='hero-container'>
            <div className='landing-page-title-text'>
                Lorem ipsum dolor sit amet
            </div>
            <div className='landing-page-description-text'>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum non sapien magna. Aliquam interdum nunc.
            </div>
            <Link to='/start'>
                <Button label='Start Now' className='button'/>
            </Link>
        </div>
    )
}

export default LandingPage
