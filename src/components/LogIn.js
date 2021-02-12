import InputOverlapGroup from './InputOverlapGroup'
import Button from './Button'
import { Link } from 'react-router-dom';

function LogIn() {
    return (
        <div className='log-in-page'>
            <h1>Welcome!</h1>
            <form className='group-log-in-form'>
                <InputOverlapGroup 
                    label='Email:' 
                    inputName='email'
                    inputType='email'
                    inputPlaceholder='Enter your email'
                    inputRequired={true} />
                <InputOverlapGroup 
                    label='Password:' 
                    inputName='password'
                    inputType='password'
                    inputPlaceholder='Enter your password'
                    inputRequired={true} />
                <Button className='button' label='Log In' onClick={handleClick}/>
                <InputOverlapGroup 
                    inputName='remember-me-checkbox'
                    inputType='checkbox'
                    inputRequired={false}
                    className='overlap-group-form-checkbox'
                    checkboxLabel='Remember me' />
            
                <span className='text-link'>Forgot Password?</span>
            </form>
        </div>
    )

    function handleClick(e) {
        e.preventDefault();
        console.log('The button was clicked.');
      }
}

export default LogIn
