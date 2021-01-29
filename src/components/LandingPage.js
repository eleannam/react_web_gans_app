import Button from './Button'

function LandingPage() {
    return (
        <div className='hero-container'>
            <div className='landing-page-title-text'>
                <h1>Lorem ipsum dolor sit amet</h1>
            </div>
            <div className='landing-page-description-text'>
                <h1>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum non sapien magna. Aliquam interdum nunc.</h1>
            </div>
            <Button label='Start Now' className='start-button'/>
        </div>
    )
}

export default LandingPage
