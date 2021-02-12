import InputOverlapGroup from './InputOverlapGroup'
import Button from './Button'
import { Link } from 'react-router-dom';

function JoinUs() {
    return (
        <div className='join-us-page'>
            <h1>Join us now!</h1>
            <form className='group-join-us-form'>
                <InputOverlapGroup 
                    label='Name:' 
                    inputName='name'
                    inputType='text'
                    inputPlaceholder='Enter your name'
                    inputRequired={true} />
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
                <InputOverlapGroup 
                    inputName='agree-terms-checkbox'
                    inputType='checkbox'
                    inputRequired={true}
                    className='overlap-group-form-checkbox'
                    checkboxLabel='I agree with the Terms & Conditions' />
                <Button className='button' label='Sign Up' onClick={handleClick}/>
                <div className='text-already-registered-log-in'>
                    <span className='poppins-thin-white-regular-24px'>Already registered? </span>
                    <Link className='text-link' to='/log-in'>Log In</Link>
                </div>
            </form>
        </div>
    )

    function handleClick(e) {
        e.preventDefault();
        console.log('The button was clicked.');
      }
}

export default JoinUs
