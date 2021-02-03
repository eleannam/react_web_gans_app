import { useState } from 'react'
import Button from './Button'
import InputOverlapGroup from './InputOverlapGroup'

function ContactForm() {
    const [showGreetings, setShowGreetings] = useState(false)

    return (
        <>
        {(!showGreetings) ? <>
            <form className='group-contact-form'>
            {/* <div className="name poppins-normal-white-24px">{name}</div>
            <Overlapgroup2
                inputName={overlapgroup2Props.inputName}
                inputType={overlapgroup2Props.inputType}
                inputPlaceholder={overlapgroup2Props.inputPlaceholder}
                inputRequired={overlapgroup2Props.inputrequired}
            />
            <div className="email poppins-normal-white-24px">{email}</div>
            <Overlapgroup2
                inputName={overlapgroup22Props.inputName}
                inputType={overlapgroup22Props.inputType}
                inputPlaceholder={overlapgroup22Props.inputPlaceholder}
                inputRequired={overlapgroup22Props.inputrequired}
                className="overlap-group4"
            />
            <div className="message poppins-normal-white-24px">{message}</div>
            <Overlapgroup2
                inputName={overlapgroup23Props.inputName}
                inputType={overlapgroup23Props.inputType}
                inputPlaceholder={overlapgroup23Props.inputPlaceholder}
                inputRequired={overlapgroup23Props.inputrequired}
                className="overlap-group3"
            />
            <a href="javascript:SubmitForm('form1')" className="align-self-flex-end">
                <div className="send-button">
                <div className="overlap-group-1">
                    <div className="rectangle-10"></div>
                    <div className="send valign-text-middle poppins-normal-white-24px">{send}</div>
                </div>
                </div>
            </a> */}
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
                label='Message:' 
                inputName='message'
                inputType='textarea'
                inputPlaceholder='Type your message'
                inputRequired='false' 
                className='overlap-group-form-message'/> 
            <Button className='button' label='Send' onClick={handleClick}/>
        </form></> : 
        <>
            <h>Thank you for contacting with us!</h>
        </>}
    </>
    )

    function handleClick(e) {
        e.preventDefault();
        setShowGreetings(true);
        console.log('The button was clicked.');
      }
}

export default ContactForm
