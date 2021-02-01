import ContactForm from './ContactForm'
import InputComponent from './InputComponent' 

function InputOverlapGroup({label, className, inputName, inputPlaceholder, inputType, inputRequired}) {
    return (
        <div className='label-input-group'>
            <label>{label}</label>
            <div className={`overlap-group-form- ${className || ''}`}>
                <InputComponent
                    className={`enter-your-${inputName==='message' ? 'message' : ''} poppins-thin-white-24px`}
                    inputName={inputName}
                    inputPlaceholder={inputPlaceholder}
                    inputType={inputType}
                    inputRequired={inputRequired}
                />
                <div className={`rectangle-${inputName==='message' ? 'message' : ''} fun-blue-border-4px`}></div>
            </div>
        </div>
    )
}

export default InputOverlapGroup
