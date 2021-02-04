import InputOverlapGroup from './InputOverlapGroup'
import Button from './Button'

function JoinUs() {
    return (
        <div className='join-us-page'>
        {/* 
        <div className="join-us-page">
            <div className="overlap-group">
                <div className="rectangle-15"></div>
                <div className="name poppins-normal-white-24px">{name}</div>
                <div className="email poppins-normal-white-24px">{email}</div>
                <div className="password poppins-normal-white-24px">{password}</div>
                <div className="already-registered poppins-normal-white-24px">{alreadyRegistered}</div>
                <div className="text-1 poppins-normal-white-24px-2">
                    <span className="span1-HIaTye">{spanText}</span>
                    <span className="span2-HIaTye">{spanText2}</span>
                </div>
                <div className="log-in poppins-semi-bold-fun-blue-24px">{logIn}</div>
                <div className="rectangle-9 fun-blue-border-4px"></div>
                <div className="rectangle-16 fun-blue-border-4px"></div>
                <div className="rectangle-17 fun-blue-border-4px"></div>
                <div className="sign-up-button">
                    <div className="overlap-group1">
                    <div className="rectangle-10"></div>
                    <div className="sign-up valign-text-middle poppins-normal-white-24px">{signUp}</div>
                    </div>
                </div>
                <div className="rectangle-18 fun-blue-border-4px"></div>
            </div>
                <h1 className="join-us-now valign-text-middle poppins-bold-white-72px">
                <span>
                    <span className="span1-OPkM0w">{spanText3}</span>
                    <span className="span2-OPkM0w">{spanText4}</span>
                </span>
                </h1>
        */}
            <h1>Join us now!</h1>
            <form className='group-join-us-form'>
                <InputOverlapGroup 
                    label='Name:' 
                    inputName='name'
                    inputType='text'
                    inputPlaceholder='Enter your name'
                    inputRequired='false' />
                <InputOverlapGroup 
                    label='Email:' 
                    inputName='email'
                    inputType='email'
                    inputPlaceholder='Enter your email'
                    inputRequired='true' />
                <InputOverlapGroup 
                    label='Password:' 
                    inputName='password'
                    inputType='password'
                    inputPlaceholder='Enter your password'
                    inputRequired='true' />
                <InputOverlapGroup 
                    inputName='agree-terms-checkbox'
                    inputType='checkbox'
                    inputRequired='true'
                    className='overlap-group-form-checkbox'
                    checkboxLabel='I agree with the Terms & Conditions' />
                <Button className='button' label='Sign Up' onClick={handleClick}/>                
            </form>
        </div>
    )

    function handleClick(e) {
        e.preventDefault();
        console.log('The button was clicked.');
      }
}

export default JoinUs
